'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader'
import Title from './components/Title'
import ThirdSection from './components/ThirdSection'
import SecondSection from './components/SecondSection'
import Contact from '../../../shared/footer'
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
      <Title />
      <SecondSection />
      <ThirdSection />
      <Contact />
      <Analytics />
    </main>
  )
}
