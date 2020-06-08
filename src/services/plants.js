import { API_ROOT } from "gatsby-env-variables"

async function get(cardsSelected = {}) {
  const values = Object.values(cardsSelected)

  const response = await fetch(
    `${API_ROOT}?sun=${values[0]}&water=${values[1]}&pets=false`
  )
  const result = await response.json()

  return result
}

export default {
  get,
}
