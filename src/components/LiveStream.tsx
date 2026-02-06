import { motion } from "framer-motion";
import { Radio, Calendar, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState, useEffect } from "react";

const schedule = [
  { day: "Domingo", time: "10:00 AM", service: "Servicio Principal" },
  { day: "Miércoles", time: "7:00 PM", service: "Estudio Bíblico" },
  { day: "Viernes", time: "7:00 PM", service: "Oración" },
];

export function LiveStream() {
  const [peruTime, setPeruTime] = useState<string>("");
  const [peruDate, setPeruDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Crear fecha en zona horaria de Perú (PET - UTC-5)
      const now = new Date();
      const peruFormatter = new Intl.DateTimeFormat("es-PE", {
        timeZone: "America/Lima",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      
      const dateFormatter = new Intl.DateTimeFormat("es-PE", {
        timeZone: "America/Lima",
        weekday: "long",
        day: "numeric",
        month: "long",
      });

      setPeruTime(peruFormatter.format(now));
      setPeruDate(dateFormatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="transmision" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Radio className="h-4 w-4 animate-pulse" />
            Transmisión en Vivo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Conéctate con nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestros servicios en vivo desde cualquier lugar del mundo.
            La fe no conoce fronteras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://branhamtabernacle.org/es/streaming"
                  title="Transmisión en Vivo - Tabernáculo Branham"
                  className="w-full h-full"
                  allowFullScreen
                />
              </AspectRatio>
            </Card>
            <div className="mt-4 flex justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://branhamtabernacle.org/es/streaming"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Radio className="h-5 w-5" />
                  Abrir en pantalla completa
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Schedule & Clock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Reloj Digital */}
            <Card className="overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="h-5 w-5 text-primary animate-spin" style={{ animationDuration: "6s" }} />
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Hora en Perú
                  </h3>
                </div>
                
                {/* Tiempo Digital */}
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-bold text-primary font-mono tracking-tight mb-2">
                    {peruTime}
                  </div>
                  <p className="text-sm text-muted-foreground capitalize">
                    {peruDate}
                  </p>
                </div>

                {/* Indicador de zona horaria */}
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-xs text-muted-foreground">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Zona Horaria: PET (UTC-5)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Horarios de Servicio */}
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Horarios de Servicio
                  </h3>
                </div>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group relative flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/15 hover:to-primary/5 border border-primary/10 hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
                    >
                      {/* Efecto de fondo animado */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="relative flex-1">
                        <p className="font-semibold text-foreground">{item.day}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.time} - {item.service}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-muted-foreground text-center">
                  ⏰ Horarios en zona horaria de Perú (PET)
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}