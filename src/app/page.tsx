// src/app/page.tsx

export default function Home() {
  return (
    //<div className="min-h-screen bg-gradient-to-br from-rose-50 via-indigo-50 to-sky-50">
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-indigo-50 to-sky-50 backdrop-blur-[100px]">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-diagonal-pattern bg-line opacity-[0.1]"></div>


        
        <div className="relative max-w-4xl mx-auto px-4 py-20">
          <div className="text-sm mb-12">
            <span className="text-indigo-600">Home</span>
          </div>

          <section className="space-y-6 mb-20">
            <h1 className="text-3xl font-normal text-gray-800">
              Hello, I'm Jarod
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              I want to create a world free of disease and aging. Currently I am a group leader and the head of investments at The Amaranth Foundation and Starbloom Capital. I did my Ph.D. at Stanford with additional training at EMBL Heidelberg and Harvard. I have done research in biology, AI, chemistry, and materials science, founded 3 companies, and worked with founders, VCs, family offices, non-profits, and governments to advance the mission of healthy life extension.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <section className="p-6 rounded-lg bg-white shadow-sm">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Research</h2>
              <p className="text-gray-600 leading-relaxed">
                My PhD at Stanford University focused on biomarkers of aging and neurodegeneration.
                My fellowship at EMBL Heidelberg focused on computer vision and high-throughput functional genomics.
                Current research interests include aging biomarkers, anti-aging therapeutics, neuromodulation, and AI science agents.
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
                I advise investors in longevity biotechnology and neuroscience. Science, business, fundraising, clinical, and regulatory. Experience advising on small molecules, biologics, cell therapies, gene therapies, RNA medicine, medical devices, and diagnostics.
              </p>
              <a href="/investments" className="inline-block mt-4 text-indigo-600 hover:text-indigo-700 transition-colors">
                Some companies I like →
              </a>
            </section>
          </div>

          <section className="mb-20">
            <h2 className="text-lg font-medium text-gray-800 mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="https://www.washingtonpost.com/wellness/2024/11/25/longevity-organ-aging-disease/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[1.85/1] relative">
                  <img
                    src="../images/washpost.jpg"
                    alt="Washington Post article thumbnail"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-400 mb-1 block">The Washington Post</span>
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 line-clamp-2 mb-2">
                    Inside your body, aging unfolds at remarkably different rates
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    Discussion of my latest research on organ aging biomarkers.
                  </p>
                </div>
              </a>

              <a 
                href="https://www.bloomberg.com/news/articles/2024-11-11/crypto-millionaire-fuels-push-to-transform-brain-research" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[1.85/1] relative">
                  <img
                    src="../images/Fickel_1.jpg"
                    alt="Bloomberg article thumbnail"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-400 mb-1 block">Bloomberg</span>
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 line-clamp-2 mb-2">
                    How a Winning Bet on Crypto Could Transform Brain and Longevity Science
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    Features my work with The Amaranth Foundation.
                  </p>
                </div>
              </a>

              <a 
                href="https://www.nature.com/articles/s41586-023-06802-1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[1.85/1] relative">
                  <img
                    src="../images/7990.png"
                    alt="Nature article thumbnail"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-400 mb-1 block">Nature</span>
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 line-clamp-2 mb-2">
                    On The Cover: Internal Clocks
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    My method to measure biological aging of organs with a blood test.
                  </p>
                </div>
              </a>
            </div>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Feel free to reach out to discuss research collaborations or investment opportunities.
            </p>
            <a href="/contact" className="inline-block mt-2 text-indigo-600 hover:text-indigo-700 transition-colors">
              Get in touch →
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}