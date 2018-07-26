import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hero from 'components/hero'
import MovePreviewSection from 'components/move-preview-section'
import Layout from 'components/Layout'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulMove.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Hero person={author} />
          <MovePreviewSection posts={posts} title="Recent" />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulMove {
      edges {
        node {
          name
          mainImage {
            sizes(maxWidth: 600, quality: 100) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(limit:1 ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
            sizes(maxWidth: 1600) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`
