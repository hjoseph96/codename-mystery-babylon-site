import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Button from "../components/button"

import loadable from '@loadable/component'
const PurpleSmoke = loadable(() => import('../components/PurpleSmoke'));

class IndexPage extends React.Component {
  render() {

    return (
      <>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <PurpleSmoke />
      </>
    )
  }
}

export default IndexPage
