import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import get from 'lodash/get'
import styles from './blog-post.module.css'
import Layout from 'components/Layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')

    return <Layout location={this.props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={post.title} />
        <div className={styles.hero}>
          <Img alt="" className={styles.heroImage} sizes={post.heroImage.sizes} />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block'
            }} >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html
            }} />
        </div>
      </div>
    </Layout>
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug }) {
        title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1600) {
        ...GatsbyContentfulSizes_withWebp
      }
      }
      body {
        childMarkdownRemark {
      html
    }
  }
}
}
`
