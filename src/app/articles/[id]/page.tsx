'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import RefreshIcon from '@/assets/icons/refresh.svg'
import WikitensorFavIcon from '@/assets/icons/wikitensor-fav.svg'
import WikitensorLogoIcon from '@/assets/icons/wikitensor-logo-white.svg'
import { Search } from '@/components/search'
import { supabase } from '@/supabase'

interface Props {
  params: { id: string }
}

const Index = ({ params: { id } }: Props) => {
  const [article, setArticle] = useState<any>()

  const get = async () => {
    const { data } = await supabase.from('articles').select().eq('article_id', id).single()

    if (data.article_content.length > 0) {
      const new_article_content = data.article_content.map((el: any) => ({
        ...el,
        id: `section-${Math.random().toString(36).substring(2, 20)}`
      }))
      setArticle({ ...data, article_content: new_article_content })
    }
  }

  const scrollToText = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    get()

    supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'articles'
        },
        (payload) => {
          if (payload.new.article_id.toString() === id) get()
        }
      )
      .subscribe()
  }, [])

  return (
    <div className="flex md:flex-row md:gap-[30px] gap-[23px] flex-col min-h-screen bg-white">
      <div className="md:block hidden md:max-w-[400px] w-full shrink-0"></div>
      <div className="flex flex-col md:fixed static md:max-w-[400px] w-full md:h-screen h-auto shrink-0 bg-gray-dark text-white">
        <div className="md:pl-[61px] pl-[46px] md:py-[21px] py-[16px] md:pr-[20px] pr-[15px]">
          <Link href="/">
            <WikitensorLogoIcon className="md:w-[189px] md:h-[36px] w-[141px] h-[27px]" />
          </Link>
        </div>

        <div className="w-full h-[1px] bg-gray-light"></div>
        <div className="flex flex-col md:gap-[38px] gap-[28px] md:pl-[61px] pl-[46px] md:py-[54px] py-[40px] md:pr-[20px] pr-[15px] overflow-y-auto slick-scroll">
          <h6 className="font-bold">In this article</h6>
          {article &&
            article.article_content.map((section: any, index: number) => (
              <div key={index} className="cursor-pointer text-body-lg" onClick={() => scrollToText(section.id)}>
                {section['Section Title']}
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col grow md:px-[30px] px-[27px] md:py-[22px] py-[16px]">
        <div className="flex md:flex-row flex-col md:gap-[22px] gap-[17px] md:mb-[40px] mb-[30px]">
          <Search containerClassName="grow" />
          <div className="md:py-[10px] py-[8px]">
            <button className="flex items-center md:gap-[8px] gap-[4px] md:px-[22px] px-[17px] md:py-[25px] py-[19px] rounded-full font-medium bg-gray-light">
              <RefreshIcon className="md:w-[17px] w-[13px] md:h-[20px] h-[15px]" />
              Regenerate
            </button>
          </div>
        </div>

        {article.generation_status === 'generating' && <div className="md:mb-[8px] mb-[6px]">(Generating...)</div>}
        {article && (
          <div className="grow bg-gray-light md:p-[22px] p-[17px] md:rounded-xl rounded-lg border border-solid border-[#D1D5DB]">
            <div className="relative">
              <WikitensorFavIcon className="absolute left-0 top-0 md:w-[30px] w-[23px] md:h-[30px] h-[23px]" />
              <div className="flex md:pl-[54px] pl-[40px] md:mb-[24px] mb-[18px] md:gap-[4px] gap-[3px] capitalize md:leading-[30px] leading-[23px]">
                <div className="font-bold">Title:</div>
                <div>{article.article_title}</div>
              </div>
              <div className="flex flex-col md:pl-[54px] pl-[0] md:gap-[16px] gap-[12px] md:leading-[32px] leading-[24px]">
                {article.article_content.map((section: any, index: number) => (
                  <div key={index} id={section.id}>
                    <div className="font-bold">{section['Section Title']}</div>
                    <div>{section.Response}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Index
