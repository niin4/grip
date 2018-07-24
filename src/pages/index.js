import React from 'react'
import get from 'lodash/get'
import Hero from '../components/hero'
import MovePreviewSection from '../components/move-preview-section'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulMove.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Hero person={author} />
        <MovePreviewSection posts={posts} title="Recent" />
      </div>
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
            sizes(maxWidth: 600) {
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
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
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
