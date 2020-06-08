import { useEffect } from "react"
import envVariablesExample from "./envVariablesExample"
import optionalChainingExample from "hooks/optionalChainingExample"

function complexLogic() {
  const envVariables = envVariablesExample()
  optionalChainingExample()
  useEffect(() => {
    console.log("Loading main complex logic on didMount")
  }, [])

  return { envVariables: JSON.stringify(envVariables) }
}
export default complexLogic
