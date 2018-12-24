import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

import styles from './Article.module.scss'

class Article extends PureComponent {
  render () {
    const { title, date, image, path } = this.props

    return (
      <article className={styles.Article}>
        <Link className={styles.ArticleInner} to={path}>
          <div className={styles.ArticleImage}>
            <img src={image} alt="" />
          </div>
          <div className={styles.ArticleContent}>
            <h3 className={styles.ArticleTitle}>{title}</h3>

            <time className={styles.ArticleDate} dateTime={date}>
              {moment(date).format('D MMMM YYYY')}
            </time>
          </div>
        </Link>
      </article>
    )
  }
}

export default Article
