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
                        Desenvolvimento de um software de gestão previdenciária voltado ao controle das contribuições patronais e dos segurados, cálculo de atualização monetária do salário de contribuição, gestão de prova de vida e simulação de projeção de aposentadoria, garantindo precisão, conformidade legal e apoio à tomada de decisão.
                    </p>
                </div>



            </div>


        </>
    )
}
