import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bot ${process.env.BOT_TOKEN}`
    }
  }
  const data = {
    'access_token': req.body,
    'roles': ['976723312870838272']
  }
  axios.put(`https://discord.com/api/guilds/973745161173606451/members/${req.query.userid}`, data, config)
  .then(resp => {
    if (resp.status === 201) {
      console.log(`Response: ${resp.status}`);
      res.status(200)
    }
    if (resp.status === 204) {
      console.log(`Response: Alredy In!!`);
      res.status(200)
    }
  })
  .catch(e => {
    console.log(e);
    res.status(500)
  })
  return res
}
export default handler;
