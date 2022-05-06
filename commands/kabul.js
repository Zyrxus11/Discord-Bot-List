const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
    
            if(message.member.roles.cache.some(r=>[client.weasley.botkontrolcusurolu].includes(r.id)) ) {

    
const botid = args[0]
const prefix = args[1]
    let sebep = args.splice(3).join(" ");


if(botid) return message.channel.send('Lütfen botun idsini girin!')
if(prefix) return message.channel.send('Lütfen botun sahibini girin!')
    let User = client.users.cache.get(args[0]);
                
const sendlog = new Discord.MessageEmbed()
    .setColor('GREEN')
.setDescription(`✅ <@${sebep}> kullanıcısının <@${botid}> botu ${client.weasley.botlistadi} üzerinden onaylandı!`)

const sendlog2 = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`✅ <@${botid}> adlı botunuz ${client.weasley.botlistadi} üzerinden onaylandı!`)
    client.channels.cache.get(client.weasley.onayredkanal).send(`<@${sebep}>`, sendlog, false)
                User.send(sendlog2)
    message.delete({timeout: 10000}); message.reply("Başarılı!").then(x => x.delete({timeout: 10000}));
            }
};

exports.config = {
  name: "kabul-et",
  guildOnly: true,
  aliases: [],
};
