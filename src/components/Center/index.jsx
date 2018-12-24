import React, { PureComponent } from 'react'
import classNames from 'classnames'

import styles from './Center.module.scss'

class Center extends PureComponent {
  render () {
    const { children, type } = this.props

    return (
      <div className={classNames(styles.Center, type && styles[type])}>
        {children}
      </div>
    )
  }
}

export default Center
