'use client'

import { useState } from 'react'

import Link from 'next/link'

import Hamburger from '@/assets/icons/burger-menu.svg'
import Sparcles from '@/assets/icons/sparcles-white.svg'
import WikitensorLogo from '@/assets/icons/wikitensor-logo-2bit.svg'

export const LandingPageHeader = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <header className="bg-gray-light">
      <div className="container">
        <div className="flex justify-between items-center md:h-[82px] h-[62px]">
          <Link href="/">
            <WikitensorLogo className="md:w-[188px] md:h-[36px] w-[141px] h-[27px]" />
          </Link>
          <div className="md:flex hidden md:gap-[60px] md:text-[15px] font-medium">
            <Navs />
          </div>
          <div className="hidden md:block">
            <SearchWithAIButton />
          </div>
          <div className="block md:hidden">
            <button onClick={() => setMenuOpened(!menuOpened)}>
              <Hamburger className="w-[30px] h-[30px]" />
            </button>
          </div>
        </div>
        {menuOpened && (
          <div className="flex flex-col items-start gap-d-16 py-[20px] text-[16px]">
            <Navs />
            <div className="mt-[15px]">
              <SearchWithAIButton />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

const Navs = () => (
  <>
    <Link href="/terms">Terms of use</Link>
    <Link href="/privacy">Privacy Policy</Link>
    <Link href="/faq">FAQ</Link>
    <Link href={process.env.NEXT_PUBLIC_NORTHTENSOR_URL || '#'}>Powered by North Tensor</Link>
  </>
)

const SearchWithAIButton = () => (
  <Link
    href="/"
    className="flex items-center gap-d-10 md:p-[22px] p-[16px] bg-gray-dark rounded-full font-medium leading-none text-white"
  >
    <Sparcles className="md:w-[19px] md:h-[20px] w-[15px] h-[15px]" />
    Search with AI
  </Link>
)
