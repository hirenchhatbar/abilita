import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hiren Chhatbar',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="flex flex-col h-screen">

        <header className="py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="font-bold text-4xl">hc</Link>
            <nav className="flex flex-row gap-x-10 justify-end">
              <Link href="/" className="flex flex-row">
                <Image
                  src="/home.svg"
                  width={25}
                  height={25}
                  alt="Hiren Chhatbar"
                  className="pr-1"
                />

                Home
              </Link>

              <Link href="/about" className="flex flex-row">
                <Image
                  src="/about.svg"
                  width={25}
                  height={25}
                  alt="Hiren Chhatbar"
                  className="pr-1"
                />

                About
              </Link>

              <Link href="/experience" className="flex flex-row">
                <Image
                  src="/experience.svg"
                  width={25}
                  height={25}
                  alt="Hiren Chhatbar"
                  className="pr-1"
                />

                Experience
              </Link>

              <Link href="/portfolio" className="flex flex-row">
                <Image
                  src="/portfolio.svg"
                  width={25}
                  height={25}
                  alt="Hiren Chhatbar"
                  className="pr-1"
                />

                Portfolio
              </Link>

              <Link href="/contact" className="flex flex-row">
                <Image
                  src="/contact.svg"
                  width={25}
                  height={25}
                  alt="Hiren Chhatbar"
                  className="pr-1"
                />

                Contact
              </Link>


            </nav>
          </div>
        </header>

        {children}

        <footer className="w-full py-4">
          <div className="container mx-auto text-center text-sm">
            <p>Copyright © 2023 <Link href="/" className="font-bold">Hiren Chhatbar</Link> All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
