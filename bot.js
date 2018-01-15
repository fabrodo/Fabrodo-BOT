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
 
 client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Seni kim tasarladı') {
    msg.reply('Fabrodo#5516 Beni Tasarladı Onu Arkadaş Olarak Ekleyebilirsin!');
  }
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply('Aaaa Çok Ayıp!!');
  }
  
  client.user.setStatus('dnd')
  client.user.setGame('Beni Fabrodo Yarattı :)', 'https://www.twitch.tv/jahrein');
  
});
 
client.login(process.env.BOT_TOKEN);
