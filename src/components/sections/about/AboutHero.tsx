// src/components/sections/AboutHero.tsx

export const AboutHero = () => {
  return (
    <div 
      className="relative mb-12 
        h-[40vh]          /* Adjust height here - options:
                            h-[30vh] - shorter
                            h-[40vh] - medium
                            h-[50vh] - taller
                            or use fixed height:
                            h-[400px] */
        min-h-[250px]     /* Minimum height on small screens */
      "
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/images/pano1.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',  /* Adjust image position - options:
                                            '50% 0%'   - top
                                            '50% 50%'  - center
                                            '50% 100%' - bottom
                                            '0% 50%'   - left
                                            '100% 50%' - right */
          backgroundAttachment: 'scroll',   /* Enable parallax effect
                                             this is buggy right now
                                            'scroll' - normal (no parallax)
                                            'fixed'  - parallax effect */
        }}
      />
      <div 
        className="absolute inset-0 bg-white/30"  /* Adjust overlay opacity - options:
                                                    bg-white/30 - more transparent
                                                    bg-white/50 - medium
                                                    bg-white/70 - more opaque */
      />
    </div>
  );
};