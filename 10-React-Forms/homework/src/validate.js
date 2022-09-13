export default function validate(input) {
  let error = {}

  if (!input.username) {
    error.username = 'Username is required'
  }

  else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = 'Username is invalid'
  }

  else if (!input.password) {
    error.password = 'Password is invalid'
  }

  else if (!/(?=.*[0-9])/.test(input.password)) {
    error.password = 'Password is invalid'
  }
  return error
}

