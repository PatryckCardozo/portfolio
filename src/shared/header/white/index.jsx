'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../../common/RoundedButton';
import Magnetic from '../../../common/Magnetic';

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        })
    }, [])

    return (
        <>
            <div ref={header} className={`${styles.header} ${isActive ? styles.headerActive : ""}`}>
                <div className={`${styles.logo} ${isActive ? styles.logoActive : ""}`}>
                    <Link href={"/Home"}>
                        <Magnetic>
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/letter-p-white.svg`}
                                    href={'/Home'}
                                />
                            </div>
                        </Magnetic>
                    </Link>
                </div>

                <div className={`${styles.logoWhite} ${isActive ? styles.logoWhiteActive : ""}`}>
                    <Link href={"./Home"}>
                        <Magnetic>
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/letter-p-white.svg`}
                                    href={'/Home'}
                                />
                            </div>
                        </Magnetic>
                    </Link>
                </div>

                <div onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    <div className={`${styles.menuToggle} ${isActive ? styles.menuToggleActive : ""}`}>
                        <div className={styles.one} ></div>
                        <div className={styles.two}></div>
                        <div className={styles.three}></div>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/Experience'>Experiência</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/About'>Sobre</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/Contact'>Contato</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
}
