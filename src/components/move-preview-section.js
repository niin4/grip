import React from 'react'
import styles from './article-preview-section.module.css'
import MovePreview from '../components/move-preview'


export default ({ title, posts }) => <div className={styles.wrapper}>
  <h2 className={styles.sectionHeadline}>{title}</h2>
  <ul className={styles.articleList}>
    {posts.map(({ node }) => <li key={node.name}>
      <MovePreview article={node} />
    </li>
    )}
  </ul>
</div>
