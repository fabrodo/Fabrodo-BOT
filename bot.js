const Discord = require('discord.js');
const client = new Discord.Client();
const kufur = ["oç", "oc", "anneni", "ANNENİ", "ananı", "OÇ", "ananı", "Anani", "anani", "piç", "yarrak", "YARRAK", "yarak", "YARAK", "AMCIK", "amcık", "vajina", "ANANI",];
const reklam = ["https://discord.gg/", "https://discord.gg", "discord.gg/", "www.discord.gg/",];
const prefix = "+";

client.on('ready', () => {
console.log(`Bot Sunucuya ${client.user.tag}Adı ile Giriş Yaptı!`);

client.user.setStatus('dnd')
client.user.setGame('ᴢᴇʀᴏ ✪ Team !  ', 'https://www.twitch.tv/jahrein');
});

client.on("message", message => {

if (reklam.some(word => message.content.includes(word)) ) {
message.reply("**Bu Suncuda** `Reklam` **Yapmak Yasaktır !** ")
message.delete()
}

});

client.on("message", message => {

if (kufur.some(word => message.content.includes(word)) ) {
message.reply("**Bu Sunucuda Şahsi Olarak ** `Küfür` **Etmek Yasaktır !**")
message.delete()
}

});

client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (command === 'yaz') {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Bu Özelliği Sadece **Üyeleri Engelle** Yetkisi Olanlar Kullana Bilir!');
const sayMessage = args.join(" ");
message.delete().catch(O_o=>{}); 
message.channel.send(sayMessage);
}

if (message.content === 'ping') {
message.reply('Pong!');
}

if (message.content.toLowerCase() === 'zero') {
message.reply('**Efendim** ?');
}

if (message.content.toLowerCase() === 'zero prefix') {
message.reply('**Prefix** `+`');
}
if (message.content.toLowerCase() === "sa") {
message.reply("**Aleyküm Selam!**")
}
if (message.content.toLowerCase() === "Sea") {
message.reply("**Aleyküm Selam!**")
}

if (message.content.toLowerCase() === "sea") {
message.reply("**Aleyküm Selam!**")
}

if (message.content.toLowerCase() === "Selamun Aleyküm") {
message.reply("**Aleyküm Selam!**")
}

if (message.content.toLowerCase() === "selamun aleyküm") {
message.reply("**Aleyküm Selam!**")
}

if (message.content.toLowerCase() === "Selamun aleyküm") {
message.reply("**Aleyküm Selam!**")
}

if (message.content.toLowerCase() === "selamın aleyküm") {
message.reply("**Aleyküm Selam!**")
}

if (message.content.toLowerCase() === "Selamın aleykum") {
message.reply("**Aleyküm Selam!**")
}
if (message.content.toLowerCase() === "Selamın Aleykum") {
message.reply("**Aleyküm Selam!**")
}

if (message.content.toLowerCase() === "selamlar") {
message.reply("**Aleyküm Selam!**")
}
if (message.content.toLowerCase() === 'bende iyi') {
message.reply('**Hep, Böyle Kal **');
}

if (message.content.toLowerCase() === 'iyiyim') {
message.reply('**Hep, Böyle Kal **');
}

if (message.content.toLowerCase() === 'iyi') {
message.reply('**Hep, Böyle Kal **');
}

if (message.content.toLowerCase() === 'ben kötüyüm') {
message.reply('**Üzme, Kendini Geçer **');
}

if (message.content.toLowerCase() === 'kötüyüm') {
message.reply('**Üzme, Kendini Geçer **');
}

if (message.content.toLowerCase() === 'kötü') {
message.reply('**Üzme, Kendini Geçer **');
}

if (message.content.toLowerCase() === 'bende kötüyüm') {
message.reply('**Üzme, Kendini Geçer **');
}

if (message.content.toLowerCase() === 'naber') {
message.reply('**Güzel, Senden Naber ?**');
}

if (message.content.toLowerCase() === 'nbr') {
message.reply('**Güzel, Senden Naber ?**');
}

if (message.content.toLowerCase() === "tos") {
message.reply("`Town Of Salem` **Oynayacak Takım Arkadaşı Arıyor ! **")
}
if (message.content.toLowerCase() === "pubg") {
message.reply("`PUBG` **Oynayacak Takım Arkadaşı Arıyor ! **")
}
if (message.content.toLowerCase() === "lol") {
message.reply("`League Of Legends` **Oynayacak Takım Arkadaşı Arıyor ! **")
}
if (message.content.toLowerCase() === "csgo") {
message.reply("`CS:GO` **Oynayacak Takım Arkadaşı Arıyor ! **")
}
if (message.content.toLowerCase() === "brawhalla") {
message.reply("`Brawlhalla` **Oynayacak Takım Arkadaşı Arıyor ! **")
}
if (message.content === prefix + "sunucubilgi") {
	
const embed = new Discord.RichEmbed()

.addField("Sunucu Adı", message.guild.name, true)

.addField("Sunucu ID", message.guild.id, true)

.addField("Sunucu Sahibi", message.guild.owner, true)

.addField("Toplam Üye Sayısı", message.guild.memberCount, true)

.addField("AFK Süresi", message.guild.afkTimeout, true)

.setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

.setColor(0xff0000)

return message.channel.sendEmbed(embed)
}

if (message.content === prefix + "bilgi") {
const embed = new Discord.RichEmbed()

.addField("Bot Sahibi", `<@${owner}>`, true)

.addField("Version", "0.0.2", true)

.addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

.addField("Toplam Kullanıcı Sayısı", bot.users.size, true)

.addField("Toplam Kanal Sayısı", bot.channels.size, true)

.addField("Kitaplık Türü", "discord.js")

.setColor(0x000001)

return message.channel.sendEmbed(embed)
}



});

client.login(process.env.BOT_TOKEN);
