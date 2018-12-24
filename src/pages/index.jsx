import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Article from '../components/Article'
import Center from '../components/Center'

const Index = () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        articles: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: {regex : "\/post/"} }
        ) {
          edges {
            node {
              frontmatter {
                date
                title
                thumbnail
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Center type="large">
          <Hero
            heading="👋 Hey there!"
            text={`I'm Kenan, founder of <a href="https://codier.io">Codier</a> and enthusiast of web&nbsp;technologies.`}
            ctaText="Read more"
            ctaLink="/about"
          />

          <Grid>
            {data.articles.edges.map((article, i) => (
              <Article
                key={`article-${i}`}
                title={article.node.frontmatter.title}
                date={article.node.frontmatter.date}
                path={article.node.fields.slug}
                image={article.node.frontmatter.thumbnail}
              />
            ))}
          </Grid>
        </Center>
      </Layout>
    )}
  />
)

export default Index
