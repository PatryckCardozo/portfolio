import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { RefreshTitle } from '../../../../common/Refresh';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';

export default function index() {

    const phrase = "Ajudando empresas a alcançar o próximo nível.";

    return (

        <div className={styles.description}>
            <RefreshTitle>
            <div className="title" >
                <h2>{phrase}</h2>
            </div>
            </RefreshTitle>
        </div>

    )
}
