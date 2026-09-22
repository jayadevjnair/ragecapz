import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Code, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Full Background Image with Blending */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ChatGPT Image Sep 22, 2026, 06_52_48 PM.png" 
          alt="Electronic Reality Concept" 
          className="w-full h-full object-cover opacity-100"
          style={{ mixBlendMode: 'lighten' }}
        />
        {/* Lighter gradient overlays to ensure text readability without being too moody */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
            
            <div className="flex flex-wrap gap-6 mt-4">
              <Link to="/programs" className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
                <div className="relative px-8 py-3 flex items-center justify-center bg-black hover:bg-black/90 rounded-full font-semibold text-white border border-white/10 transition-colors">
                  <span className="mr-2">Explore Programs</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary" />
                </div>
              </Link>
              <Link to="/idea-lab" className="btn-secondary group">
                Explore Idea Lab
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Contact Us */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex w-full max-w-sm"
        >
          <div className="glass-card w-full p-8 border-primary/30 bg-black/50 backdrop-blur-lg shadow-[0_0_30px_rgba(0,210,255,0.1)]">
            <h3 className="text-2xl font-display font-bold text-white mb-3">Ready to Innovate?</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Have a project in mind or need expert guidance? Get in touch with our team today.
            </p>
            <Link to="/contact" className="btn-primary w-full flex justify-center py-3">
              Contact Us Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
