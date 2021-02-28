const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.command.set(command.name, command);
}

client.once('ready',() =>{
    console.log("Bot is online !")
});

client.once('end',() =>{
    console.log("Bot is offline !")
});

client.on('ready',() =>{
    client.guilds.cache.find(guild =>guild.id === "813711622010830868").channels.cache.find(channel => channel.id === "813722716175335474").messages.fetch("813724982130507816").then(message =>{
        console.log("message choix université ajouté");
    }).catch(err =>{
        console.log("ERROR");
    })
})

client.on('messageReactionAdd',(reaction,user) =>{
    console.log("Reaction ajouté");
    if(reaction.message.id === "813724982130507816"){
        if(reaction.emoji.name === "one"){
           var member = reaction.message.guild.member.cache.find(member => member.id === user.id);
           member.roles.add("813712419007234090").then(mbr => {
               console.log("Role attribué avec succès pour" + mbr.displayName);
           }).catch(() => {
               console.log("Role pas attribué");
           });
        } 
    }
})

client.on('messageReactionRemove',(reaction,user) =>{
    console.log("Reaction enlevé");
})

client.on('message', message =>{
    //Reaction part
   

    if(!message.content.startsWith(prefix)|| message.author.bot)return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping'){
        client.command.get('ping').execute(message,args);

    }else if(command == 'henri' || command == 'Henri' || command == 'Henry'|| command == 'henry'){
        client.command.get('trolling').execute(message,args);
    }
});

client.login('ODE1NjM3NDA3MTkzMTA0Mzk0.YDvThw.n4JU9zD0S77Hhc4OQ9dXxdeO6lA');