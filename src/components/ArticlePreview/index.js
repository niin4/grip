import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ article }) => <div className={styles.preview}>
  <Img alt="" sizes={article.heroImage.sizes} />
  <h3 className={styles.previewTitle}>
    <Link className={styles.link} to={`/blog/${article.slug}`}>{article.title}</Link>
  </h3>
  <small>{article.publishDate}</small>
  <div
    dangerouslySetInnerHTML={{
      __html: article.description.childMarkdownRemark.html
    }} />
</div>
