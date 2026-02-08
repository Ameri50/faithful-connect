// components/DownloadModal.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Smartphone, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadOption {
  os: string;
  icon: React.ReactNode;
  description: string;
  versions: { name: string; api: string }[];
}

const downloadOptions: DownloadOption[] = [
  {
    os: "Windows",
    icon: <Monitor className="h-8 w-8" />,
    description: "Para computadoras con Windows",
    versions: [{ name: "Windows 10+", api: "windows" }],
  },
  {
    os: "macOS",
    icon: <Monitor className="h-8 w-8" />,
    description: "Para computadoras Apple",
    versions: [{ name: "macOS 10.15+", api: "macos" }],
  },
  
  {
    os: "iOS",
    icon: <Smartphone className="h-8 w-8" />,
    description: "Para iPhone y iPad",
    versions: [{ name: "iOS 13+", api: "ios" }],
  },
  {
    os: "Android",
    icon: <Smartphone className="h-8 w-8" />,
    description: "Para dispositivos Android",
    versions: [{ name: "Android 8+", api: "android" }],
  },
];

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownload = async (osType: string) => {
    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const response = await fetch(`/api/downloads/${osType}`);

      if (!response.ok) {
        throw new Error("Error al descargar");
      }

      // Simular progreso
      const simulateProgress = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(simulateProgress);
            return prev;
          }
          return prev + Math.random() * 30;
        });
      }, 200);

      const blob = await response.blob();
      clearInterval(simulateProgress);
      setDownloadProgress(100);

      // Crear URL y descargar
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      
      // Obtener nombre del archivo del header
      const contentDisposition = response.headers.get("content-disposition");
      const filename = contentDisposition
        ? contentDisposition.split("filename=")[1].replace(/"/g, "")
        : `TheTable-${osType}`;

      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Cerrar modal después de 2 segundos
      setTimeout(() => {
        onClose();
        setIsDownloading(false);
        setDownloadProgress(0);
      }, 2000);
    } catch (error) {
      console.error("Error descargando:", error);
      alert("Error al descargar. Por favor, intenta de nuevo.");
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-foreground">
                  Selecciona tu plataforma
                </h2>
                <button
                  onClick={onClose}
                  disabled={isDownloading}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors disabled:opacity-50"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {isDownloading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Descargando...
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Por favor espera mientras descargamos tu archivo
                    </p>
                    <div className="w-full max-w-xs">
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${downloadProgress}%` }}
                          className="h-full bg-primary"
                          transition={{ ease: "easeOut" }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        {Math.round(downloadProgress)}%
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {downloadOptions.map((option, index) => (
                      <motion.button
                        key={option.os}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() =>
                          handleDownload(option.versions[0].api)
                        }
                        className="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
                      >
                        <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                          {option.icon}
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {option.os}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {option.description}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {option.versions[0].name}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {!isDownloading && (
                <div className="p-6 border-t border-slate-200 dark:border-slate-700 flex gap-3">
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}