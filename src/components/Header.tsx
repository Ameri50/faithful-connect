 import { useState, useEffect } from "react";
 import { Menu, X, Sun, Moon } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
 import { useTheme } from "@/components/ThemeProvider";
 import logo from "@/assets/logo.png";
 
 const navLinks = [
   { href: "#inicio", label: "Inicio" },
   { href: "#videos", label: "Videos" },
   { href: "#transmision", label: "Transmisión" },
   { href: "#app", label: "Descargar App" },
   { href: "#nosotros", label: "Nosotros" },
 ];
 
 export function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const { theme, setTheme } = useTheme();
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 20);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const toggleTheme = () => {
     setTheme(theme === "dark" ? "light" : "dark");
   };
 
   return (
     <header
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-background/95 backdrop-blur-md shadow-sm"
           : "bg-transparent"
       }`}
     >
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <a href="#inicio" className="flex items-center gap-3">
             <img src={logo} alt="Tabernáculo Branham" className="h-10 md:h-12 w-auto" />
             <span className="hidden sm:block font-serif text-lg md:text-xl font-semibold text-foreground">
               Tabernáculo Branham
             </span>
           </a>
 
           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
               >
                 {link.label}
               </a>
             ))}
             <Button
               variant="ghost"
               size="icon"
               onClick={toggleTheme}
               className="ml-2"
             >
               {theme === "dark" ? (
                 <Sun className="h-5 w-5" />
               ) : (
                 <Moon className="h-5 w-5" />
               )}
             </Button>
           </nav>
 
           {/* Mobile Menu */}
           <div className="flex lg:hidden items-center gap-2">
             <Button variant="ghost" size="icon" onClick={toggleTheme}>
               {theme === "dark" ? (
                 <Sun className="h-5 w-5" />
               ) : (
                 <Moon className="h-5 w-5" />
               )}
             </Button>
             <Sheet open={isOpen} onOpenChange={setIsOpen}>
               <SheetTrigger asChild>
                 <Button variant="ghost" size="icon">
                   <Menu className="h-6 w-6" />
                 </Button>
               </SheetTrigger>
               <SheetContent side="right" className="w-72">
                 <nav className="flex flex-col gap-6 mt-8">
                   {navLinks.map((link) => (
                     <a
                       key={link.href}
                       href={link.href}
                       onClick={() => setIsOpen(false)}
                       className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                     >
                       {link.label}
                     </a>
                   ))}
                 </nav>
               </SheetContent>
             </Sheet>
           </div>
         </div>
       </div>
     </header>
   );
 }