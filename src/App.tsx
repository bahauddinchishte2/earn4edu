import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import About from './components/About';
import Testimonials from './components/Testimonials';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#24272D]">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <About />
        <Testimonials />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}