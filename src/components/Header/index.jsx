import React, { PureComponent } from 'react'
import Link from 'gatsby-link'

import Navigation from '../Navigation'
import styles from './Header.module.scss'

class Header extends PureComponent {
  render () {
    return (
      <header className={styles.Header}>
        <h1 className={styles.HeaderTitle}>
          <Link to="/">
            Kenan Yusuf
          </Link>
        </h1>
        <Navigation />
      </header>
    )
  }
}

export default Header
