// src/components/sections/FeaturedStories.tsx

import { StoryCard } from '@/components/ui/StoryCard';

export const FeaturedStories = () => {
  const stories = [
    {
      href: "https://www.washingtonpost.com/wellness/2024/11/25/longevity-organ-aging-disease/",
      image: "../images/washpost.jpg",
      publication: "The Washington Post",
      title: "Inside your body, aging unfolds at remarkably different rates",
      description: "My latest research on organ aging biomarkers."
    },
    {
      href: "https://www.bloomberg.com/news/articles/2024-11-11/crypto-millionaire-fuels-push-to-transform-brain-research",
      image: "../images/Fickel_1.jpg",
      publication: "Bloomberg",
      title: "How a Winning Bet on Crypto Could Transform Brain and Longevity Science",
      description: "Features my work with The Amaranth Foundation."
    },
    {
      href: "https://www.nature.com/articles/s41586-023-06802-1",
      image: "../images/7990.png",
      publication: "Nature",
      title: "On The Cover: Internal Clocks",
      description: "Our original method to measure biological aging of organs with a blood test."
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-lg font-medium text-gray-800 mb-6">Featured Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </section>
  );
};
