const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';
const id_channel = "813722716175335474";
const id_message = "813724982130507816";


//id role is
const hanyang_role = "813712419007234090" ;
const inha_role = "813712674771697665" ;
const chungang_role = "813712613346902068";
const skku_role = "813713401641566238";
const seoultech_role = "813713484793511967";
const kumoh_role = "813713287484932106";

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
    client.guilds.cache.find(guild =>guild.id === "813711622010830868").channels.cache.find(channel => channel.id === id_channel).messages.fetch(id_message).then(message =>{
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
    
    
    
})

client.on('messageReactionAdd',(reaction,user) =>{
    console.log("Reaction ajouté");
    if(reaction.message.id === id_message && !user.bot){
        if(reaction.emoji.name === '1️⃣'){ //Hanyang
           var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
           
           member.roles.add('813712419007234090').then(mbr => {
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
                console.log("Role attribué avec succès pour " + mbr.displayName);
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

client.login('ODE1NjM3NDA3MTkzMTA0Mzk0.YDvThw.8qTcgsDhxMP5cmCTh0xeLrKAyf8');