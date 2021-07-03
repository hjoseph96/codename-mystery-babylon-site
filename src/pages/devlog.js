import React from "react"
import { Link, graphql } from "gatsby"
import loadable from '@loadable/component'
import { CookiesProvider } from 'react-cookie';

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
      <CookiesProvider>
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
          <div className="other-devlogs">
            <p>
              Check us out on:
            </p>

            <div className="other-sites">
              <a target="_blank" rel="noreferrer" href="https://feuniverse.us/t/devlog-codename-mystery-babylon-est-late-2021-2022-kickstarter-june-15th/11036">
                <img src="https://feuniverse.us/uploads/default/original/3X/0/2/023677bb9866878fd66792c97736bacb8ce7d86a.png" className="feuniverse" />
              </a>

              <a target="_blank" rel="noreferrer" href="https://forums.tigsource.com/index.php?topic=69415.0">
                <img src="https://ucarecdn.com/e3a3c2a2-e03e-4d4a-a883-c4ebb463ef42/" className="tigsource" />
              </a>
            </div>
          </div>

          <Bio />
          <SearchPosts
            posts={posts}
            localSearchBlog={localSearchBlog}
            navigate={navigate}
            location={location}
          />
        </Layout>
      </div>
      </CookiesProvider>
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
