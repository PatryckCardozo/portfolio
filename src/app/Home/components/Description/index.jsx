import styles from './style.module.scss';
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { slideUp, opacity } from './animation';
import Rounded from '../../../../common/RoundedButton';

import {
  Inter,
  Manrope,
  Poppins,
  Quicksand,
  Roboto,
  Urbanist,
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100', '200', '300', '400', '500',
    '600', '700', '800', '900',
  ],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function Index() {

    const direito = "Direito &";
    const analise = "Análise &";
    const devSist = "Desenvolvimento de Sistemas."
    const phrase = "Unindo expertise jurídica e proficiência em softwares e desenvolvimento para criar impactos significativos.";
    const description = useRef(null);
    const isInView = useInView(description)
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })


    const y = useTransform(scrollYProgress, [0, 1], [600, -800])

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.title}>
                <h2>
                    {
                        direito.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </h2>
                <h2>
                    {
                        analise.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </h2>
                <h2>
                    {
                        devSist.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </h2>
            </div>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>A fusão da experiência tecnológica ao conhecimento jurídico me proporciona uma perspectiva singular na busca por soluções.</motion.p>

                <Link href="/About">
                    <div>
                        <motion.div style={{ y }} className={styles.buttonContainer}>
                            <Rounded className={styles.button}>
                                <p className={manrope.className}>Perfil</p>
                            </Rounded>
                        </motion.div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
