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
                        <h2>Tenho 25 anos e sou graduando nos cursos de Direito e Análise e Desenvolvimento de Sistemas. Atualmente, trabalho com softwares de gestão administrativa para órgãos públicos, ocupando o cargo de consultor técnico.</h2>
                    </div>
                    

                    <span>
                        <motion.div variants={slideUp} initial="initial" animate="enter" className={styles.containerImage}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/about_image_example.jpeg`}
                            />
                        </motion.div>
                    </span>

                </div>

                <div className={styles.containerSecondSection} ref={ref}>

                    <span
                        style={{
                            transform: isInView ? "none" : "translateY(-50px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                        }}>
                        <div className={styles.title}>
                            <h2>Áreas de interesse</h2>
                        </div>
                    </span>


                    <div className={styles.containerCard}>

                        <div className={styles.firstInterestTopics}>

                            <span
                                style={{
                                    transform: isInView ? "none" : "translateX(-50px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}>
                                <div className={styles.card}>
                                    <div className={styles.headerCard}>
                                        <p>01</p>
                                    </div>
                                    <div className={styles.titleCard}>
                                        <h3>Compliance</h3>
                                    </div>
                                    <div className={styles.articleCard}>
                                        <p>O interesse em atuar com compliance surge pela admiração a integridade empresarial e o desejo de contribuir para práticas éticas e conformidade regulatória.</p>
                                    </div>
                                </div>
                            </span>

                            <span
                                style={{
                                    transform: isInView ? "none" : "translateX(-50px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                                }}>
                                <div className={styles.card}>
                                    <div className={styles.headerCard}>
                                        <p>02</p>
                                    </div>
                                    <div className={styles.titleCard}>
                                        <h3>Tributário</h3>
                                    </div>
                                    <div className={styles.articleCard}>
                                        <p>O dejeso de aprofundar meu conhecimento e atuar no ramo do direito tributário tem como intuíto assegurar que empresas cumpram as leis fiscais e otimizem sua carga tributária de forma legal.</p>
                                    </div>
                                </div>
                            </span>

                        </div>

                        <div className={styles.secondInterestTopics}>

                            <span
                                style={{
                                    transform: isInView ? "none" : "translateX(-50px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                                }}>
                                <div className={styles.card}>
                                    <div className={styles.headerCard}>
                                        <p>03</p>
                                    </div>
                                    <div className={styles.titleCard}>
                                        <h3>Developer</h3>
                                    </div>
                                    <div className={styles.articleCard}>
                                        <p>Minha atuação na programação começou com a manipulação de dados, levando à graduação em Análise e Desenvolvimento de Sistemas e ao desenvolvimento front end.</p>
                                    </div>
                                </div>
                            </span>

                            <span
                                style={{
                                    transform: isInView ? "none" : "translateX(-50px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                                }}>
                                <div className={styles.card}>
                                    <div className={styles.headerCard}>
                                        <p>04</p>
                                    </div>
                                    <div className={styles.titleCard}>
                                        <h3>Banco de Dados</h3>
                                    </div>
                                    <div className={styles.articleCard}>
                                        <p>Minha expertise e interesse em manipulação e administração de dados surge da migração e conversão de softwares utilizados na gestão pública.</p>
                                    </div>
                                </div>
                            </span>

                        </div>

                    </div>
                </div>
            </div>
        </motion.main>
    )
}
