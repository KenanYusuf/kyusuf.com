import React, { PureComponent } from 'react'

import styles from './Spread.module.scss'

class Spread extends PureComponent {
  render () {
    const { children } = this.props

    return (
      <div className={styles.Spread}>
        {children}
      </div>
    )
  }
}

export default Spread
