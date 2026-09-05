import { motion } from 'framer-motion';
import { Target, HardDrive, LayoutTemplate, Rocket } from 'lucide-react';

const reasons = [
  {
    title: 'LEARN BY DOING',
    desc: 'Practical learning instead of theory alone.',
    icon: Target
  },
  {
    title: 'REAL COMPONENTS',
    desc: 'Students work with actual electronics hardware.',
    icon: HardDrive
  },
  {
    title: 'PROJECT BASED',
    desc: 'Concepts are converted into practical projects.',
    icon: LayoutTemplate
  },
  {
    title: 'INNOVATION FOCUSED',
    desc: 'Students are encouraged to create and experiment.',
    icon: Rocket
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            WHY <span className="text-gradient">RAGECAPZ?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card flex flex-col items-center text-center p-8 border-primary/20 hover:border-primary/50"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
