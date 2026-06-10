import React, { useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface CollectionItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ServiceItem {
  title: string;
  description: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

interface BlogItem {
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export default function FashionPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const collections: CollectionItem[] = [
    { id: 1, title: "Noir Élégance Noir", category: "Haute Couture", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Gilded Silk Gown", category: "Bridal Wear",image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Urban Minimalist", category: "Ready-to-Wear", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Velvet Renaissance", category: "Haute Couture", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Ivory Majesty", category: "Bridal Wear", image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Monochrome Tailoring", category: "Ready-to-Wear", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80" },
  ];

  const services: ServiceItem[] = [
    { title: "Custom Designs", description: "Bespoke, one-of-a-kind garments tailored meticulously to your exact measurements and aesthetic vision." },
    { title: "Bridal Wear", description: "Exquisite bridal gowns and wedding party ensembles that blend timeless romance with modern luxury." },
    { title: "Ready-to-Wear", description: "Seasonal luxury collections offering high-fashion silhouettes crafted for contemporary everyday elegance." },
    { title: "Fashion Consultation", description: "One-on-one styling ideology sessions, fabric sourcing masterclasses, and wardrobe curation." },
  ];

  const testimonials: TestimonialItem[] = [
    { quote: "Wearing an original piece made me feel like royalty. The attention to detail and choice of silk was absolutely breathtaking.", author: "Elena Rostova", role: "Vogue Contributor" },
    { quote: "The bridal gown designed for my wedding was a masterpiece. It captured my personality perfectly and stole the entire night.", author: "Seraphina Vance", role: "Art Director" },
  ];

  const blogPosts: BlogItem[] = [
    { title: "The Evolution of Minimalist Luxury", date: "June 08, 2026", excerpt: "How clean lines and muted tones are redefining modern high-fashion runways this season.", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80" },
    { title: "Sourcing Sustainable Silk", date: "May 24, 2026", excerpt: "A deep dive behind the scenes into our eco-conscious atelier production and ethical fabric journey.", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80" },
  ];

  const filters: string[] = ['All', 'Haute Couture', 'Bridal Wear', 'Ready-to-Wear'];

  const filteredPortfolio = activeFilter === 'All'
    ? collections
    : collections.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] font-sans antialiased selection:bg-[#d4af37] selection:text-black">

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-[0.3em] text-[#f5f5f5] hover:text-[#d4af37] transition-colors duration-300">
            BIANCA <span className="text-[#d4af37]">VANCE</span>
          </a>

          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-[#d4af37] transition-colors duration-300">About</a>
            <a href="#collections" className="hover:text-[#d4af37] transition-colors duration-300">Collections</a>
            <a href="#services" className="hover:text-[#d4af37] transition-colors duration-300">Services</a>
            <a href="#portfolio" className="hover:text-[#d4af37] transition-colors duration-300">Portfolio</a>
            <a href="#blog" className="hover:text-[#d4af37] transition-colors duration-300">Blog</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#f5f5f5] hover:text-[#d4af37] transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-[#1f1f1f] px-6 py-6 space-y-4 flex flex-col text-sm uppercase tracking-[0.2em] transition-all duration-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d4af37]">About</a>
            <a href="#collections" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d4af37]">Collections</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d4af37]">Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d4af37]">Portfolio</a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d4af37]">Blog</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d4af37]">Contact</a>
          </div>
        )}
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1920&q=80"
            alt="High Fashion Model"
            className="w-full h-full object-cover opacity-40 scaling-effect animate-[pulse_8s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.5em] text-[#d4af37] mb-4 font-light animate-fade-in">Haute Couture Atelier</p>
          <h1 className="text-5xl md:text-8xl font-light tracking-[0.15em] mb-6 text-[#f5f5f5] uppercase">
            BIANCA VANCE
          </h1>
          <p className="text-sm md:text-lg text-gray-400 font-light tracking-[0.15em] max-w-2xl mx-auto mb-10 leading-relaxed">
            Architecting timeless silhouettes that merge classical poetry with contemporary avant-garde structure.
          </p>
          <a
            href="#collections"
            className="inline-flex items-center space-x-3 border border-[#d4af37] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#f5f5f5] bg-transparent hover:bg-[#d4af37] hover:text-black transition-all duration-500 ease-out group"
          >
            <span>View Collection</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Scroll</span>
          <div className="w-[1px] h-10 bg-[#d4af37]/50" />
        </div>
      </section>

      <section id="about" className="py-24 max-w-7xl mx-auto px-6 border-b border-[#1f1f1f]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 border border-[#d4af37] translate-x-4 translate-y-4 z-0" />
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
              alt="Designer working"
              className="relative z-10 w-full object-cover h-[550px]"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3">The Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase mb-6">Sartorial Storytelling</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              With over a decade of presence in Paris, Milan, and New York fashion circuits, Bianca Vance crafts wearable luxury artwork designed to empower the human form.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Every curve, fabric choice, and hidden stitch acts as a deliberate choice toward sustainability, effortless elegance, and high-contrast dramatic expression. We believe garments shouldn’t just dress the body; they must anchor the soul.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1f1f1f]">
              <div>
                <p className="text-2xl font-light text-[#d4af37]">12+</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Years Atelier Exp</p>
              </div>
              <div>
                <p className="text-2xl font-light text-[#d4af37]">40+</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Runway Shows</p>
              </div>
              <div>
                <p className="text-2xl font-light text-[#d4af37]">5k+</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Custom Designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="py-24 bg-[#0d0d0d] border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3">Curated Series</span>
              <h2 className="text-3xl font-light tracking-wide uppercase">Seasonal Masterpieces</h2>
            </div>
            <p className="text-gray-500 text-sm font-light tracking-wider max-w-sm mt-4 md:mt-0">
              A curated look into our premier runway capsules highlighting structure and grace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.slice(0, 3).map((item) => (
              <div key={item.id} className="group relative overflow-hidden bg-[#121212] border border-[#1f1f1f]">
                <div className="h-[450px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] mb-1">{item.category}</p>
                  <h3 className="text-lg font-light tracking-wide mb-3">{item.title}</h3>
                  <a href="#portfolio" className="inline-flex items-center text-xs uppercase tracking-widest text-[#f5f5f5] hover:text-[#d4af37] transition-colors">
                    Explore Details <ChevronRight size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 max-w-7xl mx-auto px-6 border-b border-[#1f1f1f]">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3">Atelier Services</span>
          <h2 className="text-3xl font-light tracking-wide uppercase">What We Offer</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#121212]/40 backdrop-blur-md border border-[#1f1f1f] hover:border-[#d4af37]/40 transition-all duration-300 rounded-none relative group"
            >
              <div className="w-8 h-8 flex items-center justify-center text-[#d4af37] mb-6 border border-[#d4af37]/30 p-1 group-hover:bg-[#d4af37] group-hover:text-black transition-colors duration-500">
                <Sparkles size={16} />
              </div>
              <h3 className="text-base font-medium tracking-widest uppercase mb-4 text-[#f5f5f5]">{service.title}</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-[#0d0d0d] border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3">The Lookbook</span>
            <h2 className="text-3xl font-light tracking-wide uppercase">Complete Portfolio</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-xs uppercase tracking-[0.2em]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`pb-2 px-1 transition-all duration-300 ${activeFilter === filter
                    ? 'border-b border-[#d4af37] text-[#d4af37]'
                    : 'text-gray-500 hover:text-[#f5f5f5]'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="relative overflow-hidden group bg-[#121212] border border-[#1f1f1f] h-[400px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] mb-2">{item.category}</span>
                  <h4 className="text-base font-light tracking-widest uppercase mb-4">{item.title}</h4>
                  <div className="w-10 h-[1px] bg-[#d4af37]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6 text-center border-b border-[#1f1f1f]">
        <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-4">Auteur Reviews</span>
        <div className="space-y-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl font-light italic leading-relaxed text-gray-300 mb-6">
                "{t.quote}"
              </p>
              <h5 className="text-xs uppercase tracking-[0.2em] text-[#f5f5f5] font-semibold">{t.author}</h5>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">{t.role}</p>
              {idx < testimonials.length - 1 && <div className="w-12 h-[1px] bg-[#1f1f1f] mx-auto mt-12" />}
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="py-24 bg-[#0d0d0d] border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3">Editorial Notes</span>
              <h2 className="text-3xl font-light tracking-wide uppercase">The Atelier Blog</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="group bg-[#121212] border border-[#1f1f1f] flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">{post.date}</span>
                    <h3 className="text-base uppercase font-light tracking-wide mt-2 mb-4 group-hover:text-[#d4af37] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{post.excerpt}</p>
                  </div>
                  <a href="#" className="inline-flex items-center text-[11px] uppercase tracking-widest text-[#d4af37] mt-6 group/link">
                    Read Editorial <ArrowRight size={12} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-1 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] block mb-3">Rendezvous</span>
              <h2 className="text-3xl font-light tracking-wide uppercase">Get In Touch</h2>
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              For private styling commissions, custom bridal consultations, or press inquiries, reach out to our dedicated concierge.
            </p>

            <div className="space-y-4 pt-4 text-xs font-light tracking-wider text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-[#d4af37]" />
                <span>atelier@biancavance.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-[#d4af37]" />
                <span>+1 (415) 555-8921</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={14} className="text-[#d4af37]" />
                <span>Rue du Faubourg Saint-Honoré, Paris</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-8 h-8 rounded-full border border-[#1f1f1f] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#1f1f1f] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#1f1f1f] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
                <FaFacebook size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#121212]/60 backdrop-blur-md p-8 border border-[#1f1f1f]">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-light">Full Name</label>
                  <input
                    type="text"
                    className="bg-[#0a0a0a] border border-[#1f1f1f] px-4 py-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
                    placeholder="e.g., Alexandra Sterling"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-light">Email Address</label>
                  <input
                    type="email"
                    className="bg-[#0a0a0a] border border-[#1f1f1f] px-4 py-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
                    placeholder="e.g., alex@luxury.com"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-light">Inquiry Type</label>
                <select className="bg-[#0a0a0a] border border-[#1f1f1f] px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#d4af37] transition-colors duration-300">
                  <option>Bespoke Haute Couture</option>
                  <option>Bridal Collection Request</option>
                  <option>Press & Editorial Booking</option>
                  <option>Ready-to-Wear Wholesale</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-light">The Vision / Message</label>
                <textarea
                  rows={4}
                  className="bg-[#0a0a0a] border border-[#1f1f1f] px-4 py-3 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#d4af37] transition-colors duration-300 resize-none"
                  placeholder="Describe your requested concept, dates, or custom dimensions..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#d4af37] text-black text-xs uppercase tracking-[0.3em] font-semibold hover:bg-[#b8952e] transition-colors duration-300"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>
      </section>

      <footer className="bg-[#050505] border-t border-[#1f1f1f] py-12 text-center text-xs tracking-wider text-gray-500">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <p className="text-[#f5f5f5] font-light tracking-[0.4em] uppercase text-sm">BIANCA VANCE</p>
          <div className="flex justify-center space-x-6 text-[10px] uppercase tracking-widest">
            <a href="#about" className="hover:text-[#d4af37] transition-colors">About</a>
            <a href="#collections" className="hover:text-[#d4af37] transition-colors">Collections</a>
            <a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Lookbook</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </div>
          <div className="w-16 h-[1px] bg-[#1f1f1f] mx-auto" />
          <p className="text-[10px] font-light">
            &copy; {new Date().getFullYear()} BIANCA VANCE ATELIER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

    </div>
  );
}