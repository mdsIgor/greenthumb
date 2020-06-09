import React from "react"
import "./Logo.styl"
import logo from "../../../static/images/logo.svg"

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Logo
