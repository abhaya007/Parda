import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CineTix - Book Your Movie Experience',
  description: 'Book tickets for the latest movies with CineTix',
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en" className="dark">
      <body className={inter.className}>
         <Navbar />
        {children}
      </body>
    </html>)
  );
}

