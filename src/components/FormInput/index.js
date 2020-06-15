import "./FormInput.styl"

const FormInput = ({ icon, question, options, mirrorImg }) => {
  const mirrorClass = mirrorImg ? "mirror" : " "

  return (
    <section className="form-input">
      <div className="image-wrapper">
        <img src={icon} className={`icon ${mirrorClass}`} />
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
