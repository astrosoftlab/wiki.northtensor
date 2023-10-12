'use client'

import { useRef, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import SparclesIcon from '@/assets/icons/sparcles.svg'
import { api } from '@/axios'
import { supabase } from '@/supabase'
import { ThreeDots } from '@/utils/animation'
import { cn } from '@/utils/cn'

interface Props {
  containerClassName?: string
}

export const PromptInput = ({ containerClassName }: Props) => {
  const [articles, setArticles] = useState<any[]>([])
  const [generating, setGenerating] = useState<boolean>(false)

  let timer: any
  const router = useRouter()
  const ref = useRef<any>(null)

  const search = async (keyword: string) => {
    if (keyword) {
      const adaptedKeyword = `'${keyword}'`
      const { data } = await supabase.from('articles').select().textSearch('article_title', adaptedKeyword)
      if (data && data.length > 0) {
        setArticles(data)
      } else {
        setArticles([])
      }
    } else {
      setArticles([])
    }
  }

  const handleKeywordChange = (keyword: string) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      search(keyword)
    }, 300)
  }

  const handleGenerate = async () => {
    if (ref.current) {
      setGenerating(true)
      const {
        data: { article_id }
      } = await api.post(`api/article`, { topic: ref.current.value, source: 'bittensor' })
      setGenerating(false)

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
    <div className={cn('relative', containerClassName)}>
      <div className="flex md:gap-[12px] gap-[9px] rounded-full shadow-input md:p-[10px] p-[8px]">
        <input
          ref={ref}
          type="text"
          placeholder="Enter to get creative article..."
          className="grow md:px-[24px] px-[18px] md:py-[23px] py-[18px] font-medium rounded-full bg-gray-light placeholder:text-black"
          defaultValue=""
          onChange={(e) => handleKeywordChange(e.target.value)}
        />
        <button
          className="flex justify-center items-center md:w-[70px] w-[60px] md:h-[70px] h-[60px] rounded-full bg-gray-light"
          onClick={handleGenerate}
        >
          {generating ? <ThreeDots /> : <SparclesIcon className="md:w-[34px] w-[26px] md:h-[36px] h-[27px]" />}
        </button>
      </div>
      {articles.length > 0 && (
        <div className="absolute md:mt-[8px] mt-[6px] z-10 md:rounded-2xl rounded-xl w-full bg-white shadow-input overflow-hidden">
          {articles.map((article, index) => (
            <Link
              href={`/articles/${article.article_id}`}
              key={index}
              className="block md:px-[32px] px-[24px] md:py-[16px] py-[12px] capitalize hover:bg-gray-light"
            >
              {article.article_title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
