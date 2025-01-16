import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    (<nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">CineTix</Link>
        <div className="space-x-4">
          <Button variant="ghost">Movies</Button>
          <Button variant="ghost">Cinemas</Button>
          <Button variant="ghost">Offers</Button>
          <Button variant="default">Sign In</Button>
        </div>
      </div>
    </nav>)
  );
}

