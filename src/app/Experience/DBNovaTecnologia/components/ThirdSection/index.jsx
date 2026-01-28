'use client';
import { useLayoutEffect, useRef } from "react";
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import Rounded from '../../../../../common/RoundedButton'



export default function Index() {


    return (

        <>
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
                    <Rounded backgroundColor="hsl(80.9 88.5% 79.6%)">
                        <a href='/Experience'>Outras Experiências</a>
                    </Rounded>
                </div>

            </div>


        </>
    )
}
