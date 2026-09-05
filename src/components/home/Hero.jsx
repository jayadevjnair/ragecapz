import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Code, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden circuit-bg">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Learn. Build. Innovate.</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              WHERE IDEAS BECOME <br/>
              <span className="text-gradient">ELECTRONIC REALITY.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Explore electronics, microcontrollers, sensors, robotics and IoT through hands-on learning, innovation labs, internships and real-world projects.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/programs" className="btn-primary group">
                Explore Programs
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/idea-lab" className="btn-secondary group">
                Explore Idea Lab
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card relative p-8 pb-12 aspect-square max-w-lg mx-auto flex flex-col justify-center items-center">
              
              {/* Concept Flow */}
              <div className="flex flex-col gap-8 w-full max-w-sm mx-auto">
                
                {/* Sensor */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 relative z-10"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Temperature Sensor</h3>
                    <p className="text-xs text-gray-400">Data Input</p>
                  </div>
                </motion.div>

                {/* Microcontroller */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/30 relative z-10 shadow-[0_0_20px_rgba(0,210,255,0.2)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">ESP32</h3>
                    <p className="text-xs text-primary/70">Processing & Code</p>
                  </div>
                </motion.div>

                {/* Output */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 relative z-10"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-accent">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">OLED Display</h3>
                    <p className="text-xs text-gray-400">Output Result</p>
                  </div>
                </motion.div>
                
                {/* Connecting Lines */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{ strokeDasharray: 4 }}>
                  <motion.line 
                    x1="50%" y1="20%" x2="50%" y2="50%" 
                    stroke="rgba(0, 210, 255, 0.4)" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
                  />
                  <motion.line 
                    x1="50%" y1="50%" x2="50%" y2="80%" 
                    stroke="rgba(57, 255, 20, 0.4)" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.4, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
                  />
                </svg>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
