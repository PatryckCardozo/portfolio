import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../common/RoundedButton';
import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

import {
    Inter,
    Manrope,
    Poppins
} from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export const manrope = Manrope({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: [
        '100', '200', '300', '400', '500',
        '600', '700', '800', '900',
    ],
    style: ['normal', 'italic'],
    display: 'swap',
});



export default function Index() {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])


    const height = useTransform(scrollYProgress, [0, 1], [350, 0])


    const [dimension, setDimension] = useState({
        width: 0,
        height: 100,
    });

    useEffect(() => {
        const updateViewport = () => {
            setDimension({
                width: window.innerWidth,
                height: 100,
            });
        };

        updateViewport();
        window.addEventListener('resize', updateViewport);

        return () => window.removeEventListener('resize', updateViewport);
    }, []);



    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 100} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }


    return (

        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={`${manrope.className} ${styles.title}`}>
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
                                <p className={`${manrope.className}`}>Entrar em contato</p>
                            </Rounded>
                        </Link>
                    </motion.div>

                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <a className={`${manrope.className}`} href='mailto:patryck-cardozo@hotmail.com'>patryck-cardozo@hotmail.com</a>
                    </Rounded>
                    <Rounded >
                        <a href='https://api.whatsapp.com/send?phone=5521998346990&text=Ol%C3%A1%2C%20Patryck%20'>+55 021 9 9834 6990</a>
                    </Rounded>
                </div>
                <div className={`${manrope.className} ${styles.info}`}>

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
