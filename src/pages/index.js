import React, { useEffect } from "react"
//import React from "react"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import SEO from "../components/seo"
// import ReadMore from "../components/read-more"
import Header from "../components/header"
import Footer from "../components/footer"
// import styles from "./index.module.css"
// import splash from "../../content/assets/splash.jpg"
import shareImage from "../../content/assets/default-content-image.jpg"
//import WatchForm from "../components/watch-form"

const Index = ({ data }) => {
  
  // const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl

  useEffect(() => {
    navigate('/watch-form/');
  })

  return (
    <div>
      <SEO title="Welcome" description={siteDescription} image={siteUrl + shareImage} url={siteUrl + "/"} />
      <Header />
      {/* <ReadMore displayCount={6} isHome={true} /> */}
      <Footer />
    </div>
  )
}

export default Index

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
