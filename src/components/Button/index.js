import React from "react"
import classNames from "classnames/bind"
import "./Button.styl"

const Button = (props) => {
  const btnClassNames = classNames("button", {
    "button-light": props.light,
    "button-dark": props.dark,
    "button-right-arrow": props.rightArrow,
    "button-left-arrow": props.leftArrow,
  })

  return <button className={btnClassNames}>{props.text}</button>
}

export default Button
