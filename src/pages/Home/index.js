import React from "react"
import Button from "../../components/Button"
import Container from "../../components/Container"
import Logo from "../../components/Logo"
import hero from "../../../static/images/hero.png"
import "./Home.styl"

const Home = () => {
  return (
    <Container>
      <main className="home">
        <section className="home__heading">
          <div className="logo-wrapper">
            <Logo />
          </div>
          <div className="heading-wrapper">
            <h1 className="home__heading__title">
              Find your next green friend
            </h1>
            <Button text="start quiz" rightArrow dark />
          </div>
        </section>
        <section className="home__hero">
          <img src={hero}></img>
        </section>
      </main>
    </Container>
  )
}

export default Home
