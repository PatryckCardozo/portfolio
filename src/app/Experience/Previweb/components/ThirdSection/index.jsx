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

        <div className={styles.main} ref={container}>

            <div className={styles.allContent}>

                <div className={styles.titleContainer}>
                    <h1>Outros softwares e frameworks de uso regular</h1>
                </div>

                <div className={styles.cardcontainer}>

                    <div className={styles.linecontainer}>
                        <div className={styles.card}>
                            <div className={styles.header}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={`/images/vscode.svg`}
                                    alt="image" />
                            </div>

                            <div className={styles.content}>
                                <h1>VS Code</h1>
                                <p>
                                    Ambiente principal de desenvolvimento, utilizando extensões, atalhos e configurações personalizadas para maximizar produtividade, padronização de código e eficiência no fluxo de trabalho.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={`/images/shadcn.svg`}
                                    alt="image" />
                            </div>

                            <div className={styles.content}>
                                <h1>Shadcn/UI</h1>
                                <p>
                                    Uso recorrente para construção de interfaces modernas e consistentes, com componentes reutilizáveis, acessíveis e totalmente customizáveis, integrados ao ecossistema React e Tailwind.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={`/images/radix.svg`}
                                    alt="image" />
                            </div>

                            <div className={styles.content}>
                                <h1>Radix UI</h1>
                                <p>
                                    Aplicação de componentes headless focados em acessibilidade e comportamento, garantindo interações robustas, previsíveis e compatíveis com boas práticas de UX.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={`/images/tiptap.svg`}
                                    alt="image" />
                            </div>

                            <div className={styles.content}>
                                <h1>Tiptap</h1>
                                <p>
                                    Implementação de editor de texto rico e extensível, permitindo criação de conteúdos dinâmicos, customização de funcionalidades e integração fluida com aplicações React.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.button}>
                    <Rounded backgroundColor="hsl(217.9 10.6% 64.9%)">
                        <a href='/Experience'>Outras Experiências</a>
                    </Rounded>
                </div>

            </div>

            <motion.div style={{ height }} className={styles.circleContainer} />


            {dimension.width > 0 && (
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            )}


        </div>
    )
}
