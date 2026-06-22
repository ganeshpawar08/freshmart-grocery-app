import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import ProductCards from './components/ProductCards';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <ProductCards />
      <Testimonials />
      <Footer />
    </div>
  );
    }
