import { motion } from 'framer-motion';
import { BookOpen, Cpu, Lightbulb } from 'lucide-react';

const cards = [
  {
    title: 'LEARN',
    description: 'Understand electronics from the fundamentals.',
    icon: BookOpen,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'BUILD',
    description: 'Work with real components, sensors and microcontrollers.',
    icon: Cpu,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'INNOVATE',
    description: 'Turn ideas into working prototypes and projects.',
    icon: Lightbulb,
    color: 'text-accent',
    bg: 'bg-accent/10'
  }
];

export default function Introduction() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            MORE THAN A <span className="text-gradient">CLASSROOM.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            RAGECAPZ is an electronics education and innovation platform where students learn by experimenting, building and solving real-world problems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon className={`w-8 h-8 ${card.color}`} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-wide">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
