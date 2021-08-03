const Discord = require('discord.js');

const client = new Discord.Client();
require('dotenv').config();
const prefix = '-';
const id_channel = process.env.ID_CHANNEL;
const id_message_uni = process.env.ID_MESSAGE_UNI;
const id_serv = process.env.ID_SERV;
const id_message_anciens = process.env.ID_MESSAGE_ANCIENS;

//id role 
const hanyang_role = "813712419007234090" ;
const inha_role = "813712674771697665" ;
const chungang_role = "813712613346902068";
const skku_role = "813713401641566238";
const seoultech_role = "813713484793511967";
const kumoh_role = "813713287484932106";
const ancient_role = "818779490687778818";

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
    client.guilds.cache.find(guild =>guild.id === id_serv).channels.cache.find(channel => channel.id === id_channel).messages.fetch(id_message_uni).then(message =>{
        
        console.log("message choix université ajouté");
        message.react('1️⃣');
        message.react('2️⃣');
        message.react('3️⃣');
        message.react('4️⃣');
        message.react('5️⃣');
        message.react('6️⃣');
    }).catch(err =>{
        console.log("ERROR" + err);
    })
    
    client.guilds.cache.find(guild =>guild.id === id_serv).channels.cache.find(channel => channel.id === id_channel).messages.fetch(id_message_anciens).then(message =>{
        
        console.log("message ancien ajouté");
        message.react('🧓');
        
    }).catch(err =>{
        console.log("ERROR" + err);
    })
    
})

client.on('messageReactionAdd',(reaction,user) =>{
    console.log("Reaction ajouté");
    if(reaction.message.id === id_message_uni && !user.bot){
        if(reaction.emoji.name === '1️⃣'){ //Hanyang
           var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
           
           member.roles.add(hanyang_role).then(mbr => {
               console.log("Role attribué avec succès pour " + mbr.displayName);
           }).catch(() => {
               console.log("Role pas attribué");
           });
        } else if(reaction.emoji.name === '2️⃣'){ //Inha
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(inha_role).then(mbr => {
                console.log("Role attribué avec succès pour " + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            });
         }else if(reaction.emoji.name === '3️⃣'){ //Chung-Ang
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(chungang_role).then(mbr => {
                console.log("Role attribué avec succès pour "
                 + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            }); 
        }
        else if(reaction.emoji.name === '4️⃣'){ //SKKU
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(skku_role).then(mbr => {
                console.log("Role attribué avec succès pour " + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            }); 
        }else if(reaction.emoji.name === '5️⃣'){ //Seoultech
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(seoultech_role).then(mbr => {
                console.log("Role attribué avec succès pour " + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            }); 
        }else if(reaction.emoji.name === '6️⃣'){ //Kumoh
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(kumoh_role).then(mbr => {
                console.log("Role attribué avec succès pour " + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            }); 
        }

            if(!user.bot){
            reaction.users.remove(user.id);}
            
        
    }
    if(reaction.message.id === id_message_anciens && !user.bot){
        if(reaction.emoji.name === '🧓'){ //anciens
           var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
           
           member.roles.add(ancient_role).then(mbr => {
               console.log("Role attribué avec succès pour " + mbr.displayName);
           }).catch(() => {
               console.log("Role pas attribué");
           });
        }
        if(!user.bot){
            reaction.users.remove(user.id);}
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
    }else if(command == 'help' || command == 'Help' || command == 'Commands' || command == 'Command'|| command == 'commands' || command == 'command'){
        client.command.get('help').execute(message,args);
    }else if(command == 'tennis' || command == 'Tennis' ){
        client.command.get('tennis').execute(message,args);
    }
   
});

client.login(process.env.TOKEN);