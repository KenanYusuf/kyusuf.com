import React, { PureComponent } from 'react'
import Link from 'gatsby-link'

import styles from './Button.module.scss'

class Button extends PureComponent {
  render () {
    const { children, href, to } = this.props

    const attributes = {
      className: styles.Button
    }

    if (href) {
      return (
        <a href={href} {...attributes}>
          {children}
        </a>
      )
    } else if (to) {
      return (
        <Link to={to} {...attributes}>
          {children}
        </Link>
      )
    } else {
      return (
        <button {...attributes}>
          {children}
        </button>
      )
    }
  }
}

export default Button
