import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, GraduationCap, School } from 'lucide-react';
import { useState } from 'react';
import useSEO from '../hooks/useSEO';

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with RAGECAPZ for student programs, school partnerships, and idea lab access.',
    path: '/contact',
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        e.target.reset();
      } else {
        setStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            GET IN <span className="text-gradient">TOUCH</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Whether you're a student ready to build or a school ready to innovate, we want to hear from you.
          </motion.p>
        </div>

        {/* Contact Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 flex flex-col items-center text-center border-white/5 hover:border-primary/30 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">FOR STUDENTS</h2>
            <p className="text-gray-400 mb-6 flex-grow italic">"Want to learn electronics and build real projects?"</p>
            <button className="btn-primary w-full" onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' })}>
              Join a Program
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-10 flex flex-col items-center text-center border-white/5 hover:border-accent/30 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <School className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">FOR SCHOOLS</h2>
            <p className="text-gray-400 mb-6 flex-grow italic">"Want to introduce electronics and innovation into your school?"</p>
            <button className="btn-secondary w-full" onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' })}>
              Partner With Us
            </button>
          </motion.div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-2xl font-display font-bold text-white mb-8">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Our Location</h4>
                <p className="text-gray-400 text-sm">
                  <a href="https://www.google.com/search?sca_esv=bf6999419cddcee1&sxsrf=APpeQns2oQPMF3B4h-gdMhcRl20QnYbsBw:1788534779319&q=rage+capz+pampady+address&ludocid=15666941227950883015&sa=X&ved=2ahUKEwjf78Ghm9WWAxXPjeEIHcShMc8Q6BN6BAgfEAI&cshid=1788534953769764" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    2nd Floor, Dolphin Arcade, C3,<br/>near Treasury Building,<br/>Pampady, Kerala 686502
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Phone Number</h4>
                <p className="text-gray-400 text-sm">
                  <a href="tel:+918592010676" className="hover:text-primary transition-colors">+91 85920 10676</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Email Address</h4>
                <p className="text-gray-400 text-sm">
                  <a href="mailto:ragecapz@gmail.com" className="hover:text-primary transition-colors">ragecapz@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            id="contactForm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-8 md:p-12 border-primary/20"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="9b38839c-a949-4b1b-859d-5669abb86554" />
              <input type="hidden" name="subject" value="New Enquiry from RAGECAPZ Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {status && (
                <div className={`p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input type="tel" name="phone" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Organization / School (Optional)</label>
                  <input type="text" name="organization" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="School Name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Interested Program</label>
                  <select name="program" defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" disabled>Select a program</option>
                    <option value="hands-on">Hands-on Training</option>
                    <option value="idea-lab">Idea Lab</option>
                    <option value="internship">Internship</option>
                    <option value="summer-camp">Summer Camp</option>
                    <option value="school-program">School Program</option>
                    <option value="microcontroller">Microcontroller Training</option>
                    <option value="sensor">Sensor Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mode</label>
                  <select name="mode" defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" disabled>Select mode</option>
                    <option value="offline">Offline (At Lab)</option>
                    <option value="online">Online (Remote)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full group flex items-center justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                {!isSubmitting && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
