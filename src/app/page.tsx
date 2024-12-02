import { Background } from '@/components/layout/Background';
import { Hero } from '@/components/sections/home/Hero';
import { ResearchInvestments } from '@/components/sections/home/ResearchInvestments';
import { FeaturedStories } from '@/components/sections/home/FeaturedStories';
import { ContactCTA } from '@/components/sections/ContactCTA';


export default function Home() {
  return (
    <Background>
      <div className="relative max-w-4xl mx-auto px-4 py-20">
        <div className="text-sm mb-12">
          <span className="text-indigo-600">Home</span>
        </div>
        
        <Hero />
        <ResearchInvestments />
        <FeaturedStories />
        <ContactCTA />
      </div>
    </Background>
  );
}