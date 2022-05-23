import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const queryString = require('querystring')
const DiscordBayarea = () => {
  const router = useRouter()
  const code = router.query.code

  const addToGuild = async (resp, res) => {
    const access_token = resp.data.access_token
    const user_id = res.data.id
    router.push(`https://discordapp.com/channels/${process.env.GUILD_ID}/974089419533467728`)
    fetch(`/api/discord?userid=${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(access_token),
    })
  }

  const getUserInfo = (resp) => {
    const config = {
      headers: {
        'authorization': `Bearer ${resp.data.access_token}`
      } 
    }
    axios.get(`https://discord.com/api/users/@me`, config)
    .then(res => {
      addToGuild(resp, res)
      // console.log(res);
    })
    .catch(e => {
      console.log(e);
    })
  }

  const getToken = () => {
    const data = {
      'client_id': process.env.DISCORD_CLIENT,
      'client_secret': process.env.DISCORD_SECRET,
      'code': code,
      'grant_type': 'authorization_code',
      'redirect_uri': 'https://next-js-test-luka.vercel.app/discord/bayarea',
      'scopes': 'identify email connections guilds.join'
    }
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
    axios.post(`https://discord.com/api/oauth2/token`, queryString.stringify(data), config)
    .then(resp => {
      getUserInfo(resp)
      // console.log('getToken:',resp)
    })
    .catch(e => {
      console.log(e);
    })
  }

  if(code) {
    getToken();
  }
  return (
    <div>
    </div>
  )
}

export default DiscordBayarea
