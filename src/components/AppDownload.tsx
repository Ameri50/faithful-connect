import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Smartphone, Globe, Headphones, BookOpen, X, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "Acceso Global",
    description: "Conéctate desde cualquier parte del mundo",
  },
  {
    icon: Headphones,
    title: "Audio y Video",
    description: "Miles de sermones en múltiples idiomas",
  },
  {
    icon: BookOpen,
    title: "Biblioteca Completa",
    description: "Accede a todas las enseñanzas del profeta",
  },
];

const downloadLinks = [
  { os: "Windows", filename: "TheTable-Setup-Windows.exe", path: "/api/downloads/windows", icon: Monitor },
  { os: "macOS", filename: "TheTable-Setup-macOS.dmg", path: "/api/downloads/macos", icon: Monitor },
  { os: "Linux", filename: "TheTable-Setup-Linux.AppImage", path: "/api/downloads/linux", icon: Monitor },
  { os: "iOS", filename: "TheTable-iOS.ipa", path: "/api/downloads/ios", icon: Smartphone },
  { os: "Android", filename: "TheTable-Android.apk", path: "/api/downloads/android", icon: Smartphone },
];

interface Platform {
  os: string;
  filename: string;
  path: string;
  icon: unknown;
  type: "desktop" | "mobile";
}

export function AppDownload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownload = async (downloadPath: string, filename: string) => {
    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const response = await fetch(downloadPath);

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

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
        setIsModalOpen(false);
      }, 1500);
    } catch (error) {
      console.error("Error descargando:", error);
      alert("Error al descargar. Por favor, intenta de nuevo.");
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  const downloadByOS = () => {
    // Detectar el SO del usuario
    const userAgent = window.navigator.userAgent;
    let selectedDownload = downloadLinks[0];

    if (userAgent.indexOf("Win") > -1) {
      selectedDownload = downloadLinks[0]; // Windows
    } else if (userAgent.indexOf("Mac") > -1) {
      selectedDownload = downloadLinks[1]; // macOS
    } else if (userAgent.indexOf("Linux") > -1) {
      selectedDownload = downloadLinks[2]; // Linux
    } else if (userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPad") > -1) {
      selectedDownload = downloadLinks[3]; // iOS
    } else if (userAgent.indexOf("Android") > -1) {
      selectedDownload = downloadLinks[4]; // Android
    }

    handleDownload(selectedDownload.path, selectedDownload.filename);
  };

  return (
    <>
      <section id="app" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Smartphone className="h-4 w-4" />
                Aplicación Oficial
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Lleva la fe contigo a todas partes
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Descarga la aplicación oficial "The Table" y accede a miles de 
                sermones, enseñanzas y recursos espirituales. Disponible para 
                escritorio, móvil y tablet.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Botones de descarga */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gap-2 text-base"
                  onClick={downloadByOS}
                >
                  <Download className="h-5 w-5" />
                  Descargar Ahora
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 text-base"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Smartphone className="h-5 w-5" />
                  Otras versiones
                </Button>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3" />
                <Card className="relative overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Smartphone className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                        The Table App
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Tu biblioteca espiritual en la palma de tu mano
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {downloadLinks.map((link) => (
                          <button
                            key={link.os}
                            onClick={() => handleDownload(link.path, link.filename)}
                            className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-pointer"
                          >
                            {link.os}
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal de otras versiones */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isDownloading && setIsModalOpen(false)}
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
                <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                  <h2 className="text-2xl font-bold text-foreground">
                    Selecciona tu plataforma
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
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
                        <div className="w-16 h-16 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-primary animate-spin" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Descargando...</h3>
                      <p className="text-muted-foreground mb-4">
                        Por favor espera mientras descargamos tu archivo
                      </p>
                      <div className="w-full max-w-xs">
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
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
                    <>
                      {/* Computadoras de escritorio */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Monitor className="h-5 w-5 text-primary" />
                          Computadoras
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {downloadLinks
                            .filter((link) => link.os !== "iOS" && link.os !== "Android")
                            .map((link) => (
                              <motion.button
                                key={link.os}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={() => handleDownload(link.path, link.filename)}
                                className="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
                              >
                                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                                  <Monitor className="h-8 w-8" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  {link.os}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {link.filename}
                                </p>
                              </motion.button>
                            ))}
                        </div>
                      </div>

                      {/* Dispositivos móviles */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Smartphone className="h-5 w-5 text-primary" />
                          Dispositivos Móviles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {downloadLinks
                            .filter((link) => link.os === "iOS" || link.os === "Android")
                            .map((link) => (
                              <motion.button
                                key={link.os}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={() => handleDownload(link.path, link.filename)}
                                className="p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
                              >
                                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                                  <Smartphone className="h-8 w-8" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  {link.os}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {link.filename}
                                </p>
                              </motion.button>
                            ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Footer */}
                {!isDownloading && (
                  <div className="p-6 border-t border-slate-200 dark:border-slate-700">
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      variant="outline"
                      className="w-full"
                    >
                      Cerrar
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}