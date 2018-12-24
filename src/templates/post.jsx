import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { DiscussionEmbed, CommentCount } from 'disqus-react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Center from '../components/Center'
import Prose from '../components/Prose'
import Spread from '../components/Spread'
import Carbon from '../components/Carbon'
import Sidebar from '../components/Sidebar'

class Post extends PureComponent {
  render () {
    const { location, data } = this.props
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const domain = 'https://kyusuf.com'
    const image = domain + frontmatter.thumbnail

    const disqusProps = {
      shortname: 'kenanyusuf',
      config: {
        url: domain + location.pathname,
        identifier: location.pathname,
        title: frontmatter.title
      }
    }

    return (
      <Layout>
        <Helmet title={frontmatter.title}>
          <meta name="description" content={frontmatter.description} />

          <meta name="og:title" content={frontmatter.title} />
          <meta name="og:description" content={frontmatter.description} />
          <meta name="og:image" content={image} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@KebabYusuf" />
          <meta name="twitter:creator" content="@KebabYusuf" />
          <meta name="twitter:title" content={frontmatter.title} />
          <meta name="twitter:description" content={frontmatter.description} />
          <meta name="twitter:image" content={image} />
        </Helmet>

        <Center>
          <Hero
            image={frontmatter.thumbnail}
            heading={frontmatter.title}
            date={frontmatter.date}
            comments={<CommentCount {...disqusProps} />}
          />

          <Spread>
            <Sidebar>
              <Carbon />
            </Sidebar>

            <Prose>
              {frontmatter.description && <p>{frontmatter.description}</p>}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Prose>
          </Spread>

          <DiscussionEmbed {...disqusProps} />
        </Center>
      </Layout>
    )
  }
}

export default Post

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
        thumbnail
      }
    }
  }
`
