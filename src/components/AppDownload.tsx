 import { motion } from "framer-motion";
 import { Download, Smartphone, Globe, Headphones, BookOpen } from "lucide-react";
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
 
 export function AppDownload() {
   return (
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
 
             <Button size="lg" className="gap-2 text-base" asChild>
               <a
                 href="https://branham.org/es/articles/8152019_TheTableDesktopApp"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <Download className="h-5 w-5" />
                 Descargar Aplicación
               </a>
             </Button>
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
                       <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                         Windows
                       </span>
                       <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                         macOS
                       </span>
                       <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                         Linux
                       </span>
                       <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                         iOS
                       </span>
                       <span className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                         Android
                       </span>
                     </div>
                   </div>
                 </CardContent>
               </Card>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }