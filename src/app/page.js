'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import { GoogleFonts } from 'next-google-fonts';
import Preloader from './Home/components/Preloader';
import Landing from './Home/components/Landing';
import Projects from './Home/components/Projects';
import Description from './Home/components/Description';
import SlidingImages from './Home/components/SlidingImages';
import Contact from './Home/components/Contact';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
      <Analytics />
    </main>
  )
}
