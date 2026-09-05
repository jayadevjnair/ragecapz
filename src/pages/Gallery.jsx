import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Workshops', 'Idea Lab', 'Projects', 'School Programs', 'Internships', 'Summer Camps'];

const galleryItems = [
  { id: 1, category: 'Workshops', img: '/rageph/2.jpeg', caption: 'ESP32 & IoT Workshop at Idea Lab' },
  { id: 2, category: 'Idea Lab', img: '/rageph/WhatsApp-Image-2026-03-06-at-10.08.17-AM-1-1024x768.jpeg', caption: 'Students testing their circuits' },
  { id: 3, category: 'Projects', img: '/rageph/WhatsApp-Image-2026-03-06-at-10.08.17-AM.jpeg', caption: 'Smart Home Automation Prototype' },
  { id: 4, category: 'School Programs', img: '/rageph/WhatsApp-Image-2026-03-06-at-10.08.18-AM-1-771x1024.jpeg', caption: 'Electronics basics for 8th graders' },
  { id: 5, category: 'Summer Camps', img: '/rageph/WhatsApp-Image-2026-03-06-at-10.08.18-AM-2-scaled.jpeg', caption: 'Building the first robot' },
  { id: 6, category: 'Internships', img: '/rageph/WhatsApp-Image-2026-03-06-at-10.08.18-AM-768x578.jpeg', caption: 'Offline Internship Project Discussion' },
  { id: 7, category: 'Projects', img: '/rageph/WhatsApp-Image-2026-03-06-at-10.08.19-AM-1-2048x1536.jpeg', caption: 'Autonomous Navigation Robot' },
  { id: 8, category: 'Workshops', img: '/rageph/WhatsApp-Image-2026-03-06-at-10.08.19-AM-768x1024.jpeg', caption: 'Soldering practice session' },
  { id: 9, category: 'Idea Lab', img: '/rageph/WhatsApp-Image-2026-03-06-at-10.08.20-AM.jpeg', caption: 'Working with Arduino Mega' },
  { id: 10, category: 'Projects', img: '/rageph/AQMQqKLIq0NHN4GRUgfbr2kDIVhqlNsBTb5cXB2yRYKCQJIxcOTNgrgk232KLw6Mq7UFupZPj7g56SylUKrIR-KdupX8gDd91f4pEKE.mp4', caption: 'Hardware Innovation' },
  { id: 11, category: 'Workshops', img: '/rageph/AQNFYpGf6EkJms76rgxOrZFDx6fBtQj-9QWqdP6jgSkurt2WvbM7LYfMXUe2WL7CyX34bdVTzlV1PMPQTRPIUxX5RiMX-vIG2gzUADQ.mp4', caption: 'Hands-on Session' },
  { id: 12, category: 'Idea Lab', img: '/rageph/AQNerbOaPjpxZlm21SA9vEotXGRmuXLkycE5yDhntCvBxKK1DIBVnqPhObaq8La4DZrdPpvjdnRndkJfcjsxSPv1YanwQqbyrZx5oHs.mp4', caption: 'Building the future' },
  { id: 13, category: 'Summer Camps', img: '/summercamp/WhatsApp Image 2026-05-30 at 11.56.24 AM.jpeg', caption: 'Summer Camp Activity' },
  { id: 14, category: 'Summer Camps', img: '/summercamp/IMG_20260408_121949.jpg', caption: 'Camp Innovations' },
  { id: 15, category: 'Summer Camps', img: '/summercamp/IMG_20260506_125555.jpg', caption: 'Building circuits' },
  { id: 16, category: 'Summer Camps', img: '/summercamp/WhatsApp Image 2026-05-30 at 11.57.07 AM.jpeg', caption: 'Team work' },
  { id: 17, category: 'Summer Camps', img: '/summercamp/IMG_20260506_141948.jpg', caption: 'Testing models' },
  { id: 18, category: 'Summer Camps', img: '/summercamp/IMG_20260506_142214.jpg', caption: 'Fun at camp' },
  { id: 19, category: 'Summer Camps', img: '/summercamp/VID_20260407_105644.mp4', caption: 'Camp Highlights Video' },
  { id: 20, category: 'Summer Camps', img: '/summercamp/VID_20260407_110438.mp4', caption: 'Camp Activity Video' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            OUR <span className="text-gradient">GALLERY</span>
          </h1>
          <p className="text-gray-400">
            A glimpse into the hands-on learning, workshops, and student innovations at RAGECAPZ.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-primary text-black'
                  : 'bg-surface text-gray-400 hover:text-white border border-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-xl cursor-pointer break-inside-avoid border border-white/10"
                onClick={() => setSelectedImg(item)}
              >
                {item.img.endsWith('.mp4') ? (
                  <video
                    src={item.img}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                    autoPlay muted loop playsInline
                  />
                ) : (
                  <img
                    src={item.img}
                    alt={item.caption}
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                  <p className="text-white font-medium">{item.caption}</p>
                  <p className="text-gray-400 text-xs mt-1">RAGECAPZ Idea Lab</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImg.img.endsWith('.mp4') ? (
                <video
                  src={selectedImg.img}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl mb-6"
                  controls autoPlay
                />
              ) : (
                <img src={selectedImg.img} alt={selectedImg.caption} className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl mb-6" />
              )}
              <div className="text-center">
                <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-2">{selectedImg.category}</span>
                <h3 className="text-2xl text-white font-display">{selectedImg.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
