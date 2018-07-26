import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => <nav role="navigation">
  <ul className={styles.navigation}>
    <li className={styles.navigationItem}>
      <Link className={styles.navigationLink} to="/">Home</Link>
    </li>
    <li className={styles.navigationItem}>
      <Link className={styles.navigationLink} to="/blog/">Blog</Link>
    </li>
  </ul>
</nav>
