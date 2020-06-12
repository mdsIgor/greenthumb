import FormInput from "../FormInput"
import dog from "../../images/dog.png"
import sun from "../../images/sun-icon.png"
import wateringcan from "../../images/wateringcan.png"

const PlantForm = () => {
  return (
    <form>
      <FormInput
        icon={sun}
        question="1. Set the amount of sunlight your plant will get"
        options={[10, 20, 30]}
      />

      <FormInput
        icon={wateringcan}
        question="2. How often do you want to water your plant"
        options={[10, 20, 30]}
      />

      <FormInput
        icon={dog}
        question="3. Do you have plants? Do they chew plants?"
        options={[10, 20, 30]}
      />
    </form>
  )
}

export default PlantForm
