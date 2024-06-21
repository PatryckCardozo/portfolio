'use client';
import { useLayoutEffect, useRef } from "react";
import styles from './style.module.scss';
import { Inter, Poppins, Quicksand, Roboto, Urbanist } from '@next/font/google'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger)
const word = "Desevolvimento de consultas SQL em bancos de dados PostgreSQL, SQL Server e Sybase para a extração e manipulação de dados, garantindo eficiência e precisão. Minha experiência abrange desde a criação de consultas personalizadas até a integração de dados, suportando decisões estratégicas com informações detalhadas e precisas.";

export default function Index() {
    const container = useRef(null);
    const images = ["images/software-svgrepo-com.svg", "images/law-svgrepo-com.svg"];
    const lettersRef = useRef([])
    const silderRef1 = useRef([])
    const smallsilderRef1 = useRef([])
    const silderRef2 = useRef([])
    const smallsilderRef2 = useRef([])
    const title1 = useRef(null);

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

                .to(title1.current, { y: 150 }, 0);

            gsap.to(smallsilderRef1.current, {
                scrollTrigger: {
                    trigger: '.allcontent',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,

                },
                x: -250
            });

            gsap.to(smallsilderRef2.current, {
                scrollTrigger: {
                    trigger: '.allcontent',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                x: 200,

            });

            gsap.to(silderRef1.current, {
                scrollTrigger: {
                    trigger: '.allcontent',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,

                },
                y: -500
            });

            gsap.to(silderRef2.current, {
                scrollTrigger: {
                    trigger: '.allcontent',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                y: 500,

            });

            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, { top: Math.floor(Math.random() * 75) - 0, }, 1);
            });

        });
        return () => context.revert();
    }, []);

    return (

        <>
            <div className={styles.allcontent}>
                <div className={styles.containerContent}>

                    <div className={styles.containerArticle}>

                        <div className={styles.textArticle}>
                            <h1>Análise Jurídica</h1>
                            <p>Análise de sistemas em conformidade com a legislação vigente, identificando e corrigindo eventuais inconsistências para garantir conformidade e legalidade. Minha rotina envolve revisar processos e dados, implementar ajustes necessários e assegurar que todas as operações atendam aos requisitos legais. Com foco em precisão e integridade, trabalho para manter os sistemas atualizados e em plena conformidade regulatória, mitigando riscos e evitando penalidades.</p>
                        </div>

                        <div className={styles.containerTopics}>

                            <div className={styles.topic}>
                                <p>Conformidade</p>
                            </div>

                            <div className={styles.topic}>
                                <p>Auditoria</p>
                            </div>

                            <div className={styles.topic}>
                                <p>Regulamentação</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.containerSliders}>

                        <div className={styles.containerFirstSlider} ref={silderRef1}>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>


                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/file-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legislation</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/law-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legal system</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/auditoria.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Auditoria</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/file-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legislation</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/law-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legal system</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/auditoria.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Auditoria</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/file-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legislation</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`images/law-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legal system</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/auditoria.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Auditoria</h3>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className={styles.containerSecondSlider} ref={silderRef2}>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/compliance.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Compliance</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/lock-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Lock</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/security-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Security</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/compliance.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Compliance</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/lock-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Lock</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/security-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Security</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/compliance.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Compliance</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            width={40}
                                            height={40}
                                            alt={"image"}
                                            src={`/images/lock-white.svg`}
                                        />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Lock</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/security-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Security</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.smallContainerSliders}>

                        <div className={styles.containerFirstSlider} ref={smallsilderRef1}>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/file-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legislation</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`images/law-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legal system</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/auditoria.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Auditoria</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/file-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legislation</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`images/law-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legal system</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/auditoria.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Auditoria</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/file-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legislation</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`images/law-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Legal system</h3>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className={styles.containerSecondSlider} ref={smallsilderRef2}>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/compliance.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Compliance</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/lock-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Lock</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/security-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Security</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/compliance.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Compliance</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/lock-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Lock</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/security-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Security</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/compliance.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Compliance</h3>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.containerCard}>
                                <div className={styles.contentCard}>

                                    <div className={styles.containerIcon}>
                                        <Image
                                            src={`/images/lock-white.svg`}
                                            width={40}
                                            height={40}
                                            alt={"image"} />
                                    </div>

                                    <div className={styles.titleCard}>
                                        <h3>Lock</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
