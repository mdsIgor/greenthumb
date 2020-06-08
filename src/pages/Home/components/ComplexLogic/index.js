import complexLogic from "./hooks"

function ComplexLogic() {
  const { envVariables } = complexLogic()

  return (
    <div>
      <h1>Complex Logic</h1>
      <p>Environment variables:</p>
      <p>{envVariables}</p>
    </div>
  )
}
export default ComplexLogic
