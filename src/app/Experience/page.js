'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import { GoogleFonts } from 'next-google-fonts';
import Description from './components/Description';
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import { Analytics } from "@vercel/analytics/react"


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Description />
      <Projects />
      <Contact />
      <Analytics />
    </main>
  )
}
