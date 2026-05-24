'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

// PERBAIKAN PATH: Gunakan path public agar tidak error "Module not found"
const HeroLogo = "/assets/images/logo/herologo.png"

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative flex w-full items-center justify-center overflow-hidden bg-blue-cs-40 text-neutral-cs-10"
    >
      {/* 1. LAYER VIDEO: Tanpa z-index (Otomatis paling bawah) */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/videos/starrynight.mp4" type="video/mp4" />
      </video>

      {/* 2. LAYER OVERLAY: Tanpa z-index (Otomatis di atas video berdasarkan DOM) */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-cs-30/20 to-blue-cs-40" 
        aria-hidden="true" 
      />
      
      {/* 3. LAYER KONTEN: Cukup z-10 agar di atas background, sangat aman untuk Navbar */}
      <div className="relative z-10 flex min-h-[640px] w-full max-w-[1260px] flex-col items-center gap-10 px-6 py-24 text-center sm:px-10 lg:min-h-[916px] lg:gap-[52px] lg:px-[90px] lg:py-[136px]">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={HeroLogo}
            alt="Evastra logo"
            width={514}
            height={393}
            className="h-auto w-[220px] sm:w-[320px] lg:w-[514px]"
            priority
          />
          <p className="max-w-[800px] text-lg font-bold leading-8 sm:text-xl lg:text-[28px] lg:leading-[32px]">
            Welcome to A Space to Grow Together.
          </p>
        </div>
        
        <a
          href="#about-us"
          className="inline-flex h-[57px] w-[164px] items-center justify-center rounded-full border-2 border-neutral-cs-10 text-base font-semibold leading-6 text-neutral-cs-10 transition hover:bg-neutral-cs-10/10 sm:text-lg lg:text-lg"
        >
          Explore
        </a>
      </div>
    </section>
  )
}

export default Hero