'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { inherits } from 'util';

const projects = [
  {
    title: "DBnova Tecnologia",
    src: "logodbnova.png",
    color: "#e6e6e6"
  }
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}


export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }



  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [400, -600])


  return (

    <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} >
      <div className={styles.allContentLink}>

        <div onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }} className={styles.smallProject}>
          <div className={styles.modalSlider}>
            {
              projects.map((project, idx) => {
                const { src, color } = project
                return <div div key={idx} className={styles.modal} style={{ backgroundColor: color }} >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />

                </div>
              })
            }
          </div>
          <div className={styles.smallContent}>
            <h2>DBNova Tecnologia</h2>
            <div className={styles.line}></div>
            <p>Consultor Técnico</p>
          </div>
        </div>

        <Link href="/DBnova">
          <motion.div style={{ y }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#6b9e42"} className={styles.button}>
              <p>View</p>
            </Rounded>
          </motion.div>
        </Link>



        <div className={styles.projects}>
          <div className={styles.projectHeaderContainer}>
            <div className={styles.header}>
              <p>Empresa</p>
            </div>

            <div className={styles.header}>
              <p>Localização</p>
            </div>

            <div className={styles.header}>
              <p>Cargo</p>
            </div>

            <div className={styles.header}>
              <p>Período</p>
            </div>
          </div>

          <a href={"/DBnova"}>
            <div className={styles.projectContent} onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}>
              <div className={styles.projectsContentContainer} style={{ top: index * -100 + "%" }}  >
                <div className={styles.company}>
                  <p>DBNova Tecnologia</p>
                </div>

                <div className={styles.content}>
                  <p>Rio de Janeiro</p>
                </div>

                <div className={styles.content}>
                  <p>Consultor Técnico</p>
                </div>

                <div className={styles.content}>
                  <p>2021 -</p>
                </div>
              </div>


              <div className={styles.projectsDetailsContainer}>
                <div className={styles.details}>
                  <p>Tecnologias Utilizadas</p>
                  <div className={styles.imageContainer}>
                    <Image alt={"image"} src={`/images/sql.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/postgresql.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/sql-server.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/tomcat.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/DBeaver.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/css.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/html.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/photoshop.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/after-effects.svg`} width={30} height={30} className={styles.image} />
                    <Image alt={"image"} src={`/images/premiere.svg`} width={30} height={30} className={styles.image} />
                  </div>
                </div>

                <div className={styles.details}>
                  <p>Atividades Desempenhadas</p>
                  <div className={styles.activityDetails}>
                    <ul>
                      <li>Desenvolvimento de consultas SQL em banco de dados PostgreSQL, SQL Server e Sybase para extração e manipulação de dados.</li>
                      <li>Execução de migração e conversão de dados entre sistemas, assegurando integridade e precisão.</li>
                      <li>Implementação e configuração de softwares de gestão de Licitações, Folhas de Pagamento, Patrimônio e Almoxarifado.</li>
                      <li>Realização de análise do sistema em conformidade com a legislação vigente, identificando e corrigindo eventuais inconsistências para garantir conformidade e legalidade.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
            <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
          </a>
        </div>
      </div>
    </main>

  )
}
