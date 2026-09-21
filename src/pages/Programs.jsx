import { motion } from 'framer-motion';
import { BookOpen, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const courses = [
  { id: 1, title: 'Electronics Fundamentals', level: 'Beginner', duration: '4 Weeks', type: 'Offline / Online', desc: 'Learn the absolute basics of voltage, current, resistance and essential components.', projects: ['Basic Circuits', 'Breadboard Prototyping'] },
  { id: 2, title: 'Arduino Fundamentals', level: 'Beginner', duration: '6 Weeks', type: 'Offline / Online', desc: 'Introduction to microcontrollers, coding logic, and basic hardware interfacing.', projects: ['LED Sequences', 'Motor Control'] },
  { id: 3, title: 'Sensors & Interfacing', level: 'Intermediate', duration: '4 Weeks', type: 'Offline', desc: 'Connect and read data from temperature, ultrasonic, IR, and motion sensors.', projects: ['Weather Station', 'Radar Simulator'] },
  { id: 4, title: 'ESP32 & IoT', level: 'Intermediate', duration: '8 Weeks', type: 'Offline / Online', desc: 'Learn to connect hardware to the internet, send data to the cloud, and build web dashboards.', projects: ['Smart Home Switch', 'Cloud Sensor Node'] },
  { id: 5, title: 'Robotics', level: 'Advanced', duration: '10 Weeks', type: 'Offline', desc: 'Build autonomous robots with multiple sensors, motor drivers, and complex logic.', projects: ['Line Follower', 'Obstacle Avoider'] },
  { id: 6, title: 'Embedded Systems', level: 'Advanced', duration: '12 Weeks', type: 'Offline / Online', desc: 'Deep dive into microcontroller architecture, memory, timers, and communication protocols.', projects: ['Custom Embedded System'] },
  { id: 7, title: 'IoT Projects', level: 'Advanced', duration: '6 Weeks', type: 'Offline / Online', desc: 'Focus entirely on building complex, real-world Internet of Things applications.', projects: ['Smart Agriculture', 'Home Automation'] },
  { id: 8, title: 'Microcontroller Programming', level: 'Intermediate', duration: '8 Weeks', type: 'Offline / Online', desc: 'Mastering C/C++ for embedded devices and exploring different MCU platforms.', projects: ['Multi-tasking MCU Project'] }
];

export default function Programs() {
  useSEO({
    title: 'Our Programs & Courses',
    description: 'Explore RAGECAPZ training programs in Electronics, Arduino, IoT, Robotics, and Microcontrollers for all skill levels.',
    path: '/programs',
  });

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            OUR <span className="text-gradient">TRAINING PROGRAMS</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Practical, project-based courses designed to turn complete beginners into confident electronics innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                  course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                  course.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {course.level}
                </span>
                <span className="text-gray-500 text-sm font-mono flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {course.duration}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
              
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary" />
                {course.type}
              </div>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow">{course.desc}</p>
              
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" /> Projects Included
                </h4>
                <ul className="text-sm text-gray-400 pl-6 list-disc marker:text-primary">
                  {course.projects.map(proj => <li key={proj}>{proj}</li>)}
                </ul>
              </div>
              
              <Link to="/contact" className="btn-secondary w-full group/btn">
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
