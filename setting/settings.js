const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || '' 
//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.owner = "254769772273"
global.developer = "254769772273"
global.bot = ""
global.devname = "Bolen"
global.ownername = process.env.OWNER_NAME ||'Bolen'
global.botname = "Bolen Md"
global.versisc = "2"
global.packname = "⎋Bolen Md"
//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/254769772273"
global.linktele = "https://t.me/SB465starlexConnect"

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.prefix = process.env.BOT_PREFIX ||'.'
global.autoRecording = false
global.autoTyping = false
global.autorecordtype = false
global.autoread = process.env.AUTO_READ || false
global.autobio = false
global.anti92 = false
global.owneroff = false
global.statusview = process.env.AUTO_STATUS || true
global.autoreact = process.env.AUTO_REACT || false
//~~~~~~~~~~~ Settings Thumbnail ~~~~~~~~~~~//
global.thumbbot = "https://imgur.com/a/DGBpl4H"
global.thumbown = "https://imgur.com/a/DGBpl4H"

//~~~~~~~~~~~ Settings Channel ~~~~~~~~~~~//
global.idchannel = "120363402785346228@newsletter*"
global.channelname = "ーJUNE MD UPDATES"
global.channel = "hatsapp.com/channel/0029Vb2W2vAADTOKmdoDxB0m"

//~~~~~~~~~~~ Settings Message ~~~~~~~~~~~//
global.mess = {
  developer: "This feature is for developers only!!",
  owner: " feature is for owners only!",
  group: "This feature is for group chats only!!",
  private: "This feature is for private chats only!",
  admin: "This feature is for admins only!!",
  botadmin: "This feature is for bot admins only!!",
  wait: "Please wait, loading...",
  error: "An error occurred!",
  done: "Process completed!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
