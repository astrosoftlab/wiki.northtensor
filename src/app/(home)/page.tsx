'use client'

import { useState } from 'react'

import Link from 'next/link'

import WikitensorLogoIcon from '@/assets/icons/wikitensor-logo-gradient.svg'
import { PromptInput } from '@/components/promptInput'
import { ThreeDots } from '@/utils/animation'

const App = () => {
  const [generatingRandomArticle, setGeneratingRandomArticle] = useState<boolean>(false)

  const handleGenerateRandomArticle = () => {
    setGeneratingRandomArticle(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className=""></header>
      <main className="flex items-center justify-center p-[10px] grow">
        <div className="flex flex-col items-center md:pb-[160px] pb-[120px]">
          <WikitensorLogoIcon className="md:w-[482px] w-[362px] md:h-[92px] h-[70px] md:mb-[32px] mb-[24px]" />
          <PromptInput containerClassName="md:w-[672px] w-full md:mb-[15px] mb-[11px]" />
          <div className="flex flex-1 font-medium grow w-full justify-start gap-[2px] md:pl-[34px] pl-[25px]">
            {generatingRandomArticle && (
              <p>
                Generating
                <ThreeDots />
              </p>
            )}
            {!generatingRandomArticle && (
              <>
                <p>No idea?</p>
                <button onClick={handleGenerateRandomArticle} className="underline">
                  <p>Generate random article</p>
                </button>
              </>
            )}
          </div>
        </div>
      </main>
      <footer className="py-4 font-medium text-center">
        <p>&copy; {new Date().getFullYear()} Wikitensor. All rights reserved.</p>
        <div className="relative flex justify-center items-center md:gap-[4px] gap-[3px]">
          <Link href="#">
            <p>Privacy Policy</p>
          </Link>
          <div className="w-[1px] md:h-[14px] h-[10px] shrink-0 bg-black"></div>
          <Link href="#">
            <p>Terms of Services</p>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default App
