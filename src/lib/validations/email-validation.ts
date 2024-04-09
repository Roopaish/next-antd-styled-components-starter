const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const validateEmail = (rule: any, value: any) => {
  if (!value || emailRegex.test(value)) {
    return Promise.resolve()
  }
  return Promise.reject("Please enter a valid email address.")
}
