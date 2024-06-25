import { useState } from 'react';
import styles from './style.module.scss';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(-1); 
    const ref = useRef(null);
    const isInView = useInView(ref);

    const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index); 
    };

    return (
        <div className={styles.main} ref={ref}>

            <span
                style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                }}>
                <div className={styles.titleSection}>
                    <h1>Perguntas frequentes</h1>
                </div>
            </span>

            <div className={styles.containerQuestions}>

                <div className={styles.firstContainerQuetion}>

                    <span
                        style={{
                            transform: isInView ? "none" : "translatey(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                        }}>
                        <div onClick={() => handleQuestionClick(0)} className={`${styles.firstContainerQuery}`}>
                            <div className={`${styles.firstBoxQuery} ${activeIndex === 0 ? styles.firstBoxQueryActive : ''}`}>
                                <div className={styles.boxQuery}>
                                    <div className={styles.query}>
                                        <p>Quais são meus objetivos profissionais?</p>
                                    </div>
                                    <div className={`${styles.firstIcon} ${activeIndex === 0 ? styles.firstIconActive : ''}`}>
                                        <div className={styles.firstline}></div>
                                        <div className={styles.secondline}></div>
                                    </div>
                                </div>
                                <div className={styles.answer}>
                                    <p>Meu próximo objetivo profissional é adentrar no campo jurídico, buscando oportunidades em uma das áreas de interesse.</p>
                                </div>
                            </div>
                        </div>
                    </span>

                    <span
                        style={{
                            transform: isInView ? "none" : "translatey(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                        <div onClick={() => handleQuestionClick(1)} className={`${styles.secondContainerQuery}`}>
                            <div className={`${styles.secondBoxQuery} ${activeIndex === 1 ? styles.secondBoxQueryActive : ''}`}>
                                <div className={styles.boxQuery}>
                                    <div className={styles.query}>
                                        <p>Em que período do dia faço faculdade?</p>
                                    </div>
                                    <div className={`${styles.secondIcon} ${activeIndex === 1 ? styles.secondIconActive : ''}`}>
                                        <div className={styles.firstline}></div>
                                        <div className={styles.secondline}></div>
                                    </div>
                                </div>
                                <div className={styles.answer}>
                                    <p>Direito em período noturno e Análise e Desenvolvimento de Sistemas na modalidade de ensino a distância (EAD).</p>
                                </div>
                            </div>
                        </div>
                    </span>

                    <span
                        style={{
                            transform: isInView ? "none" : "translatey(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                        }}>
                        <div onClick={() => handleQuestionClick(2)} className={`${styles.thirdContainerQuery}`}>
                            <div className={`${styles.thirdBoxQuery} ${activeIndex === 2 ? styles.thirdBoxQueryActive : ''}`}>
                                <div className={styles.boxQuery}>
                                    <div className={styles.query}>
                                        <p>Qual é a previsão de conclusão da graduação?</p>
                                    </div>
                                    <div className={`${styles.thirdIcon} ${activeIndex === 2 ? styles.thirdIconActive : ''}`}>
                                        <div className={styles.firstline}></div>
                                        <div className={styles.secondline}></div>
                                    </div>
                                </div>
                                <div className={styles.answer}>
                                    <p>Ambas as graduações possuem como previsão de término o segundo semestre de 2025.</p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>

                <div className={styles.secondContainerQuetion}>

                    <span
                        style={{
                            transform: isInView ? "none" : "translatey(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                        }}>
                        <div onClick={() => handleQuestionClick(3)} className={`${styles.fourContainerQuery}`}>
                            <div className={`${styles.fourBoxQuery} ${activeIndex === 3 ? styles.fourBoxQueryActive : ''}`}>
                                <div className={styles.boxQuery}>
                                    <div className={styles.query}>
                                        <p>Como irá integrar essas áreas de conhecimento?</p>
                                    </div>
                                    <div className={`${styles.fourIcon} ${activeIndex === 3 ? styles.fourIconActive : ''}`}>
                                        <div className={styles.firstline}></div>
                                        <div className={styles.secondline}></div>
                                    </div>
                                </div>
                                <div className={styles.answer}>
                                    <p>Considero a tecnologia como uma ferramenta poderosa que pode facilitar e aprimorar diversas rotinas de qualquer área.</p>
                                </div>
                            </div>
                        </div>
                    </span>

                    <span
                        style={{
                            transform: isInView ? "none" : "translatey(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                        <div onClick={() => handleQuestionClick(4)} className={`${styles.fifthContainerQuery}`}>
                            <div className={`${styles.fifthBoxQuery} ${activeIndex === 4 ? styles.fifthBoxQueryActive : ''}`}>
                                <div className={styles.boxQuery}>
                                    <div className={styles.query}>
                                        <p>Quais métodos utiliza para aprimorar seu conhecimento?</p>
                                    </div>
                                    <div className={`${styles.fifthIcon} ${activeIndex === 4 ? styles.fifthIconActive : ''}`}>
                                        <div className={styles.firstline}></div>
                                        <div className={styles.secondline}></div>
                                    </div>
                                </div>
                                <div className={styles.answer}>
                                    <p>Uso a leitura e cursos online para me aprimorar. Meu próximo foco de aprimoramento será em compliance.</p>
                                </div>
                            </div>
                        </div>
                    </span>

                    <span
                        style={{
                            transform: isInView ? "none" : "translatey(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                        }}>
                        <div onClick={() => handleQuestionClick(5)} className={`${styles.sixthContainerQuery}`}>
                            <div className={`${styles.sixthBoxQuery} ${activeIndex === 5 ? styles.sixthBoxQueryActive : ''}`}>
                                <div className={styles.boxQuery}>
                                    <div className={styles.query}>
                                        <p>Quais são os aspectos que busco em uma empresa?</p>
                                    </div>
                                    <div className={`${styles.sixthIcon} ${activeIndex === 5 ? styles.sixthIconActive : ''}`}>
                                        <div className={styles.firstline}></div>
                                        <div className={styles.secondline}></div>
                                    </div>
                                </div>
                                <div className={styles.answer}>
                                    <p>Procuro um ambiente desafiador, com profissionais experientes, onde eu possa aprender e expandir meu potencial ao máximo.</p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

        </div >
    );
}
