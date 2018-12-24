import React, { PureComponent } from 'react'

import styles from './Prose.module.scss'

class Prose extends PureComponent {
  render () {
    const { children } = this.props

    return (
      <div className={styles.Prose}>
        {children}
      </div>
    )
  }
}

export default Prose
