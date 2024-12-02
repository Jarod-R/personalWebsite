import { Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between text-xs text-gray-400">
        <span>Built from scratch with Next.js</span>
        <a 
          href="https://github.com/Jarod-R/personalWebsite" 
          className="flex items-center gap-2 hover:text-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          <span>View source</span>
        </a>
      </div>
    </footer>
  );
};
