import styles from './style.module.scss';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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

    return (


        <div className={styles.main} ref={ref}>
            <a href="/images/patryck-cardozo.pdf" download>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <div className={styles.container}>
                    <p id="text"></p>
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
    );
}
