import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import shareImage from "../../content/assets/default-content-image.jpg"
import CheckDomain from "../components/widgets/checkDomain"


const Exact = ({ data }) => {
  
  // const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <div>
      <SEO title="Welcome" description={siteDescription} image={siteUrl + shareImage} url={siteUrl + "/"} />
      <Layout>
        <div id="bond-check-container">
          <div id="bond-left">
            <CheckDomain partnerId="5da73bd237d476790029204c" defaultTld="bond" tldSuggestions="" />
          </div>
          <div id="bond-right">
            Exact Search
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Exact

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
