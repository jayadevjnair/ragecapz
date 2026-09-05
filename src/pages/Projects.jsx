import { motion } from 'framer-motion';
import { ArrowRight, Search, Code, Cpu, Wifi } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { id: 1, title: 'Smart Home Automation', tech: 'ESP32 + Relay + IoT', category: 'IoT', img: '/smarthomeautomation.png', desc: 'Control home appliances globally via a custom web dashboard.' },
  { id: 2, title: 'Obstacle Avoiding Robot', tech: 'Arduino + Ultrasonic + Motors', category: 'Robotics', img: '/obstacleavoidingrobot.png', desc: 'Autonomous robot that navigates around obstacles in real-time.' },
  { id: 3, title: 'Weather Monitoring System', tech: 'ESP32 + Temp/Humidity + OLED', category: 'Sensors', img: '/weathermonitoringsystem.png', desc: 'Real-time local weather data collection and display.' },
  { id: 4, title: 'Smart Agriculture System', tech: 'ESP32 + Soil Sensors + IoT', category: 'IoT', img: '/ChatGPT Image Sep 5, 2026, 12_15_33 AM.png', desc: 'Automated plant watering based on soil moisture levels.' },
  { id: 5, title: 'Line Following Robot', tech: 'Arduino + IR Sensors + Motors', category: 'Robotics', img: '/linefollowingrobot.png', desc: 'Robot designed to precisely follow complex track paths.' },
  { id: 6, title: 'RFID Attendance System', tech: 'ESP32 + RC522 + Google Sheets', category: 'Embedded', img: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', desc: 'Automated attendance logging using RFID cards and Wi-Fi.' },
];

const categories = ['All', 'IoT', 'Robotics', 'Sensors', 'Embedded'];

export default function Projects() {
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
