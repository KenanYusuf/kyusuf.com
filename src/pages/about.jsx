import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Center from '../components/Center'
import Profile from '../components/Profile'
import Button from '../components/Button'
import Hero from '../components/Hero'
import Spread from '../components/Spread'
import Prose from '../components/Prose'
import Sidebar from '../components/Sidebar'

class About extends PureComponent {
  render () {
    return (
      <Layout>
        <Helmet title="About me" />

        <Center>
          <Hero
            heading="About me"
          />

          <Spread>
            <Sidebar>
              <Profile />
            </Sidebar>

            <Prose>
              <p>My name is Kenan Yusuf and I am a Front-end Developer based in London.</p>
              <p>I like experimenting with web technologies, including CSS, ES6, React and more.</p>
              <p>In July 2018, I launched a community site called <a href="https://codier.io">Codier</a> for developers to explore and attempt front-end coding challenges. The site has a code playground built into it so that users can experiment and share their creations.</p>
              <p>If for some reason you care what I have to say, <a href="https://twitter.com/KebabYusuf">follow me on Twitter</a>.</p>
              <h2>Want to get in touch?</h2>
              <Button href="mailto:kenan.m.yusuf@gmail.com">Send me an email</Button>
            </Prose>
          </Spread>
        </Center>
      </Layout>
    )
  }
}

export default About
