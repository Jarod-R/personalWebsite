'use client';

export const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-indigo-50 to-sky-50">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-diagonal-pattern opacity-[0.3]"></div>
        {children}
      </div>
    </div>
  );
};

