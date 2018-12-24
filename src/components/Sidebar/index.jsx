import React, { PureComponent } from 'react'

import styles from './Sidebar.module.scss'

class Sidebar extends PureComponent {
  render () {
    const { children } = this.props

    return (
      <aside className={styles.Sidebar}>
        {children}
      </aside>
    )
  }
}

export default Sidebar
