'use client';
import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: "DBnova Tecnologia",
        src: "logodbnova.png",
        color: "#e6e6e6"
    }
]

export default function index({ index, title, manageModal }) {

    return (

        <Link href={"/DBnova"}>
        <div onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }} className={styles.project}>
            <div className={styles.modalSlider}>
                {
                    projects.map((project) => {
                        const { src, color } = project
                        return <div className={styles.modal} style={{ backgroundColor: color }} >
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
            <h2>{title}</h2>
            <span></span>
            <p>Consultor Técnico</p>
        </div >
        </Link>
  
    )
}
