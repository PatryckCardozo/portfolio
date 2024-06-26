'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { inherits } from 'util';
import { slideUp } from './animation';


const projects = [
    {
        title: "DBnova Tecnologia",
        src: "logodbnova.png",
        color: "#e6e6e6"
    }
]

export default function Home() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 0])
    const y = useTransform(scrollYProgress, [0, 1], [100, -500])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])


    return (

        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.allcontent}>

            <div className={styles.headerContainer}>
                <div className={styles.company}>
                    <h1>DBNova Tecnologia</h1>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <h2>Cargo</h2>
                        <div className={styles.line}></div>
                        <p>Consultor Técnico</p>
                    </div>
                    <div className={styles.info}>
                        <h2>Localização</h2>
                        <div className={styles.line}></div>
                        <p>Rio de Janeiro</p>
                    </div>
                    <div className={styles.info}>
                        <h2>Período</h2>
                        <div className={styles.line}></div>
                        <p>2021 - </p>
                    </div>
                </div>
            </div>

            <a href="https://dbnova.com.br/">
            <motion.div style={{ y }} className={styles.buttonContainer}>
                <Rounded backgroundColor={"#6b9e42"} className={styles.button}>
                    <p>Site</p>
                </Rounded>
            </motion.div>
            </a>

            <div className={styles.imageContainer}>
                {
                    projects.map((project, idx) => {
                        const { src, color } = project
                        return <div div key={idx} className={styles.modal} style={{ backgroundColor: color }} >
                            <Image
                                src={`/images/${src}`}
                                width={300}
                                height={300}
                                alt="image"
                            />
                        </div>
                    })
                }
            </div>

            <div className={styles.articleSmallContent}>
                <h1>DATABASE</h1>
                <p>Desevolvimento de consultas SQL em bancos de dados PostgreSQL, SQL Server e Sybase para a extração e manipulação de dados, garantindo eficiência e precisão. Minha experiência abrange desde a criação de consultas personalizadas até a integração de dados, suportando decisões estratégicas com informações detalhadas e precisas.</p>
            </div>


        </motion.main>

    )
}
