'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import WikitensorLogoIcon from '@/assets/icons/wikitensor-logo-gradient.svg'
import { api } from '@/axios'
import { PromptInput } from '@/components/PromptInput'
import { ThreeDots } from '@/utils/animation'

const App = () => {
  const router = useRouter()
  const [generatingRandomArticle, setGeneratingRandomArticle] = useState<boolean>(false)

  const handleGenerateRandomArticle = async () => {
    setGeneratingRandomArticle(true)

    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/random/title?format=title`)
    const json = await res.json()

    if (json && json.items && json.items.length > 0) {
      const title = json.items[0].title.replaceAll('_', ' ')

      const {
        data: { article_id }
      } = await api.post(`api/article`, { topic: title, source: 'bittensor' })

      setGeneratingRandomArticle(false)

      let articleId

      if (article_id) {
        if (Array.isArray(article_id)) {
          articleId = article_id[0].article_id
        } else {
          articleId = article_id
        }

        router.push(`/articles/${articleId}`)
      }
    }
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
          <Link href="/privacy">
            <p>Privacy Policy</p>
          </Link>
          <div className="w-[1px] md:h-[14px] h-[10px] shrink-0 bg-black"></div>
          <Link href="/terms">
            <p>Terms of Services</p>
          </Link>
          <div className="w-[1px] md:h-[14px] h-[10px] shrink-0 bg-black"></div>
          <Link href="/faq">
            <p>FAQ</p>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default App
