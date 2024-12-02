// src/components/sections/ContactCTA.tsx
export const ContactCTA = () => {
  return (
    <section className="pt-8 border-t border-gray-200 group hover:border-gray-300 transition-colors duration-300">
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
        Feel free to reach out to discuss research collaborations or investment opportunities.
      </p>
      <a 
        href="/contact" 
        className="inline-flex items-center mt-2 text-indigo-600 hover:text-indigo-700 transition-all duration-300 ease-out group-hover:translate-x-1"
      >
        Get in touch
        <span className="transform transition-transform duration-300 translate-x-1 group-hover:translate-x-2">
          →
        </span>
      </a>
    </section>
  );
};