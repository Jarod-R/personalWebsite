interface StoryCardProps {
  href: string;
  image: string;
  publication: string;
  title: string;
  description: string;
}

export const StoryCard = ({ href, image, publication, title, description }: StoryCardProps) => {
  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
    >
      <div className="aspect-[1.85/1] relative">
        <img
          src={image}
          alt={`${publication} article thumbnail`}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent" />
      </div>
      <div className="p-4">
        <span className="text-xs text-gray-400 mb-1 block">{publication}</span>
        <h3 className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 line-clamp-2 mb-2">
          {title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
};
