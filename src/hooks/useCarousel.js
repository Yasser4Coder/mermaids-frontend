import { useCallback, useState } from 'react'

export function useCarousel(length, autoPlayMs = 0) {
  const [index, setIndex] = useState(0)

  const goToNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % length)
  }, [length])

  const goToPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + length) % length)
  }, [length])

  const goTo = useCallback(
    (nextIndex) => {
      setIndex(nextIndex % length)
    },
    [length],
  )

  return { index, goToNext, goToPrev, goTo }
}
