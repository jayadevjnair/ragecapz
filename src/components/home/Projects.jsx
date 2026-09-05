import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Smart Home Automation',
    tech: 'ESP32 + Relay + IoT',
    desc: 'Control home appliances globally via a custom web dashboard.',
    tags: ['IoT', 'Web App', 'Hardware'],
    bgGradient: 'from-blue-600/40 to-cyan-600/40',
    img: '/smarthomeautomation.png'
  },
  {
    title: 'Obstacle Avoiding Robot',
    tech: 'Arduino + Ultrasonic Sensor + Motors',
    desc: 'Autonomous robot that navigates around obstacles in real-time.',
    tags: ['Robotics', 'Algorithms'],
    bgGradient: 'from-green-600/40 to-emerald-600/40',
    img: '/obstacleavoidingrobot.png'
  },
  {
    title: 'Weather Monitoring System',
    tech: 'ESP32 + Temp/Humidity + OLED',
    desc: 'Real-time local weather data collection and display.',
    tags: ['Sensors', 'Display'],
    bgGradient: 'from-purple-600/40 to-fuchsia-600/40',
    img: '/weathermonitoringsystem.png'
  },
  {
    title: 'Smart Agriculture System',
    tech: 'ESP32 + Soil Sensors + IoT',
    desc: 'Automated plant watering based on soil moisture levels.',
    tags: ['Automation', 'IoT'],
    bgGradient: 'from-amber-600/40 to-orange-600/40',
    img: '/ChatGPT Image Sep 5, 2026, 12_15_33 AM.png'
  },
  {
    title: 'Line Following Robot',
    tech: 'Arduino + IR Sensors + Motors',
    desc: 'Robot designed to precisely follow complex track paths.',
    tags: ['Robotics', 'Sensors'],
    bgGradient: 'from-rose-600/40 to-red-600/40',
    img: '/linefollowingrobot.png'
  },
  {
    title: 'IoT Monitoring Dashboard',
    tech: 'ESP32 + Sensors + Cloud',
    desc: 'Cloud-based dashboard for multiple sensor nodes.',
    tags: ['Cloud', 'Data'],
    bgGradient: 'from-indigo-600/40 to-blue-600/40',
    img: '/monitoring dashboard.png'
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              BUILT BY <span className="text-gradient">CURIOUS MINDS.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl"
            >
              Check out some of the amazing projects our students have built using microcontrollers, sensors, and pure imagination.
            </motion.p>
          </div>
          <Link to="/projects" className="btn-secondary whitespace-nowrap">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card h-full flex flex-col p-0 overflow-hidden border-white/5 group-hover:border-primary/30">
                
                {/* Image Placeholder with Gradient or Real Image */}
                <div className={`h-48 relative flex items-center justify-center overflow-hidden ${!project.img ? `bg-gradient-to-br ${project.bgGradient}` : 'bg-surface'}`}>
                  {project.img ? (
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                      <span className="font-display font-bold text-white/50 text-2xl tracking-widest uppercase rotate-[-10deg] scale-150 transform group-hover:scale-110 transition-transform duration-500">
                        Project
                      </span>
                    </>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-mono text-primary mb-2 tracking-wide">{project.tech}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{project.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase px-2 py-1 bg-surface rounded text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
