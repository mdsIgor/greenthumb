import FormInput from "../FormInput"
import dog from "../../images/dog.png"
import sun from "../../images/sun-icon.png"
import wateringcan from "../../images/wateringcan.png"

const PlantForm = () => {
  return (
    <form>
      <FormInput
        icon={sun}
        question={[
          <b>1. </b>,
          `Set the amount of `,
          <b>sunlight</b>,
          ` your plant will get`,
        ]}
        options={[10, 20, 30]}
      />

      <FormInput
        icon={wateringcan}
        question={[
          <b>2. </b>,
          `How often do you want to `,
          <b>water</b>,
          ` your plant`,
        ]}
        options={[10, 20, 30]}
        mirrorImg
      />

      <FormInput
        icon={dog}
        question={[
          <b>3. </b>,
          `Do you have `,
          <b>pets</b>,
          `? Do they chew plants?`,
        ]}
        options={[10, 20, 30]}
      />
    </form>
  )
}

export default PlantForm
