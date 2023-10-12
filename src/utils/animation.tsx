import { useEffect, useState } from 'react'

export const ThreeDots = () => {
  const [n, setN] = useState(1)
  useEffect(() => {
    setTimeout(() => {
      if (n === 3) {
        setN(1)
      } else {
        setN(n + 1)
      }
    }, 500)
  })

  return <>{'.'.repeat(n)}</>
}
