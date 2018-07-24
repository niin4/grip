import React from 'react'
import styles from './article-preview-section.module.css'
import ArticlePreview from '../components/article-preview'


export default ({ title, posts }) => <div className={styles.wrapper}>
  <h2 className={styles.sectionHeadline}>{title}</h2>
  <ul className={styles.articleList}>
    {posts.map(({ node }) => <li key={node.name}>
      <ArticlePreview article={node} />
    </li>
    )}
  </ul>
</div>
