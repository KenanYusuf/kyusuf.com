import React, { PureComponent } from 'react'

import styles from './Grid.module.scss'

class Grid extends PureComponent {
  render () {
    const { children } = this.props

    return (
      <div className={styles.Grid}>
        {children}
      </div>
    )
  }
}

export default Grid
