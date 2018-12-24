import React, { PureComponent, Fragment } from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import Main from './Main'

class Layout extends PureComponent {
  render () {
    const { children } = this.props

    return (
      <Fragment>
        <Helmet
          defaultTitle="Kenan Yusuf"
          titleTemplate="%s | Kenan Yusuf"
        >
          <meta name="creator" content="Kenan Yusuf" />
          <meta name="author" content="Kenan Yusuf" />
          <meta name="publisher" content="Kenan Yusuf" />
          <meta name="description" content="Front-end Developer, founder of Codier and enthusiast of web technologies." />
          <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" />
        </Helmet>

        <Header />

        <Main>
          {children}
        </Main>
      </Fragment>
    )
  }
}

export default Layout
