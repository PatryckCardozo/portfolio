'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { inherits } from 'util';
import { slideUp, opacity } from './animation';

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const button = useRef(null);
    const buttonslide = useRef(null);
    const article = useRef(null);
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [280, 600])



    useEffect(() => {
        if (article.current) {
            gsap.to(article.current, {
                scrollTrigger: {
                    trigger: article.current,
                    start: "center bottom",
                    end: "bottom top",
                    scrub: 1,
                    
                },
                y: 100
            });
        }
    }, [article]);


    return (

        <motion.main  >
            <div className={styles.main}>

                <div className={styles.titlePage}>
                    <h1>Um pouco sobre</h1>
                    <h1>Patryck Cardozo</h1>

                    <Link href="/Contact">
                        <motion.div ref={button} className={styles.buttonContainer}>

                            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                                <p>Olá</p>
                            </Rounded>

                        </motion.div>
                    </Link>
                </div>

                <div className={styles.containerFirstSection}>

                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="black" />
                    </motion.svg>
                    
                    
                    <div ref={article} className={styles.article}>
                        <h2>Olá, meu nome é Patryck.</h2>
                        <h2>Tenho 27 anos e sou graduado em Análise e Desenvolvimento de Sistemas, além de estar em fase de conclusão da graduação em Direito. Atualmente, atuo como Desenvolvedor Full Stack, trabalhando no desenvolvimento e na manutenção de softwares de gestão administrativa voltados para órgãos públicos.</h2>
                    </div>
                    

                    <span>
                        <motion.div variants={slideUp} initial="initial" animate="enter" className={styles.containerImage}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/Patryck_1.jpg`}
                            />
                        </motion.div>
                    </span>

                </div>
            </div>
        </motion.main>
    )
}
