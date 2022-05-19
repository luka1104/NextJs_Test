require("dotenv").config();

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    TOKEN_URI: process.env.TOKEN_URI,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS
  },
}
