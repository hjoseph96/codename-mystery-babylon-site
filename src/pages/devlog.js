import React from "react"
import { Link, graphql } from "gatsby"
import loadable from '@loadable/component'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Navbar from "../components/Navbar"
import SearchPosts from "../components/searchPosts"
import BackHomeLogo from '../components/BackHomeLogo'

import '../scss/devlog.scss';

const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));

class Devlog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <div className="devlog">
        <SEO
          title="Devlog"
          keywords={[
            `Codename`,
            `Mystery`,
            `Babylon`,
            `SRPG`,
            `Fire Emblem`,
            `Shining Force`,
            `Indie`,
            `Game`,
            `Tactical`,
            `RPG`,
            `Occult`
          ]}
        />

        <PurpleSmoke />
        <BackHomeLogo />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          <Bio />
          <SearchPosts
            posts={posts}
            localSearchBlog={localSearchBlog}
            navigate={navigate}
            location={location}
          />
        </Layout>
      </div>
    )
  }
}

export default Devlog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
