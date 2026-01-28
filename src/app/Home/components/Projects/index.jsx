'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../../../../common/RoundedButton';

const projects = [
  {
    id: 1,
    title: "DBnova Tecnologia",
    src: "logodbnova.png",
    color: "#f7f7f7",
    cargo: "Consultor Técnico",
    adress: "/Experience/DBnova"
  },
  {
    id: 2,
    title: "Previweb",
    src: "previ.png",
    color: "#ffffff",
    cargo: "Full Stack Developer",
    adress: "/Experience/Previweb"
  },
  {
    id: 3,
    title: "DBnova Tecnologia",
    src: "logodbnova.png",
    color: "#f7f7f7",
    cargo: "Full Stack Developer",
    adress: "/Experience/DBnova"
  }
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4 } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4 } }
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const [isMobile, setIsMobile] = useState(false);


  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const xMove = useRef(null);
  const yMove = useRef(null);

  useEffect(() => {
    xMove.current = gsap.quickTo(
      [modalContainer.current, cursor.current, cursorLabel.current],
      "left",
      { duration: 0.5, ease: "power3" }
    );

    yMove.current = gsap.quickTo(
      [modalContainer.current, cursor.current, cursorLabel.current],
      "top",
      { duration: 0.5, ease: "power3" }
    );
  }, []);

  const moveItems = (x, y) => {
    xMove.current(x);
    yMove.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main
      className={styles.projects}
      onMouseMove={(e) => moveItems(e.clientX, e.clientY)}
    >




      <div className={styles.body}>
        {projects.map((project, i) => (
          <Project
            key={project.id}
            index={i}
            project={project}
            manageModal={manageModal}
            isMobile={isMobile}
          />
        ))}
      </div>

      <Rounded>
        <Link href="/Experience">Experiência</Link>
      </Rounded>

      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div
          className={styles.modalSlider}
          style={{ top: index * -100 + "%" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.modal}
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={`/images/${project.src}`}
                width={300}
                height={300}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />

      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </main>
  );
}
