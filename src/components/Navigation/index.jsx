import React, { PureComponent } from 'react'
import classNames from 'classnames'
import Link from 'gatsby-link'

import styles from './Navigation.module.scss'

class Navigation extends PureComponent {
  render () {
    return (
      <nav className={styles.Navigation}>
        <Link className={styles.NavigationItem} to="/">
          Blog
        </Link>
        <Link className={styles.NavigationItem} to="/about">
          About
        </Link>
        <a className={classNames(styles.NavigationItem, styles.twitter)} href="https://twitter.com/KebabYusuf">
          @KebabYusuf
        </a>
      </nav>
    )
  }
}

export default Navigation
