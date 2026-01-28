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
                    <h1>Resumo das atividade desempenhadas</h1>
                </div>


                <div className={styles.cardcontainer}>

                    <div className={styles.linecontainer}>
                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Arquitetura Full Stack</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Responsável pela definição da arquitetura da aplicação, estruturando front-end, back-end e banco de dados, com foco em escalabilidade, desacoplamento e manutenibilidade do sistema.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Desenvolvimento Front-end (Next.js)</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Implementação do front-end utilizando Next.js, com componentização reutilizável, gerenciamento de estado, rotas dinâmicas e otimização de performance (SSR/CSR).
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Desenvolvimento Back-end e APIs REST</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Desenvolvimento do back-end com Python e Django Rest Framework, incluindo criação de APIs RESTful, modelagem de dados, serialização, validações e regras de negócio.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Dashboards e Processamento de Dados</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Implementação de dashboards interativos e relatórios dinâmicos, consumindo APIs e processando dados para geração de indicadores operacionais e gerenciais.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.linecontainer}>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Integração e Migração de Dados</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Desenvolvimento de rotinas de importação, validação e migração de dados entre sistemas, garantindo integridade referencial e consistência das informações.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Implementação de Regras Previdenciárias</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Tradução de regras previdenciárias e normativas em lógica de sistema, automatizando cálculos, validações e fluxos conforme legislação vigente.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Autenticação, Autorização e Segurança</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Implementação de autenticação e controle de acesso baseado em perfis, proteção de endpoints, validações de segurança e boas práticas de proteção de dados.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Otimização, Manutenção e Evolução Contínua</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Atuação na otimização de performance, refatoração de código, correção de bugs e implementação de melhorias contínuas ao longo do ciclo de vida da aplicação.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
