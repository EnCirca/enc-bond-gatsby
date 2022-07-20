import React from 'react'
import Layout from '../components/layout'
import CheckDomain from '../components/widgets/checkDomain'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import "@fontsource/poppins"
// import CalloutGroupVert from '../components/calloutGroupVert'
// import ContactUsBanner from '../components/contactUsBanner'
import TldPricing from '../components/tldPricing'
// import Faq from '../components/faq'
import TldInfo from '../components/tldInfo'

export default function EncPageDetails({data}) {
    const { title, tld, partnerId, defaultTld, tldSuggestions} = data.markdownRemark.frontmatter
    const defaultHTML = "<h2>Choose the right name to help people find you online.</h2>Register any phrase you want: trademarks, industry keywords, search engine terms, company names, or marketing slogans.  Add a personalized touch with a domain that reflects your industry or your passion. All domain names are awarded on a first-come, first-serve basis, so find the perfect domain today!";
    const {html} = data.markdownRemark;
    const usedHTML = (html ? html : defaultHTML)
    const defaultBottom = ''
    const bottomInfo = (infoBottom ? infoBottom : defaultBottom)
    let titleDisplay = `Register .${tld} domains`;
    if (title) {
      titleDisplay = title;
    }
    return (
      <Layout>
        <div className="enc-main">
          <section className="enc-default-header-section">
            <StaticImage as="div" className="enc-default-header-bg" alt="EnCirca Header" src="../images/banner_img.png" />
            <div className="enc-tld-heading">
              <h2>{titleDisplay}</h2>
            </div>
	          <TldPricing partnerId={partnerId} tld={tld} />
            <CheckDomain partnerId={partnerId} defaultTld={defaultTld} tldSuggestions={tldSuggestions} />
          </section>
          <TldInfo 
            contentLeft={usedHTML}
            contentBottom={bottomInfo}
            tldName ={tld}
            partnerId ={partnerId}
            moreInfo ={moreInfo}
          />
        </div>
      </Layout>
    )
} 

export const query = graphql`
query EncPagesCheckDomain($slug: String) {
  markdownRemark(
    frontmatter: {slug: {eq: $slug}}
  ) {
    html
    frontmatter {
      title
      tld
      pageType
      partnerId
      defaultTld
      tldSuggestions
    }
  }
}
`
