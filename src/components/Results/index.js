import "./Results.styl"
import Container from "components/Container"
import If from "components/If"
import hero from "../../images/hero.png"
import plants from "../../services/index"

const Results = () => {
  const mock = true

  return (
    <Container>
      <div className="no-results-wrapper">
        <If
          condition={mock}
          renderIf={
            <section className="no-results">
              <h1 className="title">No results yet...</h1>
              <p className="text">
                Use the filters above to find the plant that best fits your
                enviornment :)
              </p>
              <img src={hero} alt="plants-background" className="plants-img" />
            </section>
          }
        />
      </div>
    </Container>
  )
}

export default Results
