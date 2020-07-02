import React from "react"
import Container from "../../components/Container"
import PlantForm from "../../components/PlantForm"
import logo from "../../images/logo.svg"

import "./Hero.styl"

const Hero = () => {
  return (
    <Container>
      <div className="hero-wrapper">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Find your next green friend</h1>
        <PlantForm />
      </div>
    </Container>
  )
}

export default Hero
