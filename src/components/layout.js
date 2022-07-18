import React from "react"
import Header from "./header"
import Footer from "./footer"
import EncHelper from "../components/encHelper"
import MobileNav from "./menu"

const Layout = ({ children }) => {
  return (
    <div>
      <div id="outer-container">
      <MobileNav />
      <div id="page-wrap">
        <Header />
          <main>{children}</main>
        <Footer />
      </div>
      <EncHelper />
      </div>
    </div>
  )
}

export default Layout
