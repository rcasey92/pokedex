import styles from './styles.module.css';

type StatItemProps = {
    title: string;
    value: string | number;
}

const StatItem = ({ title, value }: StatItemProps) => {
    return (<div className={styles.statItem}>
        <span className={styles.statTitle}>{title}</span>
        <span>{value}</span>
    </div>)
}

export default StatItem;