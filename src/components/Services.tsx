import { Code, Palette, Video, LineChart, Bot, Pen, Layout, Share } from 'lucide-react';
import { useState, useRef } from 'react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Learn to build modern websites and applications using the latest technologies.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Create intuitive and beautiful user interfaces that enhance user experience.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Master digital design tools to create stunning visuals and branding materials.',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Create engaging video content using professional editing techniques.',
  },
  {
    icon: LineChart,
    title: 'Digital Marketing',
    description: 'Learn to grow online presence through effective digital marketing strategies.',
  },
  {
    icon: Share,
    title: 'Social Media Management',
    description: 'Build and manage engaging social media presence for brands.',
  },
  {
    icon: Pen,
    title: 'Content Writing',
    description: 'Craft compelling content that engages audiences and drives results.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Harness the power of AI tools to automate tasks and increase productivity.',
  },
];

export default function Services() {
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="services" className="py-20 bg-[#2A2D35] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills That Pay
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our curated selection of high-demand digital skills. Each course is designed to provide practical, job-ready expertise.
          </p>
        </div>

        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4 gap-6"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setStartX(null)}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="flex-none w-[300px] snap-center bg-[#24272D] p-8 rounded-2xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 bg-[#33FEA8]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#33FEA8]/20 transition-colors">
                <service.icon className="h-6 w-6 text-[#33FEA8]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}