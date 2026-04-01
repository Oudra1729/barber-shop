import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/media/WhatsApp_Image_2026-03-31_at_15.20.32-daeb302b-d125-4e29-b835-3f3f04db44c9.png',
  '/media/WhatsApp_Image_2026-03-31_at_15.20.32__1_-ed6d7e9d-0beb-46f1-ab1f-5926d06f5671.png',
  '/media/WhatsApp_Image_2026-03-31_at_15.20.32__2_-0920906d-8a93-4c3f-9612-35f31ce87e5d.png',
  '/media/WhatsApp_Image_2026-03-31_at_15.20.32__3_-75715937-1ad5-474e-997f-4a35d54d3673.png',
  '/media/WhatsApp_Image_2026-03-31_at_15.20.34-0f8e2143-fc4e-4f4a-9a80-d8924e3ec758.png',
  '/media/WhatsApp_Image_2026-03-31_at_15.20.34__1_-65423960-fe07-4037-a329-2aaabc7b2702.png',
  '/media/WhatsApp_Image_2026-03-31_at_16.58.43-eb22505d-267e-48b0-aa1f-2ac9036d6d61.png',
  '/media/WhatsApp_Image_2026-04-01_at_01.06.57-84ba6171-c36c-407e-b888-5ffee84ffba4.png',
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16 pb-12 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-heading text-white mb-4 uppercase tracking-widest">
            Notre <span className="text-primary">Galerie</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez l'art du barbering à travers nos réalisations. Précision, passion et style.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </motion.div>
      </div>

      <div className="px-4 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative group overflow-hidden rounded-xl bg-card"
            >
              <img 
                src={img} 
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                alt={`Barbershop gallery image ${i + 1}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="w-10 h-1 bg-primary mb-3 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100" />
                <span className="text-white font-heading uppercase tracking-wider text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Premium Cut</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
