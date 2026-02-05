 import { Youtube, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
 import logo from "@/assets/logo.png";
 
 const socialLinks = [
   { icon: Youtube, href: "https://youtube.com/@branhamtabernacle", label: "YouTube" },
   { icon: Facebook, href: "#", label: "Facebook" },
 ];
 
 const quickLinks = [
   { href: "#inicio", label: "Inicio" },
   { href: "#videos", label: "Videos" },
   { href: "#transmision", label: "Transmisión" },
   { href: "#app", label: "Descargar App" },
   { href: "#nosotros", label: "Nosotros" },
 ];
 
 export function Footer() {
   return (
     <footer className="bg-secondary/50 border-t border-border">
       <div className="container mx-auto px-4 py-12 md:py-16">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
           {/* Brand */}
           <div className="lg:col-span-2">
             <a href="#inicio" className="flex items-center gap-3 mb-4">
               <img src={logo} alt="Tabernáculo Branham" className="h-12 w-auto" />
               <span className="font-serif text-xl font-semibold text-foreground">
                 Tabernáculo Branham
               </span>
             </a>
             <p className="text-muted-foreground mb-6 max-w-md">
               Una comunidad de fe dedicada a compartir el mensaje del evangelio 
               y fortalecer el crecimiento espiritual de creyentes alrededor del mundo.
             </p>
             <div className="flex gap-4">
               {socialLinks.map((link, index) => (
                 <a
                   key={index}
                   href={link.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                   aria-label={link.label}
                 >
                   <link.icon className="h-5 w-5" />
                 </a>
               ))}
             </div>
           </div>
 
           {/* Quick Links */}
           <div>
             <h3 className="font-serif font-semibold text-foreground mb-4">
               Enlaces Rápidos
             </h3>
             <ul className="space-y-3">
               {quickLinks.map((link, index) => (
                 <li key={index}>
                   <a
                     href={link.href}
                     className="text-muted-foreground hover:text-primary transition-colors"
                   >
                     {link.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h3 className="font-serif font-semibold text-foreground mb-4">
               Contacto
             </h3>
             <ul className="space-y-3">
               <li className="flex items-start gap-3">
                 <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                 <span className="text-muted-foreground">
                   Jeffersonville, Indiana, USA
                 </span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                 <a
                   href="mailto:info@branhamtabernacle.org"
                   className="text-muted-foreground hover:text-primary transition-colors"
                 >
                   info@branhamtabernacle.org
                 </a>
               </li>
             </ul>
           </div>
         </div>
 
         {/* Bottom */}
         <div className="mt-12 pt-8 border-t border-border">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-muted-foreground text-center md:text-left">
               © {new Date().getFullYear()} Tabernáculo Branham. Todos los derechos reservados.
             </p>
             <p className="text-sm text-muted-foreground flex items-center gap-1">
               Hecho con <Heart className="h-4 w-4 text-primary" /> para la gloria de Dios
             </p>
           </div>
         </div>
       </div>
     </footer>
   );
 }