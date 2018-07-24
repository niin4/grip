import React from 'react'
import styles from './hero.module.css'
import Img from 'gatsby-image'

export default ({ person }) => <div className={styles.hero}>
  <Img alt="" className={styles.heroImage} sizes={person.node.image.sizes} />
  <div className={styles.heroDetails}>
    <h3 className={styles.heroHeadline}>{person.node.name}</h3>
    <p className={styles.heroTitle}>{person.node.title}</p>
    <p>{person.node.shortBio.shortBio}</p>
  </div>
</div>

