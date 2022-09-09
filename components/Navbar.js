import Link from 'next/link';
import styles from '../styles/Nav.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <h2> <Link href="/"> SP </Link> </h2>
            </div>
            <div className={styles.main_nav}>
                <h2> <Link href="/"> SP </Link> </h2>
            </div>
        </nav>
    );
};

export default Navbar;