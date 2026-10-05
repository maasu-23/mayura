import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { HowItWorks } from '../components/HowItWorks';
import { Credentials } from '../components/Credentials';
import { Stats } from '../components/Stats';
import { CategoryTabs } from '../components/CategoryTabs';
import { Testimonials } from '../components/Testimonials';
import { Finishes } from '../components/Finishes';
import { BrandCarousel } from '../components/BrandCarousel';
import { Packages } from '../components/Packages';
import { VideoSection } from '../components/VideoSection';
import { ClosingCTA } from '../components/ClosingCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <CategoryTabs />
      <Packages />
      <PortfolioGrid />
      <VideoSection />
      <HowItWorks />
      <Finishes />
      <BrandCarousel />
      <Credentials />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
