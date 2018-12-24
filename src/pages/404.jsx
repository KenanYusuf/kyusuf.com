import React, { PureComponent } from 'react'

import Layout from '../components/Layout'
import Center from '../components/Center'
import Hero from '../components/Hero'

class NotFound extends PureComponent {
  render () {
    return (
      <Layout>
        <Center>
          <Hero
            heading="Page not found (404)"
            text="There is a good chance that you are here to read a blog post…"
            ctaText="Go to blog"
            ctaLink="/"
          />
        </Center>
      </Layout>
    )
  }
}

export default NotFound
