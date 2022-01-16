const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      ""
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
    .addField(
      ` Komutlar`,
      `
 
 | **!sor:** Bot'a soru sorarsınız.
`)



    .addField(
      `  Bilgilendirme`,
      `
 | **Ewing35 kanalına abone olmayı unutmayınız!**.
 | **Abone Olarak Bize Destek Çıkmış Olursunuz.** `
    )
 
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};


exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
