import React, { PureComponent } from 'react'
import moment from 'moment'
import Button from '../Button'

import styles from './Hero.module.scss'

class Hero extends PureComponent {
  render () {
    const { image, heading, text, date, comments, ctaText, ctaLink } = this.props

    return (
      <div className={styles.Hero}>
        {image &&
          <img className={styles.HeroImage} src={image} alt="" />
        }

        <div className={styles.HeroContent}>
          <h1 className={styles.HeroHeading}>{heading}</h1>

          {text &&
            <p className={styles.HeroText} dangerouslySetInnerHTML={{ __html: text }} />
          }

          {(date || comments) &&
            <div className={styles.HeroMeta}>
              {date &&
                <time className={styles.HeroDate} dateTime={date}>
                  {moment(date).format('D MMMM YYYY')}
                </time>
              }

              {comments &&
                <a href="#disqus_thread">
                  {comments}
                </a>
              }
            </div>
          }

          {(ctaText && ctaLink) &&
            <Button to={ctaLink}>{ctaText}</Button>
          }
        </div>
      </div>
    )
  }
}

export default Hero
