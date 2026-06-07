'use client'

import React, { useEffect } from 'react'

import Image from 'next/image'

import Instagram from '@/components/atoms/button/InstagramButtonLink'
import LinkedInButtonLink from '@/components/atoms/button/LinkedInButtonLink'
import SpotifyEmbed from '@/components/molecules/SpotifyEmbed'

import ProfileImage from './image.jpeg'

type MemberPopupProps = {
  isOpen: boolean
  onClose: () => void
}

const MemberPopup = ({ isOpen, onClose }: MemberPopupProps) => {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

return (
  <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_2px,_transparent_2px)] [background-size:28px_28px] px-4 pt-28 pb-8 sm:pt-32">
    
    <button
      type="button"
      aria-label="Close member detail"
      onClick={onClose}
      className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
    />

    <div className="relative z-10 w-full max-w-[720px] max-h-[calc(100vh-9rem)] overflow-y-auto rounded-[16px] border-[6px] border-black bg-[#F6F2EA] p-6 text-black shadow-[14px_14px_0px_#D6D0C8] animate-[member-popup-show_200ms_ease-out] sm:p-8">

      {/* dekor bulatan lego */}
      <div className="pointer-events-none absolute top-3 right-5 flex gap-2">
        {[1,2,3,4].map((i)=>(
          <div
            key={i}
            className="h-5 w-5 rounded-full bg-[#E7C36B] border-2 border-black shadow-[2px_2px_0px_#000]"
          />
        ))}
      </div>

      <button
  type="button"
  aria-label="Close member detail"
  onClick={onClose}
  className="group absolute top-5 left-5"
>
  <div className="flex gap-3">

    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF5F57] shadow-[0_2px_8px_rgba(0,0,0,0.25)] ring-1 ring-black/10 transition hover:scale-110">
      <span className="text-[10px] font-bold text-black opacity-0 transition group-hover:opacity-100">
        ×
      </span>
    </span>

    <span className="h-5 w-5 rounded-full bg-[#FEBC2E] shadow-[0_2px_8px_rgba(0,0,0,0.25)] ring-1 ring-black/10 transition hover:scale-110" />

    <span className="h-5 w-5 rounded-full bg-[#28C840] shadow-[0_2px_8px_rgba(0,0,0,0.25)] ring-1 ring-black/10 transition hover:scale-110" />

  </div>
</button>

      <div className="mt-4 mb-6 overflow-hidden rounded-xl border-[5px] border-black bg-white shadow-[6px_6px_0px_#000]">
        <Image
          src={ProfileImage}
          alt="Profile Image"
          className="h-[480px] w-full object-cover"
        />
      </div>

      <div className="pr-10">
        <h2 className="text-4xl font-black uppercase tracking-tight text-red-600 drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]">
          Dafa Ridho Zhafif
        </h2>

        <p className="mt-2 inline-block rounded-md border-[3px] border-black bg-blue-500 px-3 py-1 text-sm font-bold text-white">
          5027251129 • Jakarta
        </p>
      </div>

      <div className="mt-6 flex gap-4">

  <div className="rounded-xl border-[4px] border-black bg-[#E1306C] p-1 shadow-[5px_5px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
    <Instagram username="dafazhf" />
  </div>

  <div className="rounded-xl border-[4px] border-black bg-[#0A66C2] p-1 shadow-[5px_5px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
    <LinkedInButtonLink username="dafa-zhafif-0626b3379" />
  </div>

</div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">

        <div className="rounded-xl border-[4px] border-black bg-red-500 p-5 text-white shadow-[6px_6px_0px_#000]">
          <p className="text-xs font-black uppercase [text-shadow:0_2px_4px_rgba(0,0,0,0.25)]">
            Hobi
          </p>

          <p className="mt-3 text-lg font-bold [text-shadow:0_3px_6px_rgba(0,0,0,0.22)]">
            Otomotif<br />
            Musik
          </p>
        </div>

        <div className="rounded-xl border-[4px] border-black bg-blue-500 p-5 text-white shadow-[6px_6px_0px_#000]">
          <p className="text-xs font-black uppercase [text-shadow:0_2px_4px_rgba(0,0,0,0.25)]">
            Fun Fact
          </p>

          <p className="mt-3 text-lg font-bold [text-shadow:0_3px_6px_rgba(0,0,0,0.22)]">
            Ga bisa kena asap rokok
          </p>
        </div>

      </div>

      <div className="mt-5 rounded-xl border-[5px] border-black bg-green-500 p-5 text-white shadow-[8px_8px_0px_#000]">

        <p className="text-xs font-black uppercase [text-shadow:0_2px_4px_rgba(0,0,0,0.25)]">
          Lagu Favorit
        </p>

        <p className="my-3 text-xl font-black [text-shadow:0_4px_8px_rgba(0,0,0,0.28)]">
          Egosentris
        </p>

        <div className="rounded-lg overflow-hidden">
          <SpotifyEmbed spotifyUrl="https://open.spotify.com/track/5rDlgdli7szsCEtipq96Mh?si=f04fc7fa50024b53" />
        </div>

      </div>
    </div>
  </div>
)
}

export default MemberPopup