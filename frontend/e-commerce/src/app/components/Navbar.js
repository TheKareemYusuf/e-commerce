import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          E-Commerce Store
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-blue-200">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}