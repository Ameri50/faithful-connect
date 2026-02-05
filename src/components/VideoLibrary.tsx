 import { motion } from "framer-motion";
 import { Play, BookOpen, Music, Heart } from "lucide-react";
 import { Card, CardContent } from "@/components/ui/card";
 import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import { AspectRatio } from "@/components/ui/aspect-ratio";
 
 const videos = {
   ensenanzas: [
     { id: "dQw4w9WgXcQ", title: "La Fe que Transforma", description: "Enseñanza sobre la fe viva" },
     { id: "dQw4w9WgXcQ", title: "Caminando en Esperanza", description: "Mensaje de esperanza" },
     { id: "dQw4w9WgXcQ", title: "El Poder de la Palabra", description: "Estudio bíblico profundo" },
   ],
   oraciones: [
     { id: "dQw4w9WgXcQ", title: "Oración de Sanidad", description: "Servicio de oración especial" },
     { id: "dQw4w9WgXcQ", title: "Intercesión", description: "Tiempo de intercesión" },
   ],
   alabanzas: [
     { id: "dQw4w9WgXcQ", title: "Adoración en Espíritu", description: "Tiempo de alabanza" },
     { id: "dQw4w9WgXcQ", title: "Cánticos de Fe", description: "Himnos de fe" },
   ],
 };
 
 const categories = [
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
 
         <Tabs defaultValue="ensenanzas" className="w-full">
           <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
             {categories.map((cat) => (
               <TabsTrigger key={cat.id} value={cat.id} className="gap-2">
                 <cat.icon className="h-4 w-4" />
                 <span className="hidden sm:inline">{cat.label}</span>
               </TabsTrigger>
             ))}
           </TabsList>
 
           {Object.entries(videos).map(([category, videoList]) => (
             <TabsContent key={category} value={category}>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {videoList.map((video, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4, delay: index * 0.1 }}
                   >
                     <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
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