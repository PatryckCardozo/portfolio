'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Project({ project, index, manageModal, isMobile }) {
  return (
    <Link href={project.adress}>
      <div className={styles.projectWrapper}>
        
        {isMobile && (
          <div className={styles.mobileImage}>
            <Image
              src={`/images/${project.src}`}
              width={300}
              height={300}
              alt={project.title}
            />
          </div>
        )}

        <div
          className={styles.project}
          onMouseEnter={(e) => {
            if (!isMobile) {
              manageModal(true, index, e.clientX, e.clientY);
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              manageModal(false, index, e.clientX, e.clientY);
            }
          }}
        >
          <h2>{project.title}</h2>
          <span></span>
          <p>{project.cargo}</p>
        </div>

      </div>
    </Link>
  );
}
