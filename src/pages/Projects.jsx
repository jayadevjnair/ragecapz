import { motion } from 'framer-motion';
import { ArrowRight, Search, Code, Cpu, Wifi } from 'lucide-react';
import { useState } from 'react';
import useSEO from '../hooks/useSEO';

const projects = [
  { id: 1, title: 'Smart Home Automation', tech: 'ESP32 + Relay + IoT', category: 'IoT', img: '/smarthomeautomation.png', desc: 'Control home appliances globally via a custom web dashboard.' },
  { id: 2, title: 'Obstacle Avoiding Robot', tech: 'Arduino + Ultrasonic + Motors', category: 'Robotics', img: '/obstacleavoidingrobot.png', desc: 'Autonomous robot that navigates around obstacles in real-time.' },
  { id: 3, title: 'Weather Monitoring System', tech: 'ESP32 + Temp/Humidity + OLED', category: 'Sensors', img: '/weathermonitoringsystem.png', desc: 'Real-time local weather data collection and display.' },
  { id: 4, title: 'Smart Agriculture System', tech: 'ESP32 + Soil Sensors + IoT', category: 'IoT', img: '/ChatGPT Image Sep 5, 2026, 12_15_33 AM.png', desc: 'Automated plant watering based on soil moisture levels.' },
  { id: 5, title: 'Line Following Robot', tech: 'Arduino + IR Sensors + Motors', category: 'Robotics', img: '/linefollowingrobot.png', desc: 'Robot designed to precisely follow complex track paths.' },
  { id: 6, title: 'RFID Attendance System', tech: 'ESP32 + RC522 + Google Sheets', category: 'Embedded', img: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Automated attendance logging using RFID cards and Wi-Fi.' },
  { id: 7, title: 'Voice Based Appliance Control', tech: 'Arduino/ESP32 + Voice Module', category: 'IoT', img: '/WhatsApp Image 2026-09-21 at 3.12.39 PM.jpeg', desc: 'A smart control system for physically challenged individuals to control room appliances using voice commands.' },
  { id: 8, title: 'Face Detection System', tech: 'ESP32-CAM + OV2640', category: 'IoT', img: '/ChatGPT Image Sep 21, 2026, 03_05_43 PM.png', desc: 'A smart system for high accuracy face detection with spatial correlation improvement in an IoT environment.' },
  { id: 9, title: 'Railway Fault Notification', tech: 'ESP32 + Accelerometer', category: 'Sensors', img: '/ChatGPT Image Sep 21, 2026, 03_06_45 PM.png', desc: 'Real-time monitoring system that detects railway track faults and bridge damage to prevent accidents.' },
  { id: 10, title: 'Automatic Human Seeker Robot', tech: 'ESP32 + Thermal Camera', category: 'Robotics', img: '/ChatGPT Image Sep 21, 2026, 03_07_52 PM.png', desc: 'An all-terrain robot equipped with a thermal camera to detect human body heat for disaster rescue operations.' },
  { id: 11, title: 'Speech Recognition Locker', tech: 'ESP32 + Mic + OLED', category: 'Embedded', img: '/WhatsApp Image 2026-09-21 at 3.03.09 PM.jpeg', desc: 'A smart and secure locker system that uses voice authentication to grant access and protect valuables.' },
  { id: 12, title: 'Electronic Check Post', tech: 'Microcontroller + ANPR + RFID', category: 'IoT', img: '/ChatGPT Image Sep 21, 2026, 03_03_05 PM.png', desc: 'An automated model that verifies vehicles using Automatic Number Plate Recognition and RFID.' },
  { id: 13, title: 'ATM Card Loss Identification', tech: 'Arduino/ESP32 + RFID', category: 'Embedded', img: '/RFID ATM CARDLOSS.jpeg', desc: 'A security solution that prevents fraudulent ATM transactions by verifying RFID tags in real-time.' },
  { id: 14, title: 'AI Assistive Navigation', tech: 'Raspberry Pi + Camera', category: 'Embedded', img: '/ChatGPT Image Sep 21, 2026, 02_52_14 PM.png', desc: 'An AI-powered smart cane that detects multiple objects and alerts visually impaired users instantly.' },
  { id: 15, title: 'Object Detection & Alert', tech: 'AI Model + Vibration Motor', category: 'Sensors', img: '/obstacle avoidance for blind men.png', desc: 'A wearable assistive device that detects obstacles and provides vibration alerts for safe mobility.' },
  { id: 16, title: 'V2V Communication Protocol', tech: 'DSRC/C-V2X + OBU', category: 'IoT', img: '/vehicle to vehicle communicatiion protocol.png', desc: 'A vehicle-to-vehicle communication protocol for cooperative collision warning to prevent accidents.' },
  { id: 17, title: 'RFID Ignition Control', tech: 'Microcontroller + RFID Reader', category: 'Embedded', img: '/rfid vehicle project.png', desc: 'A keyless access system that allows only authorized users with a valid RFID tag to start a vehicle.' },
  { id: 18, title: 'Robotic Exoskeleton', tech: 'ESP32 + EMG + IMU', category: 'Robotics', img: '/WhatsApp Image 2026-09-21 at 3.16.25 PM.jpeg', desc: 'An assistive exoskeleton frame designed to help in rehabilitation and support muscle strength.' },
  { id: 19, title: 'Floor Cleaning Robot', tech: 'ESP32 + Motor Driver', category: 'Robotics', img: '/WhatsApp Image 2026-09-21 at 3.18.01 PM.jpeg', desc: 'A wireless floor cleaning robot for homes and offices that features sweeping, mopping, and water spraying.' }
];

const categories = ['All', 'IoT', 'Robotics', 'Sensors', 'Embedded'];

export default function Projects() {
  useSEO({
    title: 'Student Projects',
    description: 'Explore innovative hardware and software solutions built by RAGECAPZ students, including IoT, Robotics, and Embedded Systems.',
    path: '/projects',
  });

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            STUDENT <span className="text-gradient">PROJECTS</span>
          </h1>
          <p className="text-lg text-gray-400">
            Explore the innovative hardware and software solutions built by our students.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,210,255,0.4)]' 
                  : 'bg-surface text-gray-400 hover:text-white hover:bg-surface-hover border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              layout
              className="glass-card p-0 overflow-hidden group flex flex-col"
            >
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-mono text-primary mb-2 flex items-center gap-2">
                  <Code className="w-3 h-3" /> {project.tech}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.desc}</p>
                
                <button className="flex items-center text-sm font-semibold text-white hover:text-primary transition-colors mt-auto group/btn w-max">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No projects found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
