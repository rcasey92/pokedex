import { capitalizeFirstLetter } from "@app/utils";

import styles from './styles.module.css';

const TypesContainer = ({ types }: { types: string[] }) => {
    return (<div className={styles.typesContainer}>
    <span className={styles.typeTitle}>Types</span>
        {types.map((type: string) => (
            <span key={type} className={`${styles.type} ${styles[type]}`}>
                {capitalizeFirstLetter(type)}
            </span>
        ))}
    </div>)
}

export default TypesContainer;