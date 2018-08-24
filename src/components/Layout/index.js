import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ErrorHandler from 'components/ErrorHandler'
import Navigation from 'components/navigation'
import fonts from './font-face.css'

export default ({ children }) =>
  <StaticQuery
    query={graphql`
        {
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
      <ErrorHandler>
        {children}
      </ErrorHandler>
    </>
    } />


