import { motion } from 'framer-motion';
import { Sun, Code, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  { title: 'Electronics Basics', icon: Zap, desc: 'Learn how electricity works using fun, safe components.' },
  { title: 'Arduino Coding', icon: Code, desc: 'Write your first lines of code to control lights and sounds.' },
  { title: 'Sensor Magic', icon: Sun, desc: 'Use sensors to detect motion, light, and temperature.' },
  { title: 'Team Challenges', icon: Users, desc: 'Work together to solve problems and build mini-projects.' }
];

export default function SummerCamps() {
  return (
    <div className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center mb-6"
          >
            <Sun className="w-10 h-10 text-yellow-400" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            SUMMER <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">TECH CAMP</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 italic mb-8"
          >
            "Your summer. Your idea. Your first invention."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="btn-primary shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)]">
              Register Now
            </Link>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((act, index) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card flex items-start gap-6 border-white/5 hover:border-yellow-500/30 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{act.title}</h3>
                    <p className="text-gray-400">{act.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summer Camp Media Gallery */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Camp Highlights
            </h2>
            <p className="text-gray-400">See our young innovators in action!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Videos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <video 
                className="w-full h-full object-cover" 
                controls 
                muted
                loop
              >
                <source src="/summercamp/VID_20260407_105644.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
            
            {/* Images */}
            {[
              '/summercamp/WhatsApp Image 2026-05-30 at 11.56.24 AM.jpeg',
              '/summercamp/IMG_20260408_121949.jpg',
              '/summercamp/IMG_20260506_125555.jpg',
              '/summercamp/WhatsApp Image 2026-05-30 at 11.57.07 AM.jpeg',
              '/summercamp/IMG_20260506_141948.jpg',
              '/summercamp/IMG_20260506_142214.jpg'
            ].map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group h-64"
              >
                <img 
                  src={imgSrc} 
                  alt={`Summer camp activity ${idx + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
