import { motion } from "framer-motion";
import { Play, BookOpen, Music, Heart, Radio } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const videos = {
  envivo: [
    { id: "1VtEKQLScTA", title: "Transmisión En Vivo - Domingo", description: "Servicio dominical en directo", isLive: true },
  ],
  ensenanzas: [
    { id: "1VtEKQLScTA", title: "La Fe que Transforma", description: "Enseñanza profunda sobre la fe viva" },
    { id: "7-dKxAMzWAc", title: "Caminando en Esperanza", description: "Mensaje de esperanza y fortaleza" },
    { id: "gv9kW1dIYF4", title: "El Poder de la Palabra", description: "Estudio bíblico profundo" },
    { id: "rcwUYR-cSDk", title: "Verdades Eternas", description: "Revelación de la palabra de Dios" },
    { id: "zGPUw1PpbgM", title: "Camino de Santidad", description: "Mensaje transformador" },
  ],
  oraciones: [
    { id: "uFpI9aI7qco", title: "Oración de Sanidad", description: "Servicio de oración especial" },
    { id: "qlsK6rcTlzU", title: "Intercesión", description: "Tiempo de intercesión poderosa" },
    { id: "5JwwJlUQkrU", title: "Oración por Naciones", description: "Intercesión por el mundo" },
  ],
  alabanzas: [
    { id: "qz9ckCX_wdo", title: "Adoración en Espíritu", description: "Tiempo de alabanza transformador" },
  ],
};

const categories = [
  { id: "envivo", label: "En Vivo", icon: Radio },
  { id: "ensenanzas", label: "Enseñanzas", icon: BookOpen },
  { id: "oraciones", label: "Oraciones", icon: Heart },
  { id: "alabanzas", label: "Alabanzas", icon: Music },
];

export function VideoLibrary() {
  return (
    <section id="videos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Play className="h-4 w-4" />
            Biblioteca de Videos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Crece en fe con nuestro contenido
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra colección de enseñanzas, oraciones y alabanzas 
            diseñadas para fortalecer tu caminar espiritual.
          </p>
        </motion.div>

        <Tabs defaultValue="envivo" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="gap-2">
                <cat.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(videos).map(([category, videoList]) => (
            <TabsContent key={category} value={category}>
              {category === "envivo" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
                  <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                    EN VIVO AHORA
                  </span>
                </div>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoList.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className={`overflow-hidden hover:shadow-lg transition-shadow group ${
                      video.isLive ? "border-red-500 border-2" : ""
                    }`}>
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </AspectRatio>
                      <CardContent className="p-4">
                        {video.isLive && (
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase">EN VIVO</span>
                          </div>
                        )}
                        <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {video.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}