import { Logo } from '../Logo/Logo'
import styles from './navbar.module.css'

export const Navbar = (): JSX.Element => {
    return (
        <>
            <div className={`${styles.navbar}`}>
                <div className={`${styles.wrapper}`}>
                    <Logo />

                    <ul className={`${styles.ul}`}>
                        <li>
                            <a href="">Categorie</a>
                        </li>
                        <li>
                            <a href="">Categorie</a>
                        </li>
                        <li>
                            <a href="">Categorie</a>
                        </li>
                        <li>
                            <a href="">Categorie</a>
                        </li>
                    </ul>

                    <div>
                        <div className={styles['input-wrapper']}>
                            <input placeholder='Search' className={`${styles.input}`} type="text" />
                        </div>
                    </div>

                    <ul className={`${styles.ul}`}>
                        <li>
                            <a href="">Account</a>
                        </li>
                        <li>
                            <a href="">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}