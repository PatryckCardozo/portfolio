'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion, color } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { inherits } from 'util';
import { slideUp } from './animation';


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

  const [cursorbgcolor, setCursorBgColor] = useState("transparent");
  const [cursorcolor, setCursorColor] = useState("transparent");



  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })

    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })

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

  const y = useTransform(scrollYProgress, [0, 1], [400, -700])


  const projects = [
    {
      id: 1,
      nome: "DBNova Tecnologia",
      local: "Rio de Janeiro",
      cargo: "Consultor Técnico",
      periodo: "2021 - 2024",
      link: "/Experience/DBNova",
      bgcolor: "#D9F99D",
      color: "#000000",
      src: "logodbnova.png",
      bgcolormobile: "#f8f8f8"
    },
    {
      id: 2,
      nome: "Previweb",
      local: "Rio de Janeiro",
      cargo: "Full Stack Developer",
      periodo: "2024 - 2024",
      link: "/Experience/Previweb",
      bgcolor: "#9CA3AF",
      color: "#ffffff",
      src: "previ.png",
      bgcolormobile: "#fcfcfc"
    },
    {
      id: 3,
      nome: "DBNova Tecnologia",
      local: "Rio de Janeiro",
      cargo: "Full Stack Developer",
      periodo: "2025 - 2025",
      link: "/Experience/DBNovaTecnologia",
      bgcolor: "#D9F99D",
      color: "#000000",
      src: "logodbnova.png",
      bgcolormobile: "#f8f8f8"
    }
  ]



  return (

    <motion.main variants={slideUp} initial="initial" animate="enter" onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} >
      <div className={styles.allContentLink}>

        {projects.map((x, id) => {
          return (
            <div key={x.id} onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY); setCursorColor("transparent"); }} className={styles.smallProject}>
              <Link href={x.link}>
                <div className={styles.modalSlider}>
                  <div key={x.id} className={styles.modal} style={{ backgroundColor: x.bgcolormobile }} >
                    <Image
                      src={`/images/${x.src}`}
                      width={300}
                      height={100}
                      alt="image"
                    />
                  </div>
                </div>

                <div className={styles.smallContent}>
                  <h2>{x.nome}</h2>
                  <div className={styles.line}></div>
                  <p>{x.cargo}</p>
                </div>
              </Link>
            </div>
          )
        })}


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

          {projects.map((x, id) => {
            return (
              <Link key={x.id} href={x.link}>

                <div className={styles.projectContent} onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY); setCursorColor(x.color); setCursorBgColor(x.bgcolor); }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}>

                  <div key={id} className={styles.projectsContentContainer} style={{ top: index * -100 + "%" }}  >
                    <div className={styles.company}>
                      <p>{x.nome}</p>
                    </div>

                    <div className={styles.content}>
                      <p>{x.local}</p>
                    </div>

                    <div className={styles.content}>
                      <p>{x.cargo}</p>
                    </div>

                    <div className={styles.content}>
                      <p>{x.periodo}</p>
                    </div>
                  </div>

                </div>
                <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} style={{ backgroundColor: cursorbgcolor, color: cursorcolor }} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
                <motion.div ref={cursorLabel} className={styles.cursorLabel} style={{ backgroundColor: cursorbgcolor, color: cursorcolor }} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
              </Link>
            );
          })}

        </div>
      </div>
    </motion.main>

  )
}
