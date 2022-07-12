import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ReadMore from "../components/read-more"
import Layout from "../components/layout"
import shareImage from "../../content/assets/default-content-image.jpg"

const Index = ({ data }) => {
  
  // const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl
  // useEffect(() => {
  //   navigate('/watch-form/');
  // })

  return (
    <div>
      <SEO title="Welcome" description={siteDescription} image={siteUrl + shareImage} url={siteUrl + "/"} />
      <Layout>
      <h1>Coming Soon!</h1>
      {/* <ReadMore displayCount={6} isHome={true} /> */}
      </Layout>
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
