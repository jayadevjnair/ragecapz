import { motion } from 'framer-motion';
import { Lightbulb, Wrench, GraduationCap, Sun, School, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 'idea-lab',
    title: '01 — IDEA LAB',
    desc: 'A dedicated environment where students can experiment with electronics, microcontrollers, sensors, robotics, IoT and innovative ideas.',
    icon: Lightbulb,
    tags: ['Arduino', 'ESP32', 'Sensors', 'Robotics', 'IoT'],
    link: '/idea-lab',
    linkText: 'Explore Idea Lab',
    highlight: true
  },
  {
    id: 'hands-on',
    title: '02 — HANDS-ON TRAINING',
    desc: 'Practical electronics training where students learn by working directly with components, circuits, sensors and microcontrollers.',
    icon: Wrench,
    tags: ['Circuits', 'Motors', 'Displays', 'Projects'],
    link: '/programs',
    linkText: 'View Training'
  },
  {
    id: 'internships',
    title: '03 — INTERNSHIPS',
    desc: 'Online remote learning or offline practical training with guided project development and mentorship.',
    icon: GraduationCap,
    tags: ['Embedded Systems', 'IoT', 'Automation'],
    link: '/internships',
    linkText: 'View Internships'
  },
  {
    id: 'summer-camps',
    title: '04 — SUMMER CAMPS',
    desc: 'Engaging sections designed for school students and beginners. Your summer. Your idea. Your first invention.',
    icon: Sun,
    tags: ['Electronics Basics', 'Mini Projects', 'Team Challenges'],
    link: '/summer-camps',
    linkText: 'Register for Camp'
  },
  {
    id: 'school-programs',
    title: '05 — SCHOOL PROGRAMS',
    desc: 'Bring practical electronics and technology education directly to schools through hands-on experimentation.',
    icon: School,
    tags: ['Workshops', 'Mentoring', 'Lab Setup'],
    link: '/school-programs',
    linkText: 'Partner With Us'
  },
  {
    id: 'microcontroller',
    title: '06 — MICROCONTROLLER & SENSOR TRAINING',
    desc: 'Comprehensive training on modern development boards, sensors, and communication protocols.',
    icon: Cpu,
    tags: ['UART', 'I2C', 'SPI', 'Wi-Fi', 'Bluetooth'],
    link: '/programs',
    linkText: 'View Courses'
  }
];

export default function Programs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            LEARN. BUILD. <span className="text-gradient">EXPERIENCE.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card flex flex-col group ${prog.highlight ? 'border-primary/30 shadow-[0_0_15px_rgba(0,210,255,0.05)]' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-display font-bold tracking-wider text-primary">{prog.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {prog.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {prog.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link to={prog.link} className="inline-flex items-center text-sm font-semibold text-white hover:text-primary transition-colors mt-auto w-max group/link">
                  {prog.linkText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
