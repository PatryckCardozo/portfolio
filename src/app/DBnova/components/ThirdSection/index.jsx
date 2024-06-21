'use client';
import { useLayoutEffect, useRef } from "react";
import styles from './style.module.scss';
import { Inter, Poppins, Quicksand, Roboto, Urbanist } from 'next/font/google'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import Rounded from '../../../../common/RoundedButton'



export default function Index() {


    return (

        <>
            <div className={styles.allContent}>

                <div className={styles.titleContainer}>
                    <h1>Outros softwares de uso regular</h1>
                </div>
   

                <div className={styles.cardContainer}>

                    <div className={styles.card} style={{backgroundColor:"#f2f2f2"}}>
                        <div className={styles.contentCard}>
                            <div className={styles.iconCard2}>
                                <Image 
                                width={200}
                                height={200}
                                src={`/images/Elo.png`} 
                                alt="image" />

                            </div>
                            <div className={styles.articleCard}>
                                <p>Software de alta performance para gestão administrativa de municípios e outras entidades, proporcionando eficiência operacional.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card} style={{backgroundColor:"#f3ffed"}}>
                        <div className={styles.contentCard}>
                            <div className={styles.iconCard1}>
                                <Image
                                width={200}
                                height={200}
                                src={`/images/crystal_reports.png`} 
                                alt="image" />
                            </div>
                            <div className={styles.articleCard}>
                                <p>Desenvolvimento de relatórios com visualizações detalhadas e personalizadas de dados.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card} style={{backgroundColor:"#fff2f2"}}>
                        <div className={styles.contentCard}>

                            <div className={styles.iconCard3}>
                                <Image 
                                width={200}
                                height={200}
                                src={`/images/Adobe.png`} 
                                alt="Image" />
                            </div>

                            <div className={styles.articleCard}>
                                <p>Edição e manipulação de mídias com Photoshop, Premiere e After Effects para produção de folders, vídeos comerciais e páginas web.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.button}>
                <Rounded>
                    <a href='/Experience'>Outras Experiências</a>
                </Rounded>
                </div>

            </div>


        </>
    )
}
