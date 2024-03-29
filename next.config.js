require("dotenv").config();

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    TOKEN_URI: process.env.TOKEN_URI,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    DISCORD_SECRET: process.env.DISCORD_SECRET,
    DISCORD_CLIENT: process.env.DISCORD_CLIENT,
    BOT_TOKEN: process.env.BOT_TOKEN,
    GUILD_ID: process.env.GUILD_ID,
    ROLE_ID: process.env.ROLE_ID,
    CHANNEL_ID: process.env.CHANNEL_ID
  },
  async redirects() {
    return [
      {
        source: '/nfc/wqx72dbds3tnqnft',
        destination: 'https://discord.gg/MuTHNCrY',
        permanent: false,
      },
    ]
  },
}
