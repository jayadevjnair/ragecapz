import { motion } from 'framer-motion';
import { School, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const offerings = [
  "Electronics & Microcontroller Training",
  "Robotics & IoT Workshops",
  "Student Project Mentoring",
  "Idea Lab Setup in Schools",
  "Innovation & Tinkering Activities",
  "Curriculum Integration Support"
];

export default function SchoolPrograms() {
  useSEO({
    title: 'School Programs',
    description: 'Bring electronics into your school. RAGECAPZ provides practical electronics and technology education directly to students.',
    path: '/school-programs',
  });

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <School className="w-4 h-4" /> For Educational Institutions
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              BRING ELECTRONICS <span className="text-gradient">INTO YOUR SCHOOL.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              RAGECAPZ provides practical electronics and technology education directly to schools, helping students learn through hands-on experimentation and project-based learning rather than just theory.
            </p>
            
            <div className="space-y-4 mb-10">
              {offerings.map(item => (
                <div key={item} className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            
            <Link to="/contact" className="btn-primary">
              Partner With RAGECAPZ
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative">
              <img 
                src="/ChatGPT Image Sep 4, 2026, 11_15_06 PM.png" 
                alt="Students learning electronics in school" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/20 mix-blend-overlay" />
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 border-primary/30 max-w-xs shadow-2xl">
              <div className="text-4xl font-display font-bold text-white mb-2">100%</div>
              <div className="text-sm text-gray-400">Practical, hands-on learning approach tailored for school students.</div>
            </div>
          </motion.div>

        </div>

        {/* Collaborated Schools Section */}
        <div className="mt-24 pt-16 border-t border-white/5 text-center max-w-5xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-white mb-8">
            OUR <span className="text-gradient">COLLABORATED SCHOOLS</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-opacity">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/collab/Screenshot 2026-09-04 210238.png" 
              alt="Collaborated School 1" 
              className="h-24 md:h-32 w-auto object-contain bg-white rounded-xl p-3 shadow-xl hover:scale-105 transition-transform" 
            />
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              src="/collab/765051106_17886949677611003_2139655619078270387_n.heic" 
              alt="Collaborated School 2" 
              className="h-24 md:h-32 w-auto object-contain bg-white rounded-xl p-3 shadow-xl hover:scale-105 transition-transform" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
