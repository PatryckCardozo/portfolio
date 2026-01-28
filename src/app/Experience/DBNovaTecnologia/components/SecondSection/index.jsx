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
                                    Atuação como Full Stack Developer, responsável por todo o ciclo de desenvolvimento da plataforma de central de atendimento, desde a definição da arquitetura até a entrega final, utilizando Next.js no front-end e Python (Django Rest Framework) no back-end.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Front-end — Next.js</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Desenvolvimento do front-end com Next.js, aplicando boas práticas de componentização, renderização otimizada (SSR/CSR), organização de rotas e foco em performance, escalabilidade e experiência do usuário.                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Back-end — Python DRF</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Implementação do back-end com Django Rest Framework, incluindo modelagem de dados, criação de APIs RESTful, regras de negócio, autenticação e controle de permissões.                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Integração & Performance</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Integração completa entre front-end e back-end, com atenção a validações, segurança e otimizações de performance, garantindo um sistema robusto, escalável e de fácil manutenção.                                </p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.linecontainer}>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Modelagem de Dados & Regras de Negócio</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Definição e implementação da modelagem de dados e das regras de negócio da central de atendimento, garantindo consistência, integridade das informações e alinhamento com os fluxos operacionais.                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Autenticação & Controle de Acesso</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Implementação de autenticação e controle de permissões, assegurando acesso seguro à plataforma e proteção das informações conforme os perfis de usuários.                                    </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Manutenibilidade & Escalabilidade</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Desenvolvimento orientado à manutenibilidade, com código organizado, reutilizável e preparado para evolução contínua e crescimento da plataforma.                                    </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Entrega, Testes & Evolução Contínua</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Responsável por todo o processo de entrega da aplicação, realizando testes funcionais, ajustes finos e melhorias contínuas com base em uso real e feedback.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
