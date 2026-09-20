import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { HowItWorks } from '../components/HowItWorks';
import { Credentials } from '../components/Credentials';
import { ClosingCTA } from '../components/ClosingCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid />
      <HowItWorks />
      <Credentials />
      <ClosingCTA />
    </>
  );
}
