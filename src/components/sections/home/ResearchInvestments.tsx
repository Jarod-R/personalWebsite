export const ResearchInvestments = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 mb-20">
      <section className="p-6 rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Research</h2>
        <p className="text-gray-600 leading-relaxed">
          I have worked across many fields in my career, including genomics, 
          computational biology, AI, medicinal chemistry, protein engineering, 
          and materials science. My research has been published in Nature, Science, Cell,
          and featured in news outlets around the world.
          Current research interests include aging biomarkers, high-throughput screening technologies, neuromodulation, and AI agents for science. 
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <a href="/research" className="text-indigo-600 hover:text-indigo-700 transition-colors">
            Read more about my research →
          </a>
          <a 
            href="https://scholar.google.com/citations?user=uLfZamIAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Publications →
          </a>
        </div>
      </section>

      <section className="p-6 rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Investments</h2>
        <p className="text-gray-600 leading-relaxed">
          I advise investors and companies in longevity biotechnology and neuroscience. Science, business, fundraising, clinical, and regulatory. Experience advising on small molecules, biologics, cell therapies, gene therapies, RNA medicine, medical devices, and diagnostics.
        </p>
        <a href="/investments" className="inline-block mt-4 text-indigo-600 hover:text-indigo-700 transition-colors">
          Some projects I like →
        </a>
      </section>
    </div>
  );
};
