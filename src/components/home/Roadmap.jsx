import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Cpu, Code, Wifi, Rocket, ShieldCheck, Wrench, Lightbulb } from 'lucide-react';

const stages = [
  { num: '01', title: 'Electronics Basics', desc: 'Voltage, current, resistance and basic components.', icon: Zap },
  { num: '02', title: 'Components & Circuits', desc: 'Breadboards, passive/active components and circuit building.', icon: Wrench },
  { num: '03', title: 'Microcontrollers', desc: 'Introduction to brains of electronics (Arduino, ESP32).', icon: Cpu },
  { num: '04', title: 'Sensors & Interfacing', desc: 'Connecting the physical world to microcontrollers.', icon: ShieldCheck },
  { num: '05', title: 'Programming', desc: 'Writing logic to control hardware.', icon: Code },
  { num: '06', title: 'Robotics & IoT', desc: 'Motors, internet connectivity and automation.', icon: Wifi },
  { num: '07', title: 'Real-World Projects', desc: 'Solving actual problems with technology.', icon: Rocket },
  { num: '08', title: 'Innovation', desc: 'Creating your own unique solutions.', icon: Lightbulb },
];

export default function Roadmap() {
  const containerRef = useRef(null);
  
  return (
    <section className="py-24 bg-black relative" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            FROM BEGINNER TO <span className="text-gradient">INNOVATOR</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={stage.num}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
                >
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(0,210,255,0.8)] border-4 border-black z-10" />
                  
                  {/* Content Box */}
                  <div className={`ml-16 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right text-left'}`}>
                    <div className="glass-card inline-block w-full hover:scale-[1.02] transition-transform">
                      <div className={`flex items-center gap-4 mb-4 ${!isEven && 'md:flex-row-reverse'}`}>
                        <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-primary/70 tracking-widest">{stage.num}</span>
                          <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{stage.desc}</p>
                    </div>
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
