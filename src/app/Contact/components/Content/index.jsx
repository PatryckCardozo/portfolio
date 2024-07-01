import styles from './style.module.scss';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { slideUp } from './animation';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
    const button = useRef(null);
    const buttonOverlay = useRef(null);
    const overlay = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = Math.round((clientX / window.innerWidth) * 100);
            const y = Math.round((clientY / window.innerHeight) * 100);

            gsap.to(overlay.current, {
                '--x': `${x}%`,
                '--y': `${y}%`,
                duration: 0.3,
                ease: 'sine.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: '.buttonContainer',
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            x: 120
        });
    }, []);


    useEffect(() => {
        gsap.to(buttonOverlay.current, {
            scrollTrigger: {
                trigger: '.buttonContainer',
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            x: 120
        });
    }, []);

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter">
            <div className={styles.allcontent}>
                <div className={styles.body}>
                    <div className={styles.containerContentForm}>
                        <div className={styles.headerForm}>
                            <h1>E ai,</h1>
                            <h1>vamos conversar ?</h1>
                        </div>

                        <motion.div variants={slideUp} initial="initial" animate="enter" className={styles.containerQuest}>
                            <form action="https://api.staticforms.xyz/submit" method="post">
                                <div className={styles.quest}>
                                    <div className={styles.titleQuest}>
                                        <p>01</p>
                                        <h1>Qual é o seu nome?</h1>
                                    </div>
                                    <div className={styles.inputQuest}>
                                        <input type="text" name="name" placeholder="Nathan Bitencorte" required />
                                    </div>
                                </div>

                                <div className={styles.quest}>
                                    <div className={styles.titleQuest}>
                                        <p>02</p>
                                        <h1>Qual é o seu email?</h1>
                                    </div>
                                    <div className={styles.inputQuest}>
                                        <input type="email" name="email" placeholder="nathan@gmail.com" required />
                                    </div>
                                </div>

                                <div className={styles.quest}>
                                    <div className={styles.titleQuest}>
                                        <p>03</p>
                                        <h1>Qual é o seu telefone?</h1>
                                    </div>
                                    <div className={styles.inputQuest}>
                                        <input type="number" name="phone" placeholder="021 9 1234 5678" required />
                                    </div>
                                </div>

                                <div className={styles.quest}>
                                    <div className={styles.titleQuest}>
                                        <p>04</p>
                                        <h1>Qual é o nome da sua empresa?</h1>
                                    </div>
                                    <div className={styles.inputQuest}>
                                        <input type="text" name="$Empresa" placeholder="Nathan & Bitencorte" />
                                    </div>
                                </div>

                                <div className={styles.quest}>
                                    <div className={styles.titleQuest}>
                                        <p>05</p>
                                        <h1>Em que área se encontra sua necessidade?</h1>
                                    </div>
                                    <div className={styles.inputQuest}>
                                        <input type="text" name="$Area" placeholder="Jurídico, Desenvolvimento, WebDesign..." required />
                                    </div>
                                </div>

                                <div className={styles.quest}>
                                    <div className={styles.titleQuest}>
                                        <p>06</p>
                                        <h1>Conte me mais, como posso lhe ajudar?</h1>
                                    </div>
                                    <div className={styles.inputQuest}>
                                        <input type="text" name="message" placeholder="Olá Patryck, consegue me ajudar..." required />
                                    </div>
                                </div>

                                <button type="submit">
                                    <motion.div ref={button} className={styles.buttonContainer}>
                                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                                            <p>Enviar</p>
                                        </Rounded>
                                    </motion.div>
                                </button>

                                <input type="hidden" name="redirectTo" value="http://localhost:3000/Contact" />
                                <input type="hidden" name="accessKey" value="7b2b7909-0e22-4b1d-bcc4-b067b97d8f48" />
                            </form>
                        </motion.div>
                    </div>

                    <div className={styles.containerNav}>
                        <div className={styles.navHeader}>
                            <div className={styles.imageContainer}>
                                <Image fill={true} alt={"image"} src={`/images/perfil.jpeg`} />
                            </div>
                            <div className={styles.headerSmallContent}>
                                <h1>E ai, vamos</h1>
                                <h1>conversar ?</h1>
                            </div>
                            <svg width="15" height="15" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                            </svg>
                        </div>

                        <div className={styles.navInfo}>
                            <h1>Contatos</h1>
                            <p>patryck-cardozo@hotmail.com</p>
                            <p>021 9 9834 6990</p>
                        </div>

                        <div className={styles.navInfo}>
                            <h1>Localização</h1>
                            <p>Brasil</p>
                            <p>Rio de Janeiro</p>
                        </div>

                        <div className={styles.navInfoFooter}>
                            <h1>Redes Sociais</h1>
                            <Magnetic>
                                <a href='https://www.instagram.com/patryck.cardozo/'>Instagram</a>
                            </Magnetic>
                            <Magnetic>
                                <a href='https://www.linkedin.com/in/patryck-cardozo-410363195/?originalSubdomain=br'>Linkedin</a>
                            </Magnetic>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.allContentOverlay} ref={overlay}>
                <div className={styles.bodyOverlay}>
                    <div className={styles.containerContentFormOverlay}>
                        <div className={styles.headerFormOverlay}>
                            <h1>E ai,</h1>
                            <h1>vamos conversar ?</h1>
                        </div>

                        <div className={styles.containerQuestOverlay}>
                            <form action="https://api.staticforms.xyz/submit" method="post">
                                <div className={styles.questOverlay}>
                                    <div className={styles.titleQuestOverlay}>
                                        <p>01</p>
                                        <h1>Qual é o seu nome?</h1>
                                    </div>
                                    <div className={styles.inputQuestOverlay}>
                                        <input type="text" name="name" placeholder="Nathan Bitencorte" required />
                                    </div>
                                </div>

                                <div className={styles.questOverlay}>
                                    <div className={styles.titleQuestOverlay}>
                                        <p>02</p>
                                        <h1>Qual é o seu email?</h1>
                                    </div>
                                    <div className={styles.inputQuestOverlay}>
                                        <input type="email" name="email" placeholder="nathan@gmail.com" required />
                                    </div>
                                </div>

                                <div className={styles.questOverlay}>
                                    <div className={styles.titleQuestOverlay}>
                                        <p>03</p>
                                        <h1>Qual é o seu telefone?</h1>
                                    </div>
                                    <div className={styles.inputQuestOverlay}>
                                        <input type="number" name="phone" placeholder="021 9 1234 5678" required />
                                    </div>
                                </div>

                                <div className={styles.questOverlay}>
                                    <div className={styles.titleQuestOverlay}>
                                        <p>04</p>
                                        <h1>Qual é o nome da sua empresa?</h1>
                                    </div>
                                    <div className={styles.inputQuestOverlay}>
                                        <input type="text" name="$Empresa" placeholder="Nathan & Bitencorte" />
                                    </div>
                                </div>

                                <div className={styles.questOverlay}>
                                    <div className={styles.titleQuestOverlay}>
                                        <p>05</p>
                                        <h1>Em que área se encontra sua necessidade?</h1>
                                    </div>
                                    <div className={styles.inputQuestOverlay}>
                                        <input type="text" name="$Area" placeholder="Jurídico, Desenvolvimento, WebDesign..." required />
                                    </div>
                                </div>

                                <div className={styles.questOverlay}>
                                    <div className={styles.titleQuestOverlay}>
                                        <p>06</p>
                                        <h1>Conte me mais, como posso lhe ajudar?</h1>
                                    </div>
                                    <div className={styles.inputQuestOverlay}>
                                        <input type="text" name="message" placeholder="Olá Patryck, consegue me ajudar..." required />
                                    </div>
                                </div>

                                <button type="submit">
                                    <motion.div ref={buttonOverlay} className={styles.buttonContainerOverlay}>
                                        <Rounded backgroundColor={"#334BD3"} className={styles.buttonOverlay}>
                                            <p>Enviar</p>
                                        </Rounded>
                                    </motion.div>
                                </button>

                                <input type="hidden" name="redirectTo" value="http://localhost:3000/Contact" />
                                <input type="hidden" name="accessKey" value="7b2b7909-0e22-4b1d-bcc4-b067b97d8f48" />
                            </form>
                        </div>
                    </div>

                    <div className={styles.containerNavOverlay}>
                        <div className={styles.navHeaderOverlay}>
                            <div className={styles.imageContainerOverlay}>
                                <Image fill={true} alt={"image"} src={`/images/perfil.jpeg`} />
                            </div>
                            <svg width="15" height="15" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                            </svg>
                        </div>

                        <div className={styles.navInfoOverlay}>
                            <h1>Contatos</h1>
                            <p>patryck-cardozo@hotmail.com</p>
                            <p>021 9 9834 6990</p>
                        </div>

                        <div className={styles.navInfoOverlay}>
                            <h1>Localização</h1>
                            <p>Brasil</p>
                            <p>Rio de Janeiro</p>
                        </div>

                        <div className={styles.navInfoFooterOverlay}>
                            <h1>Redes Sociais</h1>
                            <Magnetic>
                                <a href='https://www.instagram.com/patryck.cardozo/'>Instagram</a>
                            </Magnetic>
                            <Magnetic>
                                <a href='https://www.linkedin.com/in/patryck-cardozo-410363195/?originalSubdomain=br'>Linkedin</a>
                            </Magnetic>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}
