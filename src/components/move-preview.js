import React from 'react'
import styles from './move-preview.module.css'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ article }) => <div className={styles.preview}>
  <Img sizes={article.mainImage.sizes} />
  <h3 className={styles.previewTitle}>
    {article.name}
  </h3>
  <small>{article.publishDate}</small>
  <p
    dangerouslySetInnerHTML={{
      __html: article.description.childMarkdownRemark.html
    }} />
</div>
