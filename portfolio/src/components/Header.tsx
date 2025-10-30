// src/components/Header.tsx
// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    // Updated background and text colors
    <header className="bg-slate-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Jecinta.dev
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link></li>
          <li><Link href="/projects" className="hover:text-yellow-400 transition-colors">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;