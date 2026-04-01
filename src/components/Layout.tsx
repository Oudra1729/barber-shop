import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiTiktok } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Academy", path: "/academy" },
    { name: "Galerie", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-background min-h-screen font-sans text-foreground flex flex-col">
      {/* Promotional Banner (Only on Home) */}
      {location === "/" && (
        <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm md:text-base font-bold tracking-wide uppercase z-50 relative">
          <span className="inline-block animate-pulse">🔥</span> Barbier à domicile à Marrakech <span className="inline-block animate-pulse">🔥</span> — Plus besoin de vous déplacer ! Je viens directement chez vous 🚗
        </div>
      )}

      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled || location !== "/" ? 'bg-background/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'} ${location === "/" && !isScrolled ? 'top-8 md:top-10' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/">
            <div className="text-2xl font-heading text-white tracking-widest cursor-pointer hover:text-primary transition-colors flex items-center gap-3">
              <img
                src="/media/WhatsApp_Image_2026-04-01_at_01.06.57-84ba6171-c36c-407e-b888-5ffee84ffba4.png"
                alt="Marrakech Barber Express logo"
                className="w-11 h-11 rounded-full border border-primary/40 object-cover shadow-[0_0_12px_rgba(255,183,0,0.25)]"
              />
              <div className="leading-none">
                <span className="block text-lg">MARRAKECH</span>
                <span className="block text-primary">BARBER EXPRESS</span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className={`text-sm font-medium tracking-wide uppercase cursor-pointer transition-colors ${location === item.path ? 'text-primary' : 'text-gray-300 hover:text-primary'}`} data-testid={`nav-link-${item.name}`}>
                  {item.name}
                </div>
              </Link>
            ))}
            <a 
              href="https://wa.me/212673420605" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2 rounded font-bold uppercase tracking-wider hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
              data-testid="nav-cta"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-background/98 backdrop-blur-xl pt-24 px-6 flex flex-col space-y-6"
          >
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className={`text-2xl font-heading text-left border-b border-white/10 pb-4 ${location === item.path ? 'text-primary' : 'text-white'}`}>
                  {item.name}
                </div>
              </Link>
            ))}
            <a 
              href="https://wa.me/212673420605" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary text-primary-foreground text-center py-4 rounded font-bold uppercase tracking-wider text-lg mt-4"
            >
              📲 Réservez maintenant
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>

      {/* Rich Footer */}
      <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading text-white tracking-widest leading-tight">
                MARRAKECH <br/> <span className="text-primary">BARBER EXPRESS</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                L'excellence du barbier professionnel directement chez vous. Confort, précision et hygiène irréprochable pour une expérience sur-mesure.
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading text-white tracking-wider uppercase mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>
                      <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer text-sm w-fit">
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading text-white tracking-wider uppercase mb-4">Réseaux Sociaux</h4>
              <div className="flex space-x-4">
                <a href="https://wa.me/212673420605" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all">
                  <SiWhatsapp size={20} />
                </a>
                <a href="https://www.instagram.com/ali_akheraz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E1306C] hover:text-white transition-all">
                  <SiInstagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                  <SiTiktok size={20} />
                </a>
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading text-white tracking-wider uppercase mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">Restez informé de nos offres et de l'ouverture de l'Academy.</p>
              <form className="flex" onSubmit={(e) => {
                e.preventDefault();
                toast({
                  title: "Abonnement réussi !",
                  description: "Merci de vous être inscrit à notre newsletter.",
                });
                (e.target as HTMLFormElement).reset();
              }}>
                <input type="email" placeholder="Votre email" className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary flex-grow" required />
                <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md text-sm font-bold uppercase hover:bg-primary/90 transition-colors">
                  S'abonner
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
            <div className="flex items-center">
              <MapPin size={14} className="mr-2 text-primary" />
              <span>Marrakech, Guéliz, Daoudiate, Annakhil</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Marrakech Barber Express & Academy. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/212673420605"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all z-50 group"
        data-testid="floating-whatsapp"
      >
        <SiWhatsapp size={28} className="group-hover:animate-pulse" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000"></span>
      </a>
    </div>
  );
}
