const Discord = require('discord.js');
const client = new Discord.Client();


var küfür1 = 'amk'
var küfür2 = 'oç'
var küfür3 = 'oc';
var küfür4 = 'ananı sikerim';


client.user.setStatus('dnd')
  client.user.setGame('Geliştirme Aşamasıdayım!', 'https://www.twitch.tv/jahrein');


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

  if (msg.content.startsWith(küfür3)) {
    msg.reply('Küfür Etmemelisin!!');
  }

  if (msg.content.startsWith(küfür1)) {
    msg.reply('Küfür Etmemelisin!!');
  }

  if (msg.content.startsWith(küfür2)) {
    msg.reply('Küfür Etmemelisin!!');
  }

  if (msg.content.startsWith(küfür4)) {
    msg.reply('Küfür Etmemelisin!!');
  }

});
 
client.login(process.env.BOT_TOKEN);
