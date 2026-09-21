import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Zap } from 'lucide-react';
import useSEO from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: 'About Us',
    description: 'Learn about RAGECAPZ. Our mission is to make electronics education practical, accessible, and exciting for students through hands-on training.',
    path: '/about',
  });

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight"
          >
            BUILDING THE NEXT GENERATION OF <span className="text-gradient">ELECTRONICS INNOVATORS.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            RAGECAPZ is not just a coaching center. We are an education platform, hands-on training facility, and student innovation center dedicated to bridging the gap between theoretical knowledge and practical application.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-primary/20 hover:border-primary/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-4">
                <Target className="w-8 h-8 text-primary" /> Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                "To make electronics education practical, accessible and exciting for students."
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-accent/20 hover:border-accent/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb className="w-32 h-32 text-accent" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-4">
                <Lightbulb className="w-8 h-8 text-accent" /> Our Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed italic border-l-4 border-accent pl-6 py-2">
                "To create a generation of students who don't just use technology — they understand it, build it and innovate with it."
              </p>
            </div>
          </motion.div>

        </div>

        {/* Philosophy */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-12">OUR LEARNING <span className="text-gradient">PHILOSOPHY</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Student-Centric</h3>
              <p className="text-gray-400 text-sm">We focus on individual student development, encouraging them to learn at their own pace through active experimentation.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Practical First</h3>
              <p className="text-gray-400 text-sm">We believe that electronics cannot be learned from a textbook alone. Hardware interaction is mandatory.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation Driven</h3>
              <p className="text-gray-400 text-sm">We don't just teach how things work; we teach how to use them to solve real-world problems.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
