import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Layers, User, Heart, ShieldCheck, Briefcase, Zap, Award, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Academy() {
  const curriculum = [
    { icon: <Scissors className="w-8 h-8" />, title: "Maîtrise des outils", desc: "Ciseaux, tondeuses, coupe-choux : apprenez à manier chaque outil avec précision." },
    { icon: <Layers className="w-8 h-8" />, title: "Techniques de dégradé", desc: "Fade, taper, burst fade... Maîtrisez toutes les techniques de fondus." },
    { icon: <User className="w-8 h-8" />, title: "Coupe classique & moderne", desc: "Des bases intemporelles aux dernières tendances urbaines." },
    { icon: <Heart className="w-8 h-8" />, title: "Soin du client", desc: "Taille de barbe, serviette chaude, soins du visage et relationnel." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Hygiène & stérilisation", desc: "Protocoles stricts pour garantir la sécurité de votre salon." },
    { icon: <Briefcase className="w-8 h-8" />, title: "Création de son business", desc: "Marketing, gestion, réseaux sociaux : comment lancer son activité." },
    { icon: <Zap className="w-8 h-8" />, title: "Pratique intensive", desc: "80% de pratique sur vrais modèles pour forger l'expérience." },
    { icon: <Award className="w-8 h-8" />, title: "Certification finale", desc: "Diplôme reconnu attestant de votre niveau professionnel." }
  ];

  return (
    <div className="w-full">
      {/* Academy Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary font-bold tracking-widest uppercase mb-4">L'Art du Barbier</div>
            <h1 className="text-5xl md:text-7xl font-heading text-white mb-6">
              FORMEZ-VOUS. <br/><span className="text-primary">DEVENEZ MAÎTRE.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Notre Academy vous offre l'opportunité de transformer votre passion en une carrière lucrative. Rejoignez l'élite des barbiers au Maroc.
            </p>
            <a 
              href="#programmes"
              className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white rounded font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Découvrir nos programmes
            </a>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading uppercase text-white mb-4">Programme Complet</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } }
                }}
                className="bg-background p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Programs Section */}
      <section id="programmes" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading uppercase text-white mb-4">Nos Formations</h2>
            <p className="text-gray-400 text-lg">Choisissez le parcours adapté à vos ambitions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Program 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col"
            >
              <h3 className="text-2xl font-heading uppercase text-white mb-2">Formation Complète</h3>
              <div className="text-4xl font-bold text-primary mb-6">18 Mois</div>
              <p className="text-gray-400 mb-8">Le cursus de A à Z pour devenir un barbier professionnel hautement qualifié, même sans aucune expérience préalable.</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {["Débutant à Expert", "Matériel de base fourni", "Pratique sur modèles", "Techniques modernes & classiques", "Module gestion d'entreprise", "Diplôme de fin d'études"].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/212673420605" 
                target="_blank" 
                rel="noreferrer"
                className="w-full block text-center bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white py-4 rounded font-bold uppercase tracking-wider transition-colors"
              >
                Demander le tarif
              </a>
            </motion.div>

            {/* Program 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-b from-card to-background border border-primary rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col shadow-[0_0_30px_rgba(255,183,0,0.15)]"
            >
              <div className="absolute top-0 right-0 bg-primary text-black font-bold text-xs px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                Accéléré
              </div>
              <h3 className="text-2xl font-heading uppercase text-white mb-2">Reconnaissance Pro</h3>
              <div className="text-4xl font-bold text-primary mb-6">3 Mois</div>
              <p className="text-gray-400 mb-8">Conçu pour les barbiers ayant déjà de l'expérience et souhaitant perfectionner leurs techniques et obtenir une certification.</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {["Évaluation de niveau", "Perfectionnement des dégradés", "Techniques avancées (Design)", "Optimisation du temps", "Certification professionnelle", "Coaching personnalisé"].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/212673420605" 
                target="_blank" 
                rel="noreferrer"
                className="w-full block text-center bg-primary text-black py-4 rounded font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                Contacter l'Academy
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gradient-to-r from-black to-card border border-primary/20 rounded-3xl p-6 md:p-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs md:text-sm font-bold tracking-widest uppercase">
                Certification Officielle
              </div>

              <h2 className="text-4xl md:text-5xl font-heading uppercase text-white leading-tight">
                Diplome & <span className="text-primary">Reconnu</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Chaque eleve ayant complete notre programme recoit une attestation de
                formation professionnelle officielle, delivree par un organisme certifie.
              </p>

              <ul className="space-y-3">
                {[
                  "Reconnu par les employeurs",
                  "Valable au Maroc et a l'international",
                  "Ouvre droit a l'auto-entrepreneuriat",
                ].map((point, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute -inset-3 bg-primary/20 blur-2xl rounded-3xl" />
              <div className="relative rounded-2xl border border-primary/60 bg-black/40 p-2 shadow-[0_0_35px_rgba(255,183,0,0.35)]">
                <img
                  src="/media/WhatsApp_Image_2026-03-31_at_16.58.43-eb22505d-267e-48b0-aa1f-2ac9036d6d61.png"
                  alt="Attestation de formation professionnelle"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-black text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading uppercase mb-6">Prêt à franchir le pas ?</h2>
          <p className="text-lg mb-8 font-medium">Les places pour la prochaine session sont limitées. Réservez votre entretien téléphonique dès aujourd'hui.</p>
          <a 
            href="https://wa.me/212673420605" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors shadow-2xl"
          >
            S'inscrire maintenant via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
