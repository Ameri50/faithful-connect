 import { motion } from "framer-motion";
 import { Play, Heart } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 export function HeroSection() {
   return (
     <section
       id="inicio"
       className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
     >
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
       
       {/* Decorative elements */}
       <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
       <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
 
       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
               <Heart className="h-4 w-4" />
               Bienvenidos a nuestra comunidad de fe
             </span>
           </motion.div>
 
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
           >
             Un lugar donde la{" "}
             <span className="text-primary">fe</span> crece y la{" "}
             <span className="text-primary">esperanza</span> florece
           </motion.h1>
 
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
           >
             Únete a miles de creyentes en todo el mundo. Transmisiones en vivo, 
             enseñanzas de fe y una comunidad que te acompaña en tu crecimiento espiritual.
           </motion.p>
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
           >
             <Button
               size="lg"
               className="gap-2 text-base px-8"
               asChild
             >
               <a href="#transmision">
                 <Play className="h-5 w-5" />
                 Ver Transmisión en Vivo
               </a>
             </Button>
             <Button
               size="lg"
               variant="outline"
               className="text-base px-8"
               asChild
             >
               <a href="#videos">Explorar Videos</a>
             </Button>
           </motion.div>
         </div>
       </div>
 
       {/* Scroll indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 1 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
       >
         <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
           <motion.div
             animate={{ y: [0, 12, 0] }}
             transition={{ repeat: Infinity, duration: 1.5 }}
             className="w-1.5 h-3 bg-primary rounded-full mt-2"
           />
         </div>
       </motion.div>
     </section>
   );
 }