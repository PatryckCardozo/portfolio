'use client'
import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        id: 1,
        title: "Android",
        description: "Sistema operacional mobile baseado em Linux, amplamente utilizado no desenvolvimento de aplicativos.",
        src: "android-svgrepo-com.svg"
    },
    {
        id: 2,
        title: "Apache Flink",
        description: "Framework open source para processamento distribuído de dados em streaming e batch.",
        src: "apache-flink-svgrepo-com.svg"
    },
    {
        id: 3,
        title: "Apple",
        description: "Ecossistema tecnológico focado em hardware, software e desenvolvimento de aplicações.",
        src: "apple-svgrepo-com.svg"
    },
    {
        id: 4,
        title: "ArtStation",
        description: "Plataforma voltada à publicação e exposição de portfólios criativos.",
        src: "artstation-svgrepo-com.svg"
    },
    {
        id: 5,
        title: "Atlassian",
        description: "Conjunto de ferramentas para gestão de projetos, colaboração e produtividade.",
        src: "atlassian-svgrepo-com.svg"
    },
    {
        id: 6,
        title: "Google Chrome",
        description: "Navegador web moderno com foco em desempenho e ferramentas para desenvolvedores.",
        src: "brw-chrome-svgrepo-com.svg"
    },
    {
        id: 7,
        title: "Cisco",
        description: "Empresa referência em redes, infraestrutura, segurança e soluções corporativas.",
        src: "cisco-svgrepo-com.svg"
    },
    {
        id: 8,
        title: "Cloudflare",
        description: "Plataforma de CDN, segurança e otimização de performance para aplicações web.",
        src: "cloudflare-svgrepo-com.svg"
    },
    {
        id: 9,
        title: "C++",
        description: "Linguagem de programação de alto desempenho usada em sistemas e aplicações críticas.",
        src: "cplusplus-svgrepo-com.svg"
    },
    {
        id: 10,
        title: "CSS3",
        description: "Linguagem de estilos para criação de layouts responsivos e interfaces modernas.",
        src: "css3-shiled-svgrepo-com.svg"
    }
];

const slider2 = [
    {
        id: 1,
        title: "Discord",
        description: "Plataforma de comunicação em tempo real para comunidades e equipes.",
        src: "discord-svgrepo-com.svg"
    },
    {
        id: 2,
        title: "Docker",
        description: "Plataforma de containers para empacotamento e execução de aplicações.",
        src: "docker-svgrepo-com.svg"
    },
    {
        id: 3,
        title: "MySQL",
        description: "Sistema gerenciador de banco de dados relacional amplamente utilizado.",
        src: "mysql-svgrepo-com.svg"
    },
    {
        id: 4,
        title: "Evernote",
        description: "Ferramenta de produtividade para organização de notas e informações.",
        src: "evernote-svgrepo-com.svg"
    },
    {
        id: 5,
        title: "Flipboard",
        description: "Plataforma de curadoria de conteúdo e notícias personalizadas.",
        src: "flipboard-svgrepo-com.svg"
    },
    {
        id: 6,
        title: "GitHub Outline",
        description: "Plataforma de versionamento e colaboração em projetos de software.",
        src: "github-01-svgrepo-com.svg"
    },
    {
        id: 7,
        title: "GitHub",
        description: "Serviço de hospedagem de código-fonte baseado em Git.",
        src: "github-fill-svgrepo-com.svg"
    },
    {
        id: 8,
        title: "Google",
        description: "Ecossistema de tecnologias e serviços para web, nuvem e desenvolvimento.",
        src: "google-fill-svgrepo-com.svg"
    },
    {
        id: 9,
        title: "GSAP",
        description: "Biblioteca JavaScript para criação de animações performáticas e complexas.",
        src: "greensock-svgrepo-com.svg"
    },
    {
        id: 10,
        title: "HTML5",
        description: "Linguagem de marcação para estruturação de páginas web modernas.",
        src: "html-fill-svgrepo-com.svg"
    }
];

const slider3 = [
    {
        id: 1,
        title: "JavaScript",
        description: "Linguagem de programação essencial para aplicações web interativas.",
        src: "js01-svgrepo-com.svg"
    },
    {
        id: 2,
        title: "Linux",
        description: "Sistema operacional open source amplamente utilizado em servidores.",
        src: "linux-svgrepo-com.svg"
    },
    {
        id: 4,
        title: "Next.js",
        description: "Framework React para aplicações web modernas com renderização híbrida.",
        src: "nextjs-svgrepo-com.svg"
    },
    {
        id: 5,
        title: "Nginx",
        description: "Servidor web e proxy reverso de alto desempenho.",
        src: "nginx-svgrepo-com.svg"
    },
    {
        id: 7,
        title: "NPM Registry",
        description: "Repositório oficial de pacotes do ecossistema JavaScript.",
        src: "npm-svgrepo-com.svg"
    },
    {
        id: 8,
        title: "PostgreSQL",
        description: "Banco de dados relacional open source robusto e escalável.",
        src: "postgresql-svgrepo-com.svg"
    },
    {
        id: 9,
        title: "Postman",
        description: "Ferramenta para testes, documentação e consumo de APIs.",
        src: "postman-svgrepo-com.svg"
    },
    {
        id: 10,
        title: "PowerShell",
        description: "Shell de automação e scripting multiplataforma.",
        src: "powershell-svgrepo-com.svg"
    },
    {
        id: 11,
        title: "Python",
        description: "Linguagem de programação versátil e amplamente usada em dados e backend.",
        src: "python-svgrepo-com.svg"
    },
    {
        id: 12,
        title: "Vercel",
        description: "Plataforma de deploy e hospedagem otimizada para aplicações frontend.",
        src: "vercel-fill-svgrepo-com.svg"
    }
];




export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [100, -450])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const x3 = useTransform(scrollYProgress, [0, 1], [-450, -100])


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
        <div className={styles.main}>

            <div ref={container} className={styles.slidingImages}>
                <motion.div style={{ x: x1 }} className={styles.slider}>
                    {
                        slider1.map((x, id) => {
                            return (
                                <div key={x.id} className={styles.card}>
                                    <div className={styles.header}>
                                        <Image
                                            width={50}
                                            height={50}
                                            src={`/images/${x.src}`}
                                            alt="image" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>
                <motion.div style={{ x: x2 }} className={styles.slider}>
                    {
                        slider2.map((x, id) => {
                            return (
                                <div key={x.id} className={styles.card}>
                                    <div className={styles.header}>
                                        <Image
                                            width={50}
                                            height={50}
                                            src={`/images/${x.src}`}
                                            alt="image" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>
                <motion.div style={{ x: x3 }} className={styles.slider}>
                    {
                        slider3.map((x, id) => {
                            return (
                                <div key={x.id} className={styles.card}>
                                    <div className={styles.header}>
                                        <Image
                                            width={50}
                                            height={50}
                                            src={`/images/${x.src}`}
                                            alt="image" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>

            <motion.div style={{ height }} className={styles.circleContainer} />

            {dimension.width > 0 && (
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            )}

        </div>

    )
}
