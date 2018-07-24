import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import Navigation from '../components/navigation'
import fonts from './font-face.css'

class Template extends React.Component {
  render() {
    const { children } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Container>
        <Helmet defaultTitle={siteTitle}
          titleTemplate={`%s | ${siteTitle}`} />
        <Navigation />
        {children()}
      </Container>
    )
  }
}

export default Template

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

