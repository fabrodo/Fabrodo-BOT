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

  if (msg.content.toLowerCase() === 'bende iyi') {
    msg.reply('Hep Böyle Kal :)');
  }
  
  if (msg.content.toLowerCase() === 'ben kötüyüm') {
    msg.reply('Üzme Kendini, Geçer');
  }
  
  if (msg.content.toLowerCase() === 'bende kötüyüm') {
    msg.reply('Üzme Kendini, Geçer');
  }
 
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('Güzel senden naber ?');
  }
 
  if (msg.content.toLowerCase() === 'nbr') {
    msg.reply('Güzel senden naber ?');
  }

  if (msg.content.toLowerCase() === 'havalar çokmu soğuk') {
    msg.reply('Havalar çok soğuk Gladyatör bot üşüyor');
  }

  if (msg.content.startsWith(oc)) {
    msg.reply('Küfür Etmemelisin!!');
  }
  if (msg.content.startsWith(amk)) {
    msg.reply('Küfür Etmemelisin!!');
  }

  if (msg.content.startsWith(oç)) {
    msg.reply('Küfür Etmemelisin!!');
  }
  client.user.setStatus('dnd')
  client.user.setGame('Geliştirme Aşamasındayım :)', 'https://www.twitch.tv/jahrein');

  if (msg.content.startsWith(ananı sikerim)) {
    msg.reply('Küfür Etmemelisin!!');
  }

});
 
client.login(process.env.BOT_TOKEN);
