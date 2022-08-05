import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import shareImage from "../../content/assets/default-content-image.jpg"
import CheckDomain from "../components/widgets/checkDomain"


const Watch = ({ data }) => {
  
  // const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <div>
      <SEO title="Welcome" description={siteDescription} image={siteUrl + shareImage} url={siteUrl + "/"} />
      <Layout>
        <div id="bond-check-container">
          <div id="bond-left">
            <CheckDomain partnerId="62e14223d4c9c41e47688e00" defaultTld="bond" tldSuggestions="" />
          </div>
          <div id="bond-right">
            <h2>
              .bond is where the ﬁnancial and online worlds meet
            </h2>
            <p>
              This premium domain extension is ideal for ﬁnancial service providers, advisers, and 
              investors. .bond links clients to the experts they are looking for, reinforcing a trusted 
              and stable ﬁnancial solution.
            </p>
            <p>
              Using a .bond domain extension sends strong and positive connotations to your visitors 
              and reinforces the beneﬁts clients will receive when working with your ﬁrm. .bond also 
              doubles up as a meaningful extension for those who wish to use it to highlight the 
              special bonds that they have with friends and family.
            </p>
          </div>
          <div id="bond-left">
          <iframe width="488" height="275" src="https://www.youtube.com/embed/ny7H5PRRM2k" title=".bond is Live and Perfect for the Financial Services Industry!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div id="bond-right">
"Linked in Coming Soon"
          </div>
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
