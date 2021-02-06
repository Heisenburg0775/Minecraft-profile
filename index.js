/*
packages

npm i request
npm i discrod.js

*/
const Discord = require("discord.js");
const prefix = ";";

bot.once("ready", () => {
  console.log("Bot is online");
});

bot.on("message", async message => {
  message.mentions.has(bot.user);

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
   }if (command == 'minecraft-skin'){
    const req = require("request")
    let username = args[0];

    if (!username) return message.channel.send('Please provide a minecraft username');

     

    let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTimestamp(new Date())

    req(`https://api.mojang.com/users/profiles/minecraft/${username}`, async function(err, response, body) {

        if (err) {
            console.log(err);
           return message.channel.send(`Error getting user`);
            return;
        }

        if (!body) {
            return message.channel.send("Please provide a value username");
            return;
        }

        body = JSON.parse(body);

        embed.addField("Username", body.name);
        embed.addField("UUID", body.id);
        embed.addField("Skin", `
        View: [Click-Here](https://minotar.net/skin/${username})
        Download: [Click-Here](https://minotar.net/download/${username})
        `);
        
        embed.setImage(`https://crafatar.com/renders/body/${body.id}`)

        await message.channel.send(embed);
        return;
    });
  
})
bot.login("YOUR_TOKEN");
