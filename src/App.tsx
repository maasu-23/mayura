import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { HowItWorks } from './components/HowItWorks';
import { Credentials } from './components/Credentials';
import { Faq } from './components/Faq';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-paper">
      <NavBar />
      <main>
        <Hero />
        <PortfolioGrid />
        <HowItWorks />
        <Credentials />
        <Faq />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
