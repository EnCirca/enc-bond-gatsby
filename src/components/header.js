import React from "react"
// import EncHelper from "../../src/components/encHelper"
import logo from "../../content/assets/bond-logo.png"
import styles from "./header.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )

    const siteTitle = site.siteMetadata.title

    return (
        <header className={styles.siteHeader}>
            <nav>
                <ul className={styles.menu}>
                    <li className={styles.logo}>
                        <a href="/">
                          <img src={logo} alt={siteTitle} title={siteTitle} />
                        </a>
                    </li>
                    {/* <li className={styles.item}><a href="/faq">FAQ</a></li>
                    <li className={styles.item}><a href="/watch-form">Watch Request</a></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header