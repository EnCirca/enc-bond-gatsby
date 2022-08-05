import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import shareImage from "../../content/assets/default-content-image.jpg"
import Checkout from "../components/widgets/checkout"


const Watch = ({ data }) => {
  
  // const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <div>
      <SEO title="Welcome" description={siteDescription} image={siteUrl + shareImage} url={siteUrl + "/"} />
      <Layout>
        <div id="bond-check-container">
          <Checkout partnerId="62e14223d4c9c41e47688e00" defaultTld="bond" tldSuggestions="" />
        </div>
      </Layout>
    </div>
  )
}

export default Watch

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        siteUrl
      }
    }
  }
`
