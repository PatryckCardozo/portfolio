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
                    <h1>Sobre o projeto</h1>
                </div>

                <div className={styles.content}>
                    <p>
                        Desenvolvimento de um software de helpdesk voltado à comunicação eficiente com o cliente, centralização do atendimento e gestão completa de tickets, permitindo acompanhamento de demandas, organização de fluxos de suporte e melhoria contínua da experiência do usuário.
                    </p>
                </div>



            </div>


        </>
    )
}
