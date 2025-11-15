import styles from './navbar.module.css'
import Link from 'next/link'

function Navbar() {
  return (
    <header>
        <nav className={styles.navbar}>
            <p>Nextjs</p>
            <ul className={styles.navlinks}>
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/">
                <li>About</li>
                </Link>
                <Link href="/">
                <li>Contact</li>
                </Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar