'use client';
import { useLayoutEffect, useRef } from "react";
import styles from './style.module.scss';
import { Inter, Poppins, Quicksand, Roboto, Urbanist } from 'next/font/google'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)
const word = "Desevolvimento de consultas SQL em bancos de dados PostgreSQL, SQL Server e Sybase para a extração e manipulação de dados, garantindo eficiência e precisão. Minha experiência abrange desde a criação de consultas personalizadas até a integração de dados, suportando decisões estratégicas com informações detalhadas e precisas.";

export default function Index() {
    const container = useRef(null);
    const smallcontainer = useRef(null);
    const images = ["images/DBeaver.svg", "images/postgresql.svg", "images/sql-server.svg"];
    const lettersRef = useRef([])
    const imagesRef = useRef([])
    const smallimagesRef = useRef([])
    const title1 = useRef(null);
    const smalltitle1 = useRef(null);
    const title2 = useRef(null);
    const smalltitle2 = useRef(null);
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
                .to(title1.current, { y: -100 }, 0)
                .to(title2.current, { y: 100 }, 0)
                .to(imagesRef.current[1], { y: -100 }, 0)
                .to(imagesRef.current[2], { y: -555 }, 0)

            gsap.to(smallimagesRef.current[1], {
                scrollTrigger: {
                    trigger: '.allcontentsmall',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: .5,

                },
                y: -700
            });


            gsap.to(smallimagesRef.current[2], {
                scrollTrigger: {
                    trigger: '.allcontentsmall',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: .5,

                },
                y: -300
            });

            gsap.to(smalltitle1.current, {
                scrollTrigger: {
                    trigger: '.allcontentsmall',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: .5,

                },
                y: -200
            });

            gsap.to(smalltitle2.current, {
                scrollTrigger: {
                    trigger: '.allcontentsmall',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: .5,
                },
                y: 100,

            });


            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, { top: Math.floor(Math.random() * 75) - 0, }, 1)
            })

        })
        return () => context.revert();
    }, [])

    return (

        <>
            <div className={styles.allcontent}>

                <div className={styles.containerArticle}>
                    <div className={styles.bodyFirstArticle} ref={el => title2.current = el}>
                        <h1 ref={title1}>Database</h1>
                        <p>Desevolvimento de consultas SQL em bancos de dados PostgreSQL, SQL Server e Sybase para a extração e manipulação de dados, garantindo eficiência e precisão. Minha experiência abrange desde a criação de consultas personalizadas até a integração de dados, suportando decisões estratégicas com informações detalhadas e precisas.</p>
                    </div>
                </div>

                <div ref={container} className={styles.container}>
                    <div className={styles.images}>
                        {
                            images.map((image, i) => {
                                return <div key={`i_${i}`} ref={el => imagesRef.current[i] = el} className={styles.imageContainer}>
                                    <Image
                                        src={image}

                                        alt="image"
                                        fill
                                    />
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className={styles.containerArticle}>
                    <div className={styles.bodySecondArticle} ref={el => title1.current = el}>
                        <h1 ref={title1}>Conversão & Migração</h1>
                        <p>Execução de migração e conversão de dados entre sistemas, assegurando integridade e precisão em cada etapa do processo. Minha abordagem inclui análise detalhada dos dados, planejamento meticuloso e utilização de ferramentas avançadas para garantir a consistência e a conformidade com os requisitos do projeto. Com uma sólida compreensão das diferenças entre diversas plataformas e formatos de dados, consigo minimizar riscos e evitar perdas de informações, garantindo uma transição suave e eficiente.</p>
                    </div>
                </div>

            </div>

            <div className={styles.allcontentsmall}>

                <div className={styles.containerArticle}>
                    <div className={styles.bodyFirstArticle} ref={el => smalltitle1.current = el}>
                        <h1 ref={smalltitle1}>Conversão & Migração</h1>
                        <p>Execução de migração e conversão de dados entre sistemas, assegurando integridade e precisão em cada etapa do processo. Minha abordagem inclui análise detalhada dos dados, planejamento meticuloso e utilização de ferramentas avançadas para garantir a consistência e a conformidade com os requisitos do projeto. Com uma sólida compreensão das diferenças entre diversas plataformas e formatos de dados, consigo minimizar riscos e evitar perdas de informações, garantindo uma transição suave e eficiente.</p>
                    </div>
                </div>

                <div ref={smallcontainer} className={styles.container}>
                    <div className={styles.images}>
                        {
                            images.map((image, i) => {
                                return <div key={`i_${i}`} ref={el => smallimagesRef.current[i] = el} className={styles.imageContainer}>
                                    <Image
                                        src={image}

                                        alt="image"
                                        fill
                                    />
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className={styles.containerArticle}>
                    <div className={styles.bodySecondArticle} ref={el => smalltitle2.current = el}>
                        <h1 ref={smalltitle2}>Database</h1>
                        <p>Desevolvimento de consultas SQL em bancos de dados PostgreSQL, SQL Server e Sybase para a extração e manipulação de dados, garantindo eficiência e precisão. Minha experiência abrange desde a criação de consultas personalizadas até a integração de dados, suportando decisões estratégicas com informações detalhadas e precisas.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
