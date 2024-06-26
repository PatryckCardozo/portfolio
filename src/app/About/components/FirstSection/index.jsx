import styles from './style.module.scss';
import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/ScrollTrigger';
import { motion, useInView } from 'framer-motion';
import { slideUp } from './animation';

export default function Home() {
    
    const [openSection, setOpenSection] = useState(null);

    const handleClick = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const slider = useRef(null);
    const slider2 = useRef(null);
    const slider3 = useRef(null);

    const xPercent = useRef(0);
    const direction = useRef(-1);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction.current = e.direction * 1
            },
            x: "-1500px",
        });

        gsap.to(slider2.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction.current = e.direction * 1
            },
            x: "10px",
        });

        gsap.to(slider3.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction.current = e.direction * 1
            },
            x: "-1600px",
        });

        requestAnimationFrame(animate);
    },[]);

    const animate = () => {
        if (xPercent.current > 100) {
            xPercent.current = 0;
        } else if (xPercent.current < 0) {
            xPercent.current = 100;
        }

        gsap.set(firstText.current, { xPercent: xPercent.current });
        gsap.set(secondText.current, { xPercent: -xPercent.current });
        gsap.set(thirdText.current, { xPercent: xPercent.current });

        requestAnimationFrame(animate);
        xPercent.current += 0.1 * direction.current;
    };

    const ref = useRef(null);
    const isInView = useInView(ref);


    return (
        <div className={styles.main}>

            <div className={styles.sectionContent}>


                <div className={styles.title} ref={ref}>
                    <span
                        style={{
                            transform: isInView ? "none" : "translateX(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}>
                        <h1>Características Pessoais</h1>
                        <p>Para mais detalhes, clique ou passe o mouse sobre cada característica.</p>
                    </span>
                </div>


                <div ref={ref} className={styles.sectionWords}  >
                    <span
                        style={{
                            transform: isInView ? "none" : "translateY(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                        }}>

                        <motion.div
                            layout
                            data-isopen={openSection === 0}
                            initial={{ borderRadius: 50 }}
                            className={styles.parent}
                            onClick={() => handleClick(0)}
                        >
                            <motion.div layout className={styles.child}>
                                <h1>R • e • s • i • l • i • e • n • t • e</h1>
                                <p>Sou um otimista de plantão porque encaro obstáculos como desafios e tendo a não me frustrar frente a eles. Minha vontade de sempre evoluir e minha visão positiva inspiram e contagiam os demais ao meu redor. Encarar o que parece pesado ou difícil como uma oportunidade de ser melhor e provar minha capaciadade são situações que me motivam.</p>
                            </motion.div>
                        </motion.div>
                    </span>

                    <span
                        style={{
                            transform: isInView ? "none" : "translateY(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
                        }}>
                        <motion.div
                            layout
                            data-isopen={openSection === 1}
                            initial={{ borderRadius: 50 }}
                            className={styles.parent}
                            onClick={() => handleClick(1)}
                        >
                            <motion.div layout className={styles.child}>
                                <h1>O • R • I • G • I • N • A • L</h1>
                                <p>Proponente da visão divergente porque observo meu entorno, levanto novas questões e busco conteúdos inéditos. Tenho curiosidade intelectual e gosto de me arriscar, pois não me importo de errar e tentar de novo, desafiando o que já está feito ou dito.</p>
                            </motion.div>
                        </motion.div>
                    </span>

                    <span
                        style={{
                            transform: isInView ? "none" : "translateY(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                        }}>
                        <motion.div
                            layout
                            data-isopen={openSection === 2}
                            initial={{ borderRadius: 50 }}
                            className={styles.parent}
                            onClick={() => handleClick(2)}
                        >
                            <motion.div layout className={styles.child}>
                                <h1>C • O • N • S • C • I • E • N • T • E</h1>
                                <p>Controlar e direcionar meus pensamentos e ações para atingir um objetivo é uma habilidade altamente desenvolvida e utilizada em minha rotina.</p>
                            </motion.div>
                        </motion.div>
                    </span>

                    <span
                        style={{
                            transform: isInView ? "none" : "translateY(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                        }}>
                        <motion.div
                            layout
                            data-isopen={openSection === 3}
                            initial={{ borderRadius: 50 }}
                            className={styles.parent}
                            onClick={() => handleClick(3)}
                        >
                            <motion.div layout className={styles.child}>
                                <h1>C • O • L • A • B • O • R • A • T • I • V • O</h1>
                                <p>Trabalho em equipe de forma colaborativa, compartilhando conhecimento e fomentando a criatividade coletiva. Esforço-me para identificar e valorizar as habilidades únicas de cada membro, reconhecendo suas contribuições individuais. Encorajo a comunicação aberta e o respeito mútuo, criando um ambiente de confiança.</p>
                            </motion.div>
                        </motion.div>
                    </span>

                    <span
                        style={{
                            transform: isInView ? "none" : "translateY(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                        <motion.div
                            layout
                            data-isopen={openSection === 4}
                            initial={{ borderRadius: 50 }}
                            className={styles.parent}
                            onClick={() => handleClick(4)}
                        >
                            <motion.div layout className={styles.child}>
                                <h1>A • U • T • O • D • I • D • A • T • A</h1>
                                <p>Com disciplina e motivação, estabeleço meus próprios objetivos de aprendizado e sigo um plano para alcançá-los. Vejo cada desafio como uma oportunidade de crescimento. Ser autodidata me permite adquirir conhecimentos e desenvolver habilidades de maneira flexível.</p>
                            </motion.div>
                        </motion.div>
                    </span>
                </div>

            </div>

            <div className={styles.sliderSection}>

                <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
                    <div className={styles.sliderContainer}>
                        <div ref={slider} className={styles.slider}>
                            <p ref={firstText}>Repouso • Energia • Day Off • Descontração • Folga • Diversão • Lazer • Descanso • Hobbie • Repouso • Energia • Day Off • Descontração • Folga • Diversão • Lazer • Descanso • Hobbie • Repouso • Energia • Day Off • Descontração • Folga • Diversão • Lazer • Descanso • Hobbie •</p>
                        </div>
                        <div ref={slider2} className={styles.slider2}>
                            <p ref={secondText}>Hobbie • Descanso • Lazer • Diversão • Folga • Descontração • Day Off • Energia • Repouso • Hobbie • Descanso • Lazer • Diversão • Folga • Descontração • Day Off • Energia • Repouso • Hobbie • Descanso • Lazer • Diversão • Folga • Descontração • Day Off • Energia • Repouso •</p>
                        </div>
                        <div ref={slider3} className={styles.slider3}>
                            <p ref={thirdText}>Hobbie • Descanso • Lazer • Diversão • Folga • Descontração • Day Off • Energia • Repouso • Hobbie • Descanso • Lazer • Diversão • Folga • Descontração • Day Off • Energia • Repouso • Hobbie • Descanso • Lazer • Diversão • Folga • Descontração • Day Off • Energia • Repouso •</p>
                        </div>
                    </div>
                </motion.main>

            </div>

        </div>
    );
}
