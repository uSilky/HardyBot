const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {

  console.log(`BOT ON!`); 

});

client.login(config.token);

client.on("message", async message => { 

    if(message.author.bot) return;
    
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "anunciar") {
      message.delete().catch(O_o=>{});
        if (message.member.hasPermission('MANAGE_GUILD')) {  
               
            let mensg = args.join(" ");
            if(!mensg)
               return message.channel.send("Digite uma mensagem de aviso!")
               
            const anuncio = new Discord.RichEmbed()
               .setColor("#555D50")
               .setAuthor("Anúncio", "https://cdn.discordapp.com/emojis/460264772869554176.gif")
               
               .setDescription(mensg)
               
               .setTimestamp()
               .setFooter(`Hardy Anuncio`, message.author.avatarURL)
            
            message.channel.send("@everyone", anuncio)
    
    }
}
});
