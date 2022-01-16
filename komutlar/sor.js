const Discord = require("discord.js");
const get = require("request")
exports.run = async (client, message, args) => {
let soru = args.join(' ');
if(!soru) return message.reply(' **Sohbet Edelimmi ?** `, Birşey yaz :)`')
let encodedsoru = encodeURI(soru)
get(`https://api.codare.fun/sor/${encodedsoru}`, async function (err, resp, body) { 
body = JSON.parse(body); 
if(err) return message.channel.send('**Hata oluştu Eror Verdim Yapma Bi Daha**')
message.channel.send(body.cevap)
    }) 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sor", 'bot', 'Bot', "<@botid>",'s','konus','k','Bot prefix yazınca<prefix><prefix> sa yaznca olr ğ'],//bot id yazan yere <@botid> yazarsanız Prefix yazıp yapısık botu etiketlerseniz olur 
  //örnek: <prefix><botetiket> sa
  permLevel: 0
};

exports.help = {
  name: "sor",
  description: "bota soru sorarsınız",
  usage: "sor"
};