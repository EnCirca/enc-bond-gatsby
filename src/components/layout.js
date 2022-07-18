import React from "react"
import Header from "./header"
import Footer from "./footer"
import EncHelper from "../components/encHelper"
import Menu from "./menu"

const Layout = ({ children }) => {
  return (
    <div>
      <div id="outer-container">
      <Menu />
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
