import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from 'components/Layout'

class Page404 extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">404 Not found</h2>
            <p>Oops, nothing here!</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page404
