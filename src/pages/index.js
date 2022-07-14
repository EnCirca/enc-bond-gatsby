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
      {/* <div id="altroots-header-image"></div> */}
      <div id="altroots-watch-container">
        <div id="altroots-left">
          <h2>The first trademark search engine for blockchain domains!</h2>
          <strong>We offer two levels of annual trademark watch subscriptions: </strong><br />
          <ol>
            <li><strong>Exacts-only watch.</strong> Includes an initial history report plus on-going watch notices, sent at least monthly. Cost is $59/year.  Report will also include a preview of the comprehensive report below.</li>
            <li><strong>Comprehensive close similarities.</strong> Exacts plus close similarities.  Includes an initial history report plus on-going watch notices, sent at least monthly.  First year cost is $2,000.  Renewals will be $500/year.  <small><i>Note:  The exacts-only subscription must be ordered before upgrading to a comprehensive watch subscription.</i></small></li>
          </ol>  
          <p>AltRoots checks a trademark against nearly 8 million blockchain domains across multiple blockchains using advanced trademark research techniques to unearth close similarities that may be used to infringe, defraud or confuse consumers.</p>
          <strong>Several levels of services are available:</strong>
        </div>
        <div id="altroots-right">
          <h3>To order your exacts-only watch, please complete the form below.</h3>
          <Checkout />
          <p>Altroots is a service of EnCirca, Inc. EnCirca was founded in 2001 in Boston, Massachusetts and is an ICANN-Accredited domain name registrar. EnCirca is a leader in brand protection for both Web2 and Web3 domain names. For more information, please visit <a href="https://www.encirca.com">EnCirca online</a></p>
        </div>
      </div>
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
