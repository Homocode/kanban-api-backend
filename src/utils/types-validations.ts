const isString = (string: string | any): boolean => {
  let returnValue: boolean = false
  if (typeof string === 'string' || string instanceof String) {
    returnValue = true
  }
  return returnValue
}

const isBoolean = (boolean: boolean | any): boolean => {
  let returnValue: boolean = false
  if (typeof boolean === 'boolean' || boolean instanceof Boolean) {
    returnValue = true
  }
  return returnValue
}

export { isString, isBoolean }
