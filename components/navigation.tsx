"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from "../styles/navigation.module.css"

const Navigation = () => {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">about-us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation