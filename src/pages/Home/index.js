import React from "react"
import Button from "../../components/Button"
import Container from "../../components/Container"
import Logo from "../../components/Logo"
import "./Home.styl"

const Home = () => {
  return (
    <Container>
      <main className="home">
        <div className="content-wrapper">
          <Logo />
          <h1>Find your next green friend</h1>
          <Button dark rightArrow text="start quiz" />
        </div>
        <div className="img-wrapper">
          <div className="bg-image"></div>
        </div>
      </main>
    </Container>
  )
}

export default Home
