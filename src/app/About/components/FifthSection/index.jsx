import styles from './style.module.scss';
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';

export default function Home() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        const str = "Download - Currículo - Download - Currículo -";
        const text = document.getElementById("text");

        if (text) {
            for (let i = 0; i < str.length; i++) {
                let span = document.createElement("span");
                span.innerHTML = str[i];
                text.appendChild(span);
                span.style.transform = `rotate(${8 * i}deg)`;
            }
        }

        return () => {

        };
    }, []);

    useEffect(() => {
        const strs = "Download - Currículo -";
        const textSmall = document.getElementById("textSmall");

        if (textSmall) {
            for (let i = 0; i < strs.length; i++) {
                let span = document.createElement("span");
                span.innerHTML = strs[i];
                textSmall.appendChild(span);
                span.style.transform = `rotate(${16 * i}deg)`;
            }
        }

        return () => {

        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })


    const height = useTransform(scrollYProgress, [0, 1], [300, 0])
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
        <div className={styles.main} ref={ref}>

            <div className={styles.container}>
                <a href="/images/patryck-cardozo.pdf" download>
                    <span
                        style={{
                            transform: isInView ? "none" : "translateX(100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                        <div className={styles.icon}>
                            <p id="text" className={styles.text}></p>
                            <p id="textSmall" className={styles.textSmall}></p>
                            <Image
                                width={50}
                                height={50}
                                alt={"image"}
                                src={`/images/arrow-down.svg`}
                            />
                            <Image
                                width={50}
                                height={50}
                                alt={"image"}
                                src={`/images/arrow-down-blue.svg`}
                                className={styles.imgblue}
                            />
                        </div>
                    </span>
                </a>
            </div>

            <div className={styles.containercurve}>

                <motion.div style={{ height: `${height}px` }} className={styles.circleContainer} />

                {dimension.width > 0 && (
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                )}
            </div>

        </div>
    );
}
