import React from 'react'
import Layout from '../components/layout'
import Checkout from '../components/widgets/checkout'
import { graphql } from 'gatsby'

export default function EncPageDetails({data}) {
    const { html } = data.markdownRemark
    const { partnerId} = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className="enc-main">
              <div className="enc-html">
                  <div className="enc-widget-container enc-checkout-widget-container">
                    <Checkout partnerId={partnerId} />
                  </div>
                  <div className="enc-html" dangerouslySetInnerHTML={{__html: html}} />
              </div>
            </div>
        </Layout>
    )
} 

export const query = graphql`
query EncPagesCheckout($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      tld
      pageType
      partnerId
    }
  }
}
`
