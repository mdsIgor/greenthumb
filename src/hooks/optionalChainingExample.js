function optionalChainingExample() {
  const mock = {
    nestedValues: {
      firstKey: "TOP",
    },
  }
  const truthy = mock?.nestedValues?.firstKey
  const falsy = mock?.nestedValues?.showbaLess

  return {
    truthy,
    falsy,
  }
}

export default optionalChainingExample
