const Discord = require('discord.js');
const client = new Discord.Client();

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

});
 
client.login(process.env.BOT_TOKEN);
