import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from 'components/container'
import Navigation from 'components/navigation'
import fonts from './font-face.css'

export default ({ children }) =>
  <StaticQuery
    query={graphql`
       query LayoutQuery {
         site {
           siteMetadata {
             title
           }
         }
       }
     `}
    render={data => <>
      <Helmet defaultTitle={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`} />
      <Navigation />
      <div>
        {children}
      </div>
    </>
    }
  />


