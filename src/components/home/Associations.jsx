import { motion } from 'framer-motion';

const logos = [
  '/logos/53402-removebg-preview-150x150.png',
  '/logos/53403-removebg-preview-300x300.png',
  '/logos/New-Project-2-150x150.png',
  '/logos/New-Project-8.png',
  '/logos/WhatsApp_Image_2026-03-06_at_10.08.16_AM-removebg-preview-300x253.png',
  '/logos/WhatsApp_Image_2026-03-06_at_10.08.16_AM__2_-removebg-preview-150x150.png',
  '/logos/irobo-logo.jpg-300x267.jpeg'
];

export default function Associations() {
  return (
    <section className="py-16 bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Our Associations & Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are proud to be associated with leading tech companies and certification bodies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-2xl flex items-center justify-center p-4 hover:bg-white/10 transition-colors"
            >
              <img 
                src={logo} 
                alt={`Association Logo ${index + 1}`} 
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
