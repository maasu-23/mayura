import type { ReactNode } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { ScrollToHash } from './ScrollToHash';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper">
      <ScrollToHash />
      <NavBar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
