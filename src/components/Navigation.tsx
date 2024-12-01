export default function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 top-0 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Jarod Rutledge
            </a>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="/research" className="text-gray-500 hover:text-gray-700">Research</a>
            <a href="/investments" className="text-gray-500 hover:text-gray-700">Investments</a>
            <a href="/investments" className="text-gray-500 hover:text-gray-700">Free Ideas</a>
            <a href="/blog" className="text-gray-500 hover:text-gray-700">Blog</a>
            <a href="/contact" className="text-gray-500 hover:text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
