import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import shareImage from "../../content/assets/default-content-image.jpg"
import Checkout from "../components/checkout"

const Watch = ({ data }) => {
  
  // const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <div>
      <SEO title="Welcome" description={siteDescription} image={siteUrl + shareImage} url={siteUrl + "/"} />
      <Header />
      <h1>Watch</h1>
      <Checkout />
      <Footer />
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
