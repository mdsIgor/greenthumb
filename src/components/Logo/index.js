import React from "react"
import "./Logo.styl"
import logo from "../../images/logo.svg"

const Logo = () => {
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Logo
