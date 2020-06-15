import React from "react"
import Button from "../../components/Button"
import Container from "../../components/Container"
import Logo from "../../components/Logo"
import PlantForm from "../../components/PlantForm"
import Results from "../../components/Results"

import "./Home.styl"

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <Logo />
        <h1 className="title">Find your next green friend</h1>
        <PlantForm />
      </div>

      <Results />
    </>
  )
}

export default Home
