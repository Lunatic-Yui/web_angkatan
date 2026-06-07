'use client'

import React, { useEffect } from 'react'

import Image from 'next/image'

import Instagram from '@/components/atoms/button/InstagramButtonLink'
import LinkedInButtonLink from '@/components/atoms/button/LinkedInButtonLink'
import SpotifyEmbed from '@/components/molecules/SpotifyEmbed'

import ProfileImage from './image.png'

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
    // PADA BAGIAN INI KAMU BOLEH MENGUBAH STYLE SESUKA HATI KAMU, TAPI JANGAN UBAH STRUKTUR DAN FUNGSI DARI KODE INI AGAR FUNGSI POPUP TETAP BERJALAN DENGAN BAIK
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 pt-28 pb-8 sm:pt-32">
      <button
        type="button"
        aria-label="Close member detail"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      <div className="relative z-10 max-h-[calc(100vh-9rem)] w-full max-w-[720px] animate-[member-popup-show_200ms_ease-out] overflow-y-auto rounded-2xl border-2 border-cyan-400 bg-gray-950 p-6 text-white shadow-[0_0_40px_rgba(34,211,238,0.3)] sm:max-h-[calc(100vh-10rem)] sm:p-8">
        

        <button
          type="button"
          aria-label="Close member detail"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400 text-xl leading-none text-cyan-400 transition-all hover:bg-cyan-400/20 hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]"
        >
          x
        </button>

        {/* Foto profil dengan border neon */}
        <div className="mb-5 overflow-hidden rounded-2xl border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
          <Image src={ProfileImage} alt="Profile Image" className="h-120 w-full object-cover object-center" />
        </div>

        <div className="pr-10">
          {/* UBAH NAMA ANDA */}
          <h2 className="text-2xl font-black tracking-wider text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">Naoval James Osamah</h2>
          {/* UBAH NRP DAN ASAL */}
          <p className="mt-1 text-sm font-semibold text-cyan-500/70">5027251092 - Jombang</p>
        </div>

        <div className="mt-5 flex gap-2">
          {/* UBAH USERNAME INSTAGRAM */}
          <Instagram username="naovaljo" />
          {/* UBAH USERNAME LINKEDIN */}
          <LinkedInButtonLink username="Naoval James" />
        </div>

        <div className="mt-6 grid gap-4 text-sm font-semibold sm:grid-cols-2">
          <div className="rounded-xl border border-cyan-400/40 bg-cyan-950/30 p-4 shadow-[inset_0_0_12px_rgba(34,211,238,0.05)]">
            {/* UBAH HOBI KAMU */}
            <p className="text-xs uppercase tracking-widest text-cyan-400">Hobi</p>
            <p className="mt-2 text-white">Tidur</p>
          </div>
          <div className="rounded-xl border border-cyan-400/40 bg-cyan-950/30 p-4 shadow-[inset_0_0_12px_rgba(34,211,238,0.05)]">
            {/* UBAH FUNFACT KAMU */}
            <p className="text-xs uppercase tracking-widest text-cyan-400">Fun Fact</p>
            <p className="mt-2 text-white">Pernah push rank mobile legends waktu sistem rank masih points sampai 3111 points</p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-950/30 p-4 shadow-[inset_0_0_12px_rgba(34,211,238,0.05)]">
          {/* UBAH LAGU FAVORIT KAMU */}
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Lagu Favorit</p>
          <p className="my-2 text-sm font-semibold text-white">Linger</p>

          {/* UBAH URL SPOTIFY KAMU DENGAN LAGU FAVORIT MU */}
          <SpotifyEmbed spotifyUrl="https://open.spotify.com/track/3HHehSGzW9dhs2V7Sod4jX?si=xj9AzfCPQsm3xYp5MVkJMQ" />
        </div>
      </div>
    </div>
  )
}

export default MemberPopup
