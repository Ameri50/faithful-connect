import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DOWNLOADS_DIR = path.join(process.cwd(), 'public', 'downloads');

export async function GET(request: NextRequest, { params }: { params: { os: string } }) {
  try {
    const { os } = params;
    const fileMap: Record<string, string> = {
      windows: 'TheTable-Setup-Windows.exe',
      macos: 'TheTable-Setup-macOS.dmg',
      linux: 'TheTable-Setup-Linux.AppImage',
      ios: 'TheTable-iOS.ipa',
      android: 'TheTable-Android.apk',
    };
    const filename = fileMap[os.toLowerCase()];
    if (!filename) {
      return NextResponse.json({ error: 'Sistema operativo no válido' }, { status: 400 });
    }
    const filePath = path.join(DOWNLOADS_DIR, filename);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Archivo no encontrado' }, { status: 404 });
    }
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Type': getMimeType(filename),
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error al descargar' }, { status: 500 });
  }
}

function getMimeType(filename: string): string {
  const mimeTypes: Record<string, string> = {
    '.exe': 'application/x-msdownload',
    '.dmg': 'application/x-apple-diskimage',
    '.AppImage': 'application/x-executable',
    '.ipa': 'application/octet-stream',
    '.apk': 'application/vnd.android.package-archive',
  };
  return mimeTypes[path.extname(filename)] || 'application/octet-stream';
}