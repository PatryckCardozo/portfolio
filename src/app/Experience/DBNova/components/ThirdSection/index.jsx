'use client';
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import Rounded from '../../../../../common/RoundedButton'



export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })


    const height = useTransform(scrollYProgress, [0, 1], [300, 0])
    const [dimension, setDimension] = useState({
        width: 0,
        height: 100,
    });

    useEffect(() => {
        const updateViewport = () => {
            setDimension({
                width: window.innerWidth,
                height: 100,
            });
        };

        updateViewport();
        window.addEventListener('resize', updateViewport);

        return () => window.removeEventListener('resize', updateViewport);
    }, []);



    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 100} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }


    return (

        <>
            <div className={styles.allContent}>

                <div className={styles.titleContainer}>
                    <h1>Outros softwares de uso regular</h1>
                </div>

                <div className={styles.cardcontainer}>

                    <div className={styles.linecontainer}>
                        <div className={styles.card}>
                            <div className={styles.header}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={`/images/elo.png`}
                                    alt="image" />
                            </div>

                            <div className={styles.content}>
                                <h1>Elotech</h1>
                                <p>
                                    Software de alta performance para gestão administrativa de municípios e outras entidades, proporcionando eficiência operacional.                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={`/images/crystal_reports.png`}
                                    alt="image" />
                            </div>

                            <div className={styles.content}>
                                <h1>Crystal Reports</h1>
                                <p>
                                    Desenvolvimento de relatórios com visualizações detalhadas e personalizadas de dados.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={`/images/Adobe.png`}
                                    alt="image" />
                            </div>

                            <div className={styles.content}>
                                <h1>Adobe</h1>
                                <p>
                                    Edição e manipulação de mídias com Photoshop, Premiere e After Effects para produção de folders, vídeos comerciais e páginas web.                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.buttoncontainer}>
                    <div className={styles.button}>
                        <Rounded backgroundColor="hsl(80.9 88.5% 79.6%)" >
                            <a href='/Experience'>Outras Experiências</a>
                        </Rounded>
                    </div>
                </div>

            </div>

            <div className={styles.containercurve}>
                <motion.div style={{ height }} className={styles.circleContainer} />


                {dimension.width > 0 && (
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                )}
            </div>

        </>
    )
}
