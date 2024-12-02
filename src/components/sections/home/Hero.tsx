export const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-12 mb-20">
      <div className="space-y-6">
        <h1 className="text-3xl font-normal text-gray-800">
          Hello, I'm Jarod
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          My life's mission is to create a world free of disease and aging. Ambitious, I know, but this is possible. We have existence proofs from nature and the past 30 years of molecular biology, and it may happen sooner than you think. 
          </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am a group leader and the head of investments at The Amaranth Foundation and Starbloom Capital. I completed my Ph.D. at Stanford with additional training at EMBL Heidelberg and Harvard.
        </p>
          <a href="/about" className="inline-block mt-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            More about me here →
          </a>

      </div>
      <div className="flex justify-center items-start">
        <img 
          src="/images/headshot.jpeg" 
          alt="Jarod Rutledge"
          className="rounded-lg shadow-lg w-full max-w-md object-cover"
          style={{
            objectPosition: '20% 20%', // Adjust the crop position
            width: '100%',
            maxWidth: '384px',
            height: '400px',
            objectFit: 'cover',
          }}

        />
      </div>
    </section>
  );
};