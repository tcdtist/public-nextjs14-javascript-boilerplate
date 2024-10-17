'use client'

import Image from 'next/image'

import { Assets } from '@/constants/assets'

const Logo = () => (
  <Image
    src={Assets.COMMON.LOGO}
    className="object-contain"
    alt="Application Logo"
    height={50}
    width={50}
  />
)

const Header = () => (
  <header className="absolute left-0 top-0 z-10 w-full bg-white bg-opacity-90">
    <div className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="text-xl font-semibold">Chi Thanh Dang (tist)</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://github.com/tcdtist"
              className="hover:text-[#3498db]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://blog.tcdtist.com"
              className="hover:text-[#3498db]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://x.com/tcdtist"
              className="hover:text-[#3498db]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

const HeroSection = () => (
  <section className="animate-gradient-x flex min-h-screen items-center justify-center bg-gradient-to-r from-[#3498db] to-[#f1c40f]">
    <div className="text-center">
      <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">Hello World! 🐣🐣</h2>
      <button className="rounded-full bg-[#f1c40f] px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-opacity-90">
        Let&lsquo;s Guuuu
      </button>
    </div>
  </section>
)

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
    </div>
  )
}

export default HomePage
