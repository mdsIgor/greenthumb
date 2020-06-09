import React from "react"
import "./Container.styl"

const Container = (props) => {
  const { children } = props

  return <div className="container">{children}</div>
}

export default Container
