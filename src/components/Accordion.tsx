'use client'

import { useState } from 'react'

import ArrowDown from '@/assets/icons/arrow-down.svg'
import ArrowUp from '@/assets/icons/arrow-up.svg'
import { cn } from '@/utils/cn'

interface Props {
  expanded?: boolean
  title: string
  children: React.ReactNode
}

export const Accordion = ({ expanded = false, title, children }: Props) => {
  const [expand, setExpand] = useState(expanded)

  return (
    <div className={cn('border-b md:py-[24px] py-[18px]', expand ? 'border-[#1c1c1c50]' : 'border-[#1c1c1c]')}>
      <button
        className="flex items-center justify-between w-full font-bold text-left cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <h6>{title}</h6>
        <div className="shrink-0 md:w-[16px] w-[12px]">
          {expand && <ArrowUp className="md:w-[16px] md:h-[9px] w-[12px] h-[6px]" />}
          {!expand && <ArrowDown className="md:w-[16px] md:h-[9px] w-[12px] h-[6px]" />}
        </div>
      </button>
      {expand && <div className="text-body md:mt-[16px] mt-[12px]">{children}</div>}
    </div>
  )
}
