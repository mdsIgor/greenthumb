import vars, { CARDS, API_ROOT } from "gatsby-env-variables"
import { useEffect, useState } from "react"

function envVariablesExample() {
  const [envVariables, setEnvVariables] = useState()

  useEffect(() => {
    console.log({ vars, CARDS, API_ROOT })
    setEnvVariables(vars)
  }, [])

  return envVariables
}

export default envVariablesExample
