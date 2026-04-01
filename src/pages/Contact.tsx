import React from 'react';
import { motion } from 'framer-motion';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import { MapPin, Mail, User, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16 pb-12 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-heading text-white mb-4 uppercase tracking-widest">
            Contactez-<span className="text-primary">Nous</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une question sur nos services, une réservation ou des infos sur l'Academy ? N'hésitez pas.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl"
          >
            <h2 className="text-2xl font-heading uppercase text-white mb-6">Envoyez un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nom complet</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    type="text" 
                    required
                    className="w-full bg-background border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    type="email" 
                    required
                    className="w-full bg-background border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-500 w-5 h-5" />
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-background border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-black font-bold uppercase tracking-wider py-4 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer
              </button>
            </form>
          </motion.div>

          {/* Right Column: Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="https://wa.me/212673420605" target="_blank" rel="noreferrer" className="bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[#25D366]/20 transition-colors group cursor-pointer">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <SiWhatsapp className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white font-bold mb-1">WhatsApp</h3>
                <p className="text-[#25D366] font-mono text-lg">06 73 42 06 05</p>
              </a>

              <a href="https://www.instagram.com/ali_akheraz" target="_blank" rel="noreferrer" className="bg-[#E1306C]/10 border border-[#E1306C]/30 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[#E1306C]/20 transition-colors group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <SiInstagram className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white font-bold mb-1">Instagram</h3>
                <p className="text-[#E1306C] font-mono text-lg">@ali_akheraz</p>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="flex-grow bg-card rounded-2xl border border-white/5 overflow-hidden relative min-h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              <div className="relative z-10 text-center p-8 bg-black/60 backdrop-blur-md rounded-xl border border-primary/30 shadow-[0_0_30px_rgba(255,183,0,0.1)]">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading text-white mb-2 uppercase">Zone d'intervention</h3>
                <p className="text-gray-300">Marrakech, Guéliz, Daoudiate, Annakhil</p>
                <div className="mt-6 text-sm text-primary uppercase tracking-widest font-bold">
                  Déplacement à domicile
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
