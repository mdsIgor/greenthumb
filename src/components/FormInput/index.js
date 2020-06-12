import "./FormInput.styl"

const FormInput = ({ icon, question, options }) => {
  return (
    <section className="form-input">
      <div className="image-wrapper">
        <img src={icon} className="icon" />
      </div>
      <p className="text">{question}</p>
      <select className="select">
        <option className="select-option">Select ...</option>
        {options.map((option) => (
          <option value={option} className="select-option">
            {option}
          </option>
        ))}
      </select>
    </section>
  )
}

export default FormInput
