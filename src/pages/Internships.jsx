import { motion } from 'framer-motion';
import { Laptop, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const timeline = [
  "Choose Domain",
  "Learn Fundamentals",
  "Hands-on Training",
  "Build Projects",
  "Mentor Guidance",
  "Project Completion",
  "Certificate"
];

export default function Internships() {
  useSEO({
    title: 'Internships',
    description: 'Gain real-world engineering experience with our online and offline internships. Focus on IoT, robotics, and software integration.',
    path: '/internships',
  });

  return (
    <div className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            BUILD SKILLS. BUILD PROJECTS. <span className="text-gradient">BUILD EXPERIENCE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Gain real-world experience through our intensive internship programs designed for engineering and diploma students.
          </motion.p>
        </div>

        {/* Options Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card border-blue-500/20 hover:border-blue-500/50"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
              <Laptop className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">ONLINE INTERNSHIP</h2>
            <p className="text-gray-400 mb-6">Remote learning with guided project development and flexible schedules.</p>
            <ul className="space-y-3 mb-8">
              {['Live mentoring sessions', 'Remote project assistance', 'Software simulation focus', 'Flexible timing', 'IoT & Code focused'].map(item => (
                <li key={item} className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-secondary w-full border-blue-500/30 hover:bg-blue-500/10">Apply for Online</Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card border-primary/30 hover:border-primary border-2 shadow-[0_0_30px_rgba(0,210,255,0.1)] relative"
          >
            <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">OFFLINE INTERNSHIP</h2>
            <p className="text-gray-400 mb-6">Practical training and hands-on project development at the RAGECAPZ lab.</p>
            <ul className="space-y-3 mb-8">
              {['Access to Idea Lab equipment', 'Physical hardware interaction', 'In-person mentor guidance', 'Team collaboration', 'Hardware + Software integration'].map(item => (
                <li key={item} className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary w-full">Apply for Offline</Link>
          </motion.div>

        </div>

        {/* Learning Flow Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-16">THE INTERNSHIP <span className="text-gradient">JOURNEY</span></h2>
          
          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full z-0" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
              {timeline.map((step, index) => (
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center group w-full md:w-auto"
                >
                  <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-white mb-4 group-hover:bg-primary group-hover:text-black transition-colors z-10 shadow-[0_0_10px_rgba(0,210,255,0.5)]">
                    {index + 1}
                  </div>
                  <div className="text-center md:max-w-[100px]">
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-primary transition-colors">{step}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
