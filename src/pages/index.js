import React from "react"
import { Link } from "gatsby"

import PurpleSmoke from "../components/PurpleSmoke"
import SEO from "../components/seo"
import Button from "../components/button"

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
