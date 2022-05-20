import React from 'react'
import Discord from 'discord.js'

const DiscordBayarea = ({ state }) => {
  const client = new Discord.Client();
  const guildId = '973745161173606451'; //First param from discord web
  const channelId = '974089419533467728'; //Second param from discord web
  const getInviteLink = async () => {
    const p = new Promise((resolve, reject)=>{
      client.on('ready', async () => {
        try {
        const guild = await client.guilds.fetch(guildId);
        const channel = await guild.channels.cache.get(channelId);
        const invite = await channel.createInvite({
          maxUses: 1
        });
        resolve(`https://discord.gg/${invite.code}`);
        } catch(e){
        reject(e);
        }
      });
      client.login('OTc2OTc3Nzg4NTAwMzE2MTgy.Go_uoB.59r24jITF5qaYyEW78Y8r-Uj2O0q31KujSmWBE')
    });
    return p;
  }
  getInviteLink().then(link => console.log(`${link}`))
  console.log(state);
  return (
    <div>
      {state}
      Discord!!
    </div>
  )
}

export default DiscordBayarea
