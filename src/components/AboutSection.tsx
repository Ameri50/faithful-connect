 import { motion } from "framer-motion";
 import { Heart, Users, Sparkles } from "lucide-react";
 
 const values = [
   {
     icon: Heart,
     title: "Fe Viva",
     description: "Creemos en una fe que transforma vidas y trae esperanza a los corazones.",
   },
   {
     icon: Users,
     title: "Comunidad",
     description: "Somos una familia global unida por el amor de Dios y su palabra.",
   },
   {
     icon: Sparkles,
     title: "Crecimiento",
     description: "Buscamos el crecimiento espiritual continuo a través de la palabra.",
   },
 ];
 
 export function AboutSection() {
   return (
     <section id="nosotros" className="py-20 md:py-32 bg-background">
       <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
           >
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
               <Heart className="h-4 w-4" />
               Sobre Nosotros
             </span>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
               Nuestra Misión
             </h2>
             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
               El Tabernáculo Branham es una comunidad de fe dedicada a compartir 
               el mensaje del evangelio restaurado. Creemos en el poder transformador 
               de la Palabra de Dios y en la importancia de vivir una vida de fe, 
               esperanza y amor.
             </p>
           </motion.div>
 
           <div className="grid md:grid-cols-3 gap-8">
             {values.map((value, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: index * 0.1 }}
                 className="text-center"
               >
                 <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                   <value.icon className="h-8 w-8 text-primary" />
                 </div>
                 <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                   {value.title}
                 </h3>
                 <p className="text-muted-foreground">{value.description}</p>
               </motion.div>
             ))}
           </div>
 
           <motion.blockquote
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mt-16 text-center"
           >
             <p className="text-xl md:text-2xl font-serif italic text-foreground mb-4">
               "La fe es la sustancia de las cosas que se esperan, la demostración 
               de las cosas que no se ven."
             </p>
             <cite className="text-muted-foreground">— Hebreos 11:1</cite>
           </motion.blockquote>
         </div>
       </div>
     </section>
   );
 }