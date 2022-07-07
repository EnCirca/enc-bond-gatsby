import React from "react"
import Header from "./header"
import Footer from "./footer"
import EncHelper from "../components/encHelper"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <EncHelper />
    </div>
  )
}

export default Layout
