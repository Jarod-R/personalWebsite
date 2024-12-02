import { Background } from '@/components/layout/Background';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { AboutContent } from '@/components/sections/about/AboutContent';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function About() {
  return (
    <Background>
      <AboutHero />

      <div className="relative max-w-4xl mx-auto px-4 py-20">
        <div className="text-sm mb-12">
          <span className="text-indigo-600">About</span>
        </div>

        <AboutContent />
        <ContactCTA />
      </div>
    </Background>
  );
}