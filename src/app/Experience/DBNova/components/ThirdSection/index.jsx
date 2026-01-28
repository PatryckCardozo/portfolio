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

                <div className={styles.button}>
                    <Rounded  backgroundColor="hsl(80.9 88.5% 79.6%)" >
                        <a href='/Experience'>Outras Experiências</a>
                    </Rounded>
                </div>

            </div>


        </>
    )
}
