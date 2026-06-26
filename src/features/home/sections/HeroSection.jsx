import { useState } from 'react'
import heroBg from '@/assets/herobg.png'
import pauseIcon from '@/assets/icons/PauseIcon.png'
import soundIcon from '@/assets/icons/soundIcon.png'

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section className="relative h-[calc(100svh-4rem)] w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Mermaids beauty hero"
          className="absolute left-1/2 w-full max-w-none -translate-x-1/2 object-cover"
          style={{
            height: '130%',
            top: '-16%',
          }}
        />
      </div>

      <div className="relative flex h-full items-center justify-center">
        <h1 className="font-logo text-5xl tracking-logo text-white sm:text-7xl lg:text-8xl">
          MERMAIDS
        </h1>
      </div>

      <div className="absolute bottom-8 left-8">
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-label={isPaused ? 'Play' : 'Pause'}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <img src={pauseIcon} alt="" className="size-8 sm:size-9" />
        </button>
      </div>

      <div className="absolute right-8 bottom-8">
        <button
          type="button"
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <img src={soundIcon} alt="" className="size-8 sm:size-9" />
        </button>
      </div>
    </section>
  )
}
