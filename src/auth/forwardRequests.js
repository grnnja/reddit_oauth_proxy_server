const axios = require('axios')

module.exports = (config, callback) => {
  console.log('body:\t', config)
  axios(config)
    .then((response) => {
      callback(response)
    }).catch((error) => {
      console.log('Error:', error)
      callback(error.response)
    })
  return (
    'Retrieving Data...'
  )
}