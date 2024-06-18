'use client';
import styles from './style.module.scss'
import { Inter, Poppins, Quicksand, Roboto, Urbanist } from 'next/font/google'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { inherits } from 'util';



export default function Home() {

    const ref = useRef(null);
    const isInView = useInView(ref);



    return (

        <div className={styles.main} ref={ref}>      


                <div className={styles.sectionImages}>

                <span
                    style={{
                        transform: isInView ? "none" : "translateX(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                    }}>
                        <div className={styles.containerImage1}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/about_image_example.jpeg`}
                            />
                        </div>
                    </span>

                </div>

                <div className={styles.sectionArticle}>

                    <span
                    style={{
                        transform: isInView ? "none" : "translateY(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                    }}>
                    <div className={styles.titleSection}>
                        <h1>Hobbies</h1>
                    </div>
                    </span>

                    <span
                    style={{
                        transform: isInView ? "none" : "translateY(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                    <div className={styles.card}>
                        <div className={styles.numberCard}>
                            <h3>01</h3>
                        </div>

                        <div className={styles.containerArticleCard}>
                            <div className={styles.titleArticle}>
                                <h2>Família</h2>
                            </div>
                            <div className={styles.textArticle}>
                                <p>Dedico parte do meu tempo para estar com minha família e criar laços fortes com aqueles que amo. É uma fonte de alegria e apoio que valorizo profundamente em minha vida.</p>
                            </div>
                        </div>
                    </div>
                    </span>

                    <span
                    style={{
                        transform: isInView ? "none" : "translateY(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                    }}>
                    <div className={styles.card}>
                        <div className={styles.numberCard}>
                            <h3>02</h3>
                        </div>

                        <div className={styles.containerArticleCard}>
                            <div className={styles.titleArticle}>
                                <h2>Musculação</h2>
                            </div>
                            <div className={styles.textArticle}>
                                <p>A musculação é uma parte essencial da minha rotina, não apenas para fortalecer meu corpo, mas também para cultivar disciplina e foco. Na academia, encontro motivação para superar desafios e me tornar a melhor versão de mim mesmo.</p>
                            </div>
                        </div>
                    </div>
                    </span>

                    <span
                    style={{
                        transform: isInView ? "none" : "translateY(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                    }}>
                    <div className={styles.card}>
                        <div className={styles.numberCard}>
                            <h3>03</h3>
                        </div>

                        <div className={styles.containerArticleCard}>
                            <div className={styles.titleArticle}>
                                <h2>Surf</h2>
                            </div>
                            <div className={styles.textArticle}>
                                <p>Surfar é minha fuga para a tranquilidade do oceano. Deslizar pelas ondas me proporciona uma sensação de liberdade e conexão com a natureza que não encontro em nenhum outro lugar.</p>
                            </div>
                        </div>
                    </div>
                    </span>

                </div>
        
        </div>
    )
}
