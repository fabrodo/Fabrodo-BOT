const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Bot ${client.user.tag} adı ile giriş yaptı!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
 
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam :raised_hand:');
  }
 
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm Selam :raised_hand:');
  }
 
  if (msg.content.toLowerCase() === 'sea') {
    msg.reply('Aleyküm Selam :raised_hand:');
  }
 
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('Güzel');
  }
 
  if (msg.content.toLowerCase() === 'havalar çokmu soğuk') {
    msg.reply('Havalar çok soğuk Gladyatör bot üşüyor');
  }
 
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İyidir Senden Naber? :blush:');
  }

  client.user.setStatus('dnd')
  client.user.setGame('Kendimi Çok Seviyorum', 'https://www.twitch.tv/jahrein');

});
 
client.login(process.env.BOT_TOKEN);
