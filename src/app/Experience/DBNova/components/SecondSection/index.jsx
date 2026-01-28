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
                                <h1>Manipulação de Dados SQL</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Desenvolvimento de consultas SQL em banco de dados PostgreSQL, SQL Server e Sybase para extração e manipulação de dados.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Implementação de Sistemas de Gestão</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Implementação e configuração de softwares de gestão de Licitações, Folhas de Pagamento, Patrimônio e Almoxarifado.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Migração e Conversão de Dados</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Execução de migração e conversão de dados entre sistemas, assegurando integridade e precisão.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.header}>
                                <h1>Conformidade Legal de Sistemas</h1>
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Análise do sistema em conformidade com a legislação vigente para garantir conformidade e legalidade.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
