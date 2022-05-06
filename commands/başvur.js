const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const botid = args[0]
const prefix = args[1]



if(botid) return message.channel.send('Lütfen botun idsini girin!')
if(prefix) return message.channel.send('Lütfen botun prefixini girin!')

    const basvurualindi = new Discord.MessageEmbed()
    .setColor('#5865F2')
    .setAuthor(client.weasley.botlistadi)
.setDescription(`Merhaba! Botunuz olan <@${botid}> adlı botunuzun talebi alındı. Lütfen test sürecinde herhangi bir yetkiliyi etiketlemeyin. Bu süreci azaltmaz!`)
    message.author.send(basvurualindi)
        const sendlog = new Discord.MessageEmbed()
    .setColor('#5865F2')
    .setAuthor(client.weasley.botlistadi)
.addField('Bot', `<@${botid}> (${botid})`, true)
.addField('Kullanıcı', `<@${message.author}> (${message.author.id})`, true)
.addField('Prefix', `${prefix}`, false)
.addField('Ekle', `[0 Perm](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, false)
    client.channels.cache.get(client.weasley.modlogkanal).send(`<@&${client.weasley.botkontrolcusurolu}>`, sendlog, false)
    message.delete({timeout: 10000}); message.reply("Başarılı!").then(x => x.delete({timeout: 10000}));
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};
