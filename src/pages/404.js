import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Page404 extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h2 className="section-headline">404 Not found</h2>
          <p>Oops, nothing here!</p>
        </div>
      </div>
    )
  }
}

export default Page404
