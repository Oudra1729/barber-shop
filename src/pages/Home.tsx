import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, MapPin, MessageCircle, Star, Info, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Link } from "wouter";
import { SiInstagram } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const testimonials = [
  {
    quote: "J'ai tout appris ici. Les techniques de dégradé, la gestion client, l'hygiène. Aujourd'hui j'ai mon propre salon !",
    name: "Youssef B.",
    city: "Marrakech",
    rating: 5
  },
  {
    quote: "Formation intense et 100% pratique. Le formateur est passionné et nous transmet tous ses secrets.",
    name: "Amine K.",
    city: "Casablanca",
    rating: 5
  },
  {
    quote: "Grâce à cette Academy, j'ai pu me reconvertir en 6 mois. La meilleure décision de ma vie.",
    name: "Omar T.",
    city: "Agadir",
    rating: 5
  },
  {
    quote: "Le module sur la création de business m'a vraiment aidé à me lancer en tant que barbier indépendant.",
    name: "Karim R.",
    city: "Rabat",
    rating: 5
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <img 
            src="/hero-bg.png" 
            alt="Barbershop tools" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
            <Scissors size={16} className="text-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-gray-300">Barbier à domicile à Marrakech</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading leading-none mb-6 text-white text-shadow-xl drop-shadow-2xl"
          >
            L'EXCELLENCE <br className="hidden md:block"/> CHEZ VOUS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed"
          >
            Je me déplace jusqu'à chez vous pour une coupe professionnelle, propre et rapide, sans vous déplacer.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="https://wa.me/212673420605"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary-foreground bg-primary overflow-hidden rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
              data-testid="hero-cta"
            >
              <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="relative flex items-center text-lg uppercase tracking-wider">
                📲 Réservez maintenant : 0673420605
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Academy Teaser Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card relative border-y border-primary/20">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-black border border-primary/30 p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(255,183,0,0.1)]">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-2">
                <Star size={16} className="fill-primary" /> Nouveau
              </div>
              <h2 className="text-4xl md:text-5xl font-heading text-white">MARRAKECH BARBER ACADEMY</h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Vous rêvez de devenir barbier professionnel ? Rejoignez notre formation intensive. Devenez un maître de la coupe et lancez votre propre business.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/academy">
                <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider rounded hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  Découvrir l'Academy →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-card relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4"><Scissors className="text-primary w-12 h-12" /></div>
            <h2 className="text-4xl md:text-6xl font-heading uppercase">Mes Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Coupe de cheveux", price: "50 DH", icon: "💈", desc: "Coupe classique, dégradé à blanc, taper. Précision garantie." },
              { title: "Taille de barbe", price: "30 DH", icon: "🧔‍♂️", desc: "Traçage net, serviette chaude, soins hydratants." },
              { title: "Coupe + Barbe", price: "70 DH", icon: "🔥", desc: "Le forfait complet pour être impeccable. Meilleur rapport qualité/prix.", highlight: true }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className={`relative group p-8 bg-background border ${service.highlight ? 'border-primary shadow-[0_0_30px_rgba(255,183,0,0.15)]' : 'border-white/5'} rounded-xl hover:border-primary/50 transition-all duration-500`}
              >
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Populaire
                  </div>
                )}
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-heading tracking-wide mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-8 h-10">{service.desc}</p>
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-heading text-primary">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Zones Section */}
      <section id="zones" className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-background to-background"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <MapPin className="text-primary w-12 h-12 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading uppercase mb-8">Zones Desservies</h2>
            <p className="text-xl text-gray-300 mb-12">Je me déplace à :</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Marrakech", "Guéliz", "Daoudiate", "Annakhil", "Et zones proches"].map((zone, idx) => (
                <span key={idx} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg font-medium text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  {zone}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reservation & Reviews Section */}
      <section id="réservation" className="py-24 bg-card border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Reservation */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-heading uppercase">Réservez facilement</h2>
              <div className="space-y-6">
                <a href="https://wa.me/212673420605" target="_blank" rel="noreferrer" className="flex items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#25D366] transition-colors group">
                  <div className="w-14 h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Phone className="text-[#25D366] w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="text-2xl font-bold font-heading">06 73 42 06 05</div>
                  </div>
                </a>
                
                <a href="https://www.instagram.com/ali_akheraz" target="_blank" rel="noreferrer" className="flex items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#E1306C] transition-colors group">
                  <div className="w-14 h-14 bg-[#E1306C]/20 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <SiInstagram className="text-[#E1306C] w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">Instagram</div>
                    <div className="text-2xl font-bold font-heading">@ali_akheraz</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Reviews (Avis) */}
            <motion.div 
              id="avis"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-8"
            >
              <div className="flex items-center mb-8">
                <Star className="text-primary w-8 h-8 mr-4" />
                <h2 className="text-4xl md:text-5xl font-heading uppercase">Avis Clients</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-xl border border-white/5 relative">
                  <MessageCircle className="absolute top-6 right-6 text-white/10 w-12 h-12" />
                  <div className="flex text-primary mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic text-gray-300 font-serif">"Service professionnel et ponctuel, très satisfait 👌"</p>
                </div>
                
                <div className="bg-background p-6 rounded-xl border border-white/5 relative">
                  <MessageCircle className="absolute top-6 right-6 text-white/10 w-12 h-12" />
                  <div className="flex text-primary mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic text-gray-300 font-serif">"Travail propre et rapide, je recommande 🔥"</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Academy Testimonials Slider */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-heading uppercase mb-4">Ils se sont formés chez nous</h2>
            <p className="text-gray-400 mb-16 text-lg">Découvrez les succès de nos anciens élèves de l'Academy.</p>
            
            <div className="relative bg-card p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl min-h-[250px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="flex justify-center text-primary mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl italic text-gray-300 font-serif mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</h4>
                    <span className="text-primary text-sm uppercase tracking-widest">{testimonials[currentTestimonial].city}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === i ? 'bg-primary scale-125' : 'bg-white/20 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="à-propos" className="py-24 bg-card border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Info className="text-primary w-12 h-12 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading uppercase mb-8">À Propos</h2>
            <div className="bg-background p-8 md:p-12 rounded-2xl border border-white/5 text-left md:text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                "Je suis barbier professionnel avec expérience, spécialisé dans les services à domicile. Mon objectif est de vous offrir confort, qualité et gain de temps."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
