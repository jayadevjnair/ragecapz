import { motion } from 'framer-motion';
import { Wifi, Cpu, Activity, Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const components = [
  {
    name: 'ESP32',
    icon: Cpu,
    features: ['Wi-Fi ✓', 'Bluetooth ✓', 'GPIO ✓', 'IoT ✓'],
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    name: 'Ultrasonic Sensor',
    icon: Activity,
    features: ['Distance measurement', 'Robotics', 'Obstacle detection'],
    color: 'text-accent',
    bg: 'bg-accent/10'
  },
  {
    name: 'OLED Display',
    icon: Layout,
    features: ['Visual output', 'Sensor monitoring', 'Embedded projects'],
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  }
];

export default function IdeaLabFeature() {
  return (
    <section className="py-24 bg-background relative circuit-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              WELCOME TO THE <br/>
              <span className="text-gradient">IDEA LAB.</span>
            </h2>
            <p className="text-xl text-gray-300 italic mb-8 border-l-4 border-primary pl-4 py-1">
              "Don't just ask 'How does it work?' Ask 'What can I build with it?'"
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Step into a futuristic electronics laboratory environment. We provide access to Arduinos, ESP32s, advanced sensors, robotics kits, and IoT modules to turn your imagination into working prototypes.
            </p>
            <Link to="/idea-lab" className="btn-primary group">
              Explore the Idea Lab
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid gap-6">
            {components.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="glass-card flex items-start gap-6 hover:translate-x-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl ${comp.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-8 h-8 ${comp.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{comp.name}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {comp.features.map(feat => (
                        <li key={feat} className="text-sm text-gray-400 flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary before:mr-2">
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
