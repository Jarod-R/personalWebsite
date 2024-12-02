// src/components/layout/Navigation.tsx

interface NavItem {
  href: string;
  label: string;
}

export default function Navigation() {
  const navItems: NavItem[] = [
    { href: '/about', label: 'About' },
    { href: '/research', label: 'Research' },
    { href: '/investments', label: 'Investments' },
    { href: '/free_ideas', label: 'Free Ideas' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

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
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-500 hover:text-gray-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}