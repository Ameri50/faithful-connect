 import { motion } from "framer-motion";
 import { Radio, Calendar, Clock } from "lucide-react";
 import { Card, CardContent } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { AspectRatio } from "@/components/ui/aspect-ratio";
 
 const schedule = [
   { day: "Domingo", time: "10:00 AM", service: "Servicio Principal" },
   { day: "Miércoles", time: "7:00 PM", service: "Estudio Bíblico" },
   { day: "Viernes", time: "7:00 PM", service: "Oración" },
 ];
 
 export function LiveStream() {
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
 
           {/* Schedule */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
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
                     <div
                       key={index}
                       className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                     >
                       <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                         <Clock className="h-5 w-5 text-primary" />
                       </div>
                       <div>
                         <p className="font-semibold text-foreground">{item.day}</p>
                         <p className="text-sm text-muted-foreground">
                           {item.time} - {item.service}
                         </p>
                       </div>
                     </div>
                   ))}
                 </div>
                 <p className="mt-6 text-sm text-muted-foreground text-center">
                   Hora local de Jeffersonville, Indiana (EST)
                 </p>
               </CardContent>
             </Card>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }