import { Youtube, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { TabernaculoLogo } from "../components/TabernaculoLogo";

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
  const { theme } = useTheme();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-secondary/50 border-border" 
        : "bg-black/5 border-gray-200"
    }`}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10">
                <TabernaculoLogo />
              </div>
              <div>
                <span className={`block font-serif text-lg font-bold transition-colors duration-300 ${
                  theme === "dark" 
                    ? "text-foreground" 
                    : "text-black"
                }`}>
                  Tabernáculo
                </span>
                <span className={`block font-serif text-sm font-semibold transition-colors duration-300 ${
                  theme === "dark" 
                    ? "text-primary" 
                    : "text-primary"
                }`}>
                  Branham
                </span>
              </div>
            </a>
            <p className={`mb-6 max-w-md transition-colors duration-300 ${
              theme === "dark" 
                ? "text-muted-foreground" 
                : "text-gray-600"
            }`}>
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
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "bg-gray-300 text-black hover:bg-primary hover:text-white"
                  }`}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-serif font-semibold mb-4 transition-colors duration-300 ${
              theme === "dark" 
                ? "text-foreground" 
                : "text-black"
            }`}>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-muted-foreground hover:text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-serif font-semibold mb-4 transition-colors duration-300 ${
              theme === "dark" 
                ? "text-foreground" 
                : "text-black"
            }`}>
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className={`transition-colors duration-300 ${
                  theme === "dark" 
                    ? "text-muted-foreground" 
                    : "text-gray-600"
                }`}>
                  Jeffersonville, Indiana, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@branhamtabernacle.org"
                  className={`transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-muted-foreground hover:text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  info@branhamtabernacle.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={`mt-12 pt-8 border-t transition-colors duration-300 ${
          theme === "dark" 
            ? "border-border" 
            : "border-gray-200"
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm text-center md:text-left transition-colors duration-300 ${
              theme === "dark" 
                ? "text-muted-foreground" 
                : "text-gray-600"
            }`}>
              © {new Date().getFullYear()} Tabernáculo Branham. Todos los derechos reservados.
            </p>
            <p className={`text-sm flex items-center gap-1 transition-colors duration-300 ${
              theme === "dark" 
                ? "text-muted-foreground" 
                : "text-gray-600"
            }`}>
              Hecho con <Heart className="h-4 w-4 text-primary" /> para la gloria de Dios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}