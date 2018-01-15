const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam :raised_hand:');
  }

  client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm Selam :raised_hand:');
  }
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
    msg.reply('Aleyküm Selam :raised_hand:');
  }
  
client.login(process.env.BOT_TOKEN);
