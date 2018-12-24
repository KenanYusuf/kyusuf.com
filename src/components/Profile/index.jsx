import React, { PureComponent } from 'react'

import styles from './Profile.module.scss'

class Profile extends PureComponent {
  render () {
    return (
      <div className={styles.Profile}>
        <img
          src="/images/profile.jpg"
          alt="Kenan Yusuf"
        />
      </div>
    )
  }
}

export default Profile
