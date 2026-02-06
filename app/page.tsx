import Banner from './components/Home/Banner';
import Features from './components/Home/Features';
import Facts from './components/Home/Facts';
import CTASection from './components/Home/CTASection';
import Testimonials from './components/Home/Testimonials';
import Brands from './components/Home/Brands';
import FinalCTA from './components/Home/FinalCTA';
import FAQ from './components/Home/FAQ';

export default function HomePage() {
  return (
    <>
      <Banner />
      <Features />
      <Facts />
      <CTASection />
      <Testimonials />
      <Brands />
      <FinalCTA />
      <FAQ />
    </>
  );
}