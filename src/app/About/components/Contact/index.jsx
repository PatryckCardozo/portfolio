import styles from './style.module.scss';
import { Inter, Poppins, Quicksand, Roboto, Urbanist } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../../../common/Magnetic';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (

        <motion.div className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/perfil_1.jpeg`}
                            />
                        </div>
                        <h2>E ai, vamos </h2>
                    </span>
                    <h2>conversar?</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Link href="/Contact">
                            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                                <p>Entrar em contato</p>
                            </Rounded>
                        </Link>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <a href='mailto:patryck-cardozo@hotmail.com'>patryck-cardozo@hotmail.com</a>
                    </Rounded>
                    <Rounded >
                        <a href='https://api.whatsapp.com/send?phone=5521998346990&text=Ol%C3%A1%2C%20Patryck%20'>+55 021 9 9834 6990</a>
                    </Rounded>
                </div>
                <div className={styles.info}>

                    <div>
                        <h1>Redes Sociais</h1>
                    </div>

                    <div className={styles.infoContent}>
                        <span>
                        </span>

                        <Magnetic>
                            <div className={styles.infoFirstContent}>
                                <a href='https://www.instagram.com/patryck.cardozo/'>Instagram</a>
                            </div>
                        </Magnetic>

                        <Magnetic>
                            <div className={styles.infoSecondContent}>
                                <a href='https://www.linkedin.com/in/patryck-cardozo-410363195/?originalSubdomain=br'>Linkedin</a>
                            </div>
                        </Magnetic>

                    </div>

                </div>

            </div>
        </motion.div>
    )
}
