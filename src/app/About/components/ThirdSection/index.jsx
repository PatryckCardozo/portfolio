import styles from './style.module.scss'
import { Inter, Poppins, Quicksand, Roboto, Urbanist } from 'next/font/google'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/ScrollTrigger';
import { slideUp } from './animation';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { inherits } from 'util';
import { SyntheticModule } from 'vm';

export default function Home() {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const fourText = useRef(null);
    const fifthText = useRef(null);
    const sixthText = useRef(null);
    const slider = useRef(null);
    const slider2 = useRef(null);
    const slider3 = useRef(null);
    const slider4 = useRef(null);
    const slider5 = useRef(null);
    const slider6 = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * 0.5
            },
            x: "-2000px",
        })

        gsap.to(slider2.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * 1
            },
            x: "10px",
        })

        gsap.to(slider3.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * 1
            },
            x: "-1700px",
        })
        gsap.to(slider4.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * 0.5
            },
            x: "-1500px",
        })

        gsap.to(slider5.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * 1
            },
            x: "10px",
        })

        gsap.to(slider6.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * 1
            },
            x: "-1500px",
        })
        requestAnimationFrame(animate);
    }, [])


    const animate = () => {
        if (xPercent > 100) {
            xPercent = 0;
        }
        else if (xPercent < 0) {
            xPercent = 100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: -xPercent })
        gsap.set(thirdText.current, { xPercent: xPercent })
        gsap.set(fourText.current, { xPercent: xPercent })
        gsap.set(fifthText.current, { xPercent: -xPercent })
        gsap.set(sixthText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (

        <div className={styles.main}>

            <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
                <div className={styles.sliderContainer}>
                    <div ref={slider} className={styles.slider}>
                        <p ref={firstText}>Capacitação • Aprimoramento • Instrução • Escolaridade • Formação • Aprendizado • Graduação • Desenvolvimento • Educação • Capacitação • Aprimoramento • Instrução • Escolaridade • Formação • Aprendizado • Graduação • Desenvolvimento • Educação •</p>
                    </div>
                    <div ref={slider2} className={styles.slider2}>
                        <p ref={secondText}>Educação • Qualificação • Desenvolvimento • Graduação • Aprendizado • Formação • Escolaridade • Instrução  • Aprimoramento • Capacitação • Educação • Qualificação • Desenvolvimento • Graduação • Aprendizado • Formação • Escolaridade • Instrução  • Aprimoramento • Capacitação •</p>
                    </div>
                    <div ref={slider3} className={styles.slider3}>
                        <p ref={thirdText}>Educação • Qualificação • Desenvolvimento • Graduação • Aprendizado • Formação • Escolaridade • Instrução  • Aprimoramento • Capacitação • Educação • Qualificação • Desenvolvimento • Graduação • Aprendizado • Formação • Escolaridade • Instrução  • Aprimoramento • Capacitação •</p>
                    </div>
                </div>
            </motion.main>

            <div className={styles.containerEducationCards} ref={ref}>

                <span
                    style={{
                        transform: isInView ? "none" : "translateX(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                    }}>
                    <div className={styles.containerCard}>
                        <div className={styles.continerCardImage}>
                            <div className={styles.imageCard}>
                                <p>UVA</p>
                                <div className={styles.circleActive}></div>
                                <span>
                                    <div className={styles.circle}></div>
                                </span>
                            </div>

                        </div>
                        <div className={styles.articlecard}>
                            <p>Universidade Veiga de Almeida</p>
                            <h1>Graduação</h1>
                            <p>Direito | 7° Período</p>
                            <p>Análise e Desenvolvimento de Sistema | 2° Período</p>
                        </div>
                    </div>
                </span>

                <span
                 style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <div className={styles.containerCard}>
                    <div className={styles.continerCardImageFgv}>
                        <div className={styles.imageContainerFiap}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/fiap-white2.png`}
                            />
                        </div>

                        <div className={styles.imageContainerFiapActive}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/fiap-pink.png`}
                            />
                        </div>
                    </div>

                    <div className={styles.articlecard}>
                        <p>Faculdade de Informática e Administração Paulista</p>
                        <h1>Nano Courses</h1>
                        <p>Big Data & Analytics</p>
                        <p>Design Thinking</p>
                        <p>Liderança e Desenvolvimento de Competências</p>
                        <p>Soluções Tecnológicas Emergentes</p>
                    </div>
                </div>
                </span>
                
                <span
                style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                }}>
                <div className={styles.containerCard}>
                    <div className={styles.continerCardImage}>
                        
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/fgv_nacional.png`}
                            />
                        </div>

                        <div className={styles.imageContainerFgv}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/fgv-logo.svg`}
                            />
                        </div>

                    </div>
                    <div className={styles.articlecard}>
                        <p>Fundação Getúlio Vargas</p>
                        <h1>Educação Executiva</h1>
                        <p>Direito Municipal</p>
                        <p>Direito Tributário</p>
                    </div>
                </div>
                </span>

            </div>

            <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
                <div className={styles.sliderContainer}>
                    <div ref={slider4} className={styles.slider}>
                        <p ref={fourText}>Incorporação • Contratação • Frequentes • Dúvidas • Admissão • Processo • Seleção • Entrevista • Recrutamento • Incorporação • Contratação • Frequentes • Dúvidas • Admissão • Processo • Seleção • Entrevista • Recrutamento •</p>
                    </div>
                    <div ref={slider5} className={styles.slider2}>
                        <p ref={fifthText}>Recrutamento • Entrevista • Seleção • Processo • Admissão • Dúvidas • Frequentes • Contratação • Incorporação • Recrutamento • Entrevista • Seleção • Processo • Admissão • Dúvidas • Frequentes • Contratação • Incorporação •</p>
                    </div>
                    <div ref={slider6} className={styles.slider3}>
                        <p ref={sixthText}>Recrutamento • Entrevista • Seleção • Processo • Admissão • Dúvidas • Frequentes • Contratação • Incorporação • Recrutamento • Entrevista • Seleção • Processo • Admissão • Dúvidas • Frequentes • Contratação • Incorporação •</p>
                    </div>
                </div>
            </motion.main>


        </div>
    )
}
