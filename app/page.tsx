import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LifeIntro from '@/components/LifeIntro';
import Services from '@/components/Services';
import TherapyHope from '@/components/TherapyHope';
import About from '@/components/About';
import OurOfficeSection from '@/components/OurOfficeSection';
import FAQ from '@/components/FAQ';
import ProfessionalBackground from '@/components/ProfessionalBackground';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LifeIntro />
      <Services />
      <TherapyHope />
      <About />
      <OurOfficeSection />
      <FAQ />
      <ProfessionalBackground />
      <Contact />
      <Footer />
    </main>
  );
}
