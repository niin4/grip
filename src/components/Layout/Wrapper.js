import React from 'react'
import styles from './Layout.module.css'

export default ({ children }) => <div className={styles.wrapper}>
  {children}
</div>
