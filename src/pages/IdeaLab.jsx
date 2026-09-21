import { motion } from 'framer-motion';
import { Cpu, Activity, Layout, Wifi, Zap, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const equipment = [
  { name: 'Microcontrollers', icon: Cpu, items: ['Arduino Uno/Mega', 'ESP32', 'ESP8266', 'STM32 Nucleo'] },
  { name: 'Sensors', icon: Activity, items: ['Temperature & Humidity', 'Ultrasonic', 'PIR Motion', 'Gas & Soil', 'Light (LDR)'] },
  { name: 'Displays & Output', icon: Layout, items: ['OLED Displays', 'LCD 16x2', 'TFT Screens', 'LED Matrices', 'Servo & Stepper Motors'] },
  { name: 'Connectivity', icon: Wifi, items: ['Wi-Fi Modules', 'Bluetooth (HC-05)', 'NRF24L01 RF', 'LoRa', 'RFID Readers'] },
  { name: 'Power & Bench', icon: Zap, items: ['Bench Power Supplies', 'Digital Multimeters', 'Oscilloscopes', 'Soldering Stations'] },
  { name: 'Prototyping', icon: Box, items: ['Breadboards', 'Jumper Wires', 'Resistors/Capacitors', 'Relay Modules', 'Motor Drivers'] }
];

export default function IdeaLab() {
  useSEO({
    title: 'Idea Lab',
    description: 'The RAGECAPZ Idea Lab is a dedicated space for students to experiment with microcontrollers, sensors, robotics, and IoT hardware.',
    path: '/idea-lab',
  });

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8"
          >
            <Cpu className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            THE <span className="text-gradient">IDEA LAB</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            A dedicated environment where students can experiment with electronics, microcontrollers, sensors, robotics, IoT and innovative ideas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="btn-primary">Book Lab Time</Link>
          </motion.div>
        </div>

        <div className="relative mb-24">
          <div className="aspect-video rounded-3xl bg-surface border border-white/10 overflow-hidden flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-[url('/idealab.jpeg')] bg-cover bg-center opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <h2 className="relative z-10 text-3xl font-display font-bold tracking-widest text-white/50 uppercase">Lab Environment</h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">AVAILABLE <span className="text-gradient">TECHNOLOGY</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((eq, index) => {
              const Icon = eq.icon;
              return (
                <motion.div
                  key={eq.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{eq.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {eq.items.map(item => (
                      <li key={item} className="text-sm text-gray-400 flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/20 before:mr-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
