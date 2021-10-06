import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import styles from './SortArrow.module.css';

const SortArrow = ({ direction }) => {
    if (!direction) {
        return <></>;
    }

    if (direction === 'desc') {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowDownRoundedIcon color="inherit" />
            </div>
        );
    } else {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowUpRoundedIcon color="inherit" />
            </div>
        );
    }
};

export default SortArrow;
