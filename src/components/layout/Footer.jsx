import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Instagram = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img loading="lazy" 
                src="/ChatGPT Image Sep 5, 2026, 12_46_07 AM.png" 
                alt="RAGECAPZ Logo" 
                className="w-8 h-8 rounded-lg object-contain bg-white/5" 
              />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                RAGECAPZ
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Learn. Build. Innovate. Where ideas become electronic reality through hands-on learning and practical experimentation.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/ragecapz?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 hover:text-primary hover:bg-surface-hover transition-all" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/19hpiSkbPq/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 hover:text-primary hover:bg-surface-hover transition-all" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918592010676?text=Hi!%20I%20would%20like%20to%20connect%20with%20RAGECAPZ." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 hover:text-primary hover:bg-surface-hover transition-all" title="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
              <li><Link to="/idea-lab" className="hover:text-primary transition-colors">Idea Lab</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects Showcase</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Opportunities</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/internships" className="hover:text-primary transition-colors">Internships</Link></li>
              <li><Link to="/summer-camps" className="hover:text-primary transition-colors">Summer Camps</Link></li>
              <li><Link to="/school-programs" className="hover:text-primary transition-colors">School Programs</Link></li>
              <li><Link to="/programs#training" className="hover:text-primary transition-colors">Hands-on Training</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <a href="https://www.google.com/search?sca_esv=bf6999419cddcee1&sxsrf=APpeQns2oQPMF3B4h-gdMhcRl20QnYbsBw:1788534779319&q=rage+capz+pampady+address&ludocid=15666941227950883015&sa=X&ved=2ahUKEwjf78Ghm9WWAxXPjeEIHcShMc8Q6BN6BAgfEAI&cshid=1788534953769764" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                  2nd Floor, Dolphin Arcade, C3,<br/>near Treasury Building,<br/>Pampady, Kerala 686502
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918592010676" className="text-sm hover:text-primary transition-colors">+91 85920 10676</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/918592010676?text=Hi!%20I%20would%20like%20to%20connect%20with%20RAGECAPZ." target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:ragecapz@gmail.com" className="text-sm hover:text-primary transition-colors">ragecapz@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>&copy; {currentYear} RAGECAPZ. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Developed by 
              <span className="font-display font-bold tracking-widest text-lg">
                <span className="text-white">cor</span><span className="text-primary">duino</span>
              </span>
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
