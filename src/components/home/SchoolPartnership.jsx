import { motion } from 'framer-motion';
import { School, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SchoolPartnership() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-primary/5 circuit-bg" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto p-12 text-center border-primary/30 relative overflow-hidden"
        >
          {/* Decorative icons */}
          <School className="absolute -top-10 -right-10 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
          
          <div className="w-20 h-20 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
            <School className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            READY TO BUILD AN <span className="text-gradient">INNOVATION CULTURE</span> IN YOUR SCHOOL?
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with RAGECAPZ to introduce practical electronics, microcontrollers, sensors, robotics and IoT learning into your school curriculum.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Partner With Us
            </Link>
            <Link to="/school-programs" className="btn-secondary group">
              Request a School Program
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
