const {Client,Events, GatewayIntentBits} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessageReactions] });
require('dotenv').config();
const prefix = '-';
const id_channel = process.env.ID_CHANNEL;
const id_serv = process.env.ID_SERV;

// My id
const my_id = process.env.MY_ID;

// Id log channel
const id_log_channel = '1069908127811637340';
const id_moderation_channel = '1069910049222303844';

//id message
const id_message_createch = '1069692895017324624'
const id_message_roleLOL = '1069692998855692328'
const id_message_yuumi = '1069693404897878078'


//id role 
const supp_role = "1069687295596318801" ;
const mid_role = "1069687269184778260" ;
const jng_role = "1069687202327580794";
const top_role = "1069687176343863347";
const adc_role = "1069687134434361405";
const createch_role = "1069643173950935061";
const intrus_role = "1069643034435780708";
const yuumi_role = "1069645562439282778 ";

const fs = require('fs');



function SendDirectMessage(id_user,message){
    client.guilds.cache.find(guild =>guild.id === id_serv).members.fetch(id_user).then(member =>{
        member.send(message);

    }).catch(err =>{
        console.log("ERROR" + err);
        Error("Server encountered error : " +err);
    })
}

function LogInServer(message){
    client.guilds.cache.find(guild =>guild.id === id_serv).channels.cache.find(channel => channel.id === id_log_channel).send(message);
}

function Error(message){
    LogInServer(message);
}

function LogInModeration(message){
    client.guilds.cache.find(guild =>guild.id === id_serv).channels.cache.find(channel => channel.id === id_moderation_channel).send(message);
    // Then add reaction to the message
    client.guilds.cache.find(guild =>guild.id === id_serv).channels.cache.find(channel => channel.id === id_moderation_channel).messages.fetch().then(messages =>{
        messages.last().react('✅');
        messages.last().react('❌');
    }).catch(err =>{
        console.log("ERROR" + err);
        Error("Server encountered error in adding reaction to moderation message : " +err);

    })
}



client.once('ready',() =>{
    console.log("Bot is online !")
    // send me a message when the bot is online
    // SendDirectMessage(my_id,"Bot is online !")
    LogInServer("Bot is online !")

});

client.once('end',() =>{
    console.log("Bot is offline !")
    // SendDirectMessage(my_id,"Bot is offline !")
    LogInServer("Bot is offline !")
});



client.on('ready',() =>{
    client.guilds.cache.find(guild =>guild.id === id_serv).channels.cache.find(channel => channel.id === id_channel).messages.fetch(id_message_createch).then(message =>{
        
        console.log("message choix createch message ajouté");
        message.react('👍');
        message.react('👎');
    }).catch(err =>{
        console.log("ERROR" + err);
        Error("Server encountered error : " +err);
    })
    
    client.guilds.cache.find(guild =>guild.id === id_serv).channels.cache.find(channel => channel.id === id_channel).messages.fetch(id_message_roleLOL).then(message =>{
        
        console.log("message role ajouté");
        message.react('⬆️');
        message.react('🌴');
        message.react('↗️');
        message.react('⬇️');
        message.react('⛑️');
        
    }).catch(err =>{
        console.log("ERROR" + err);
        Error("Server encountered error : " +err);
    })
    client.guilds.cache.find(guild =>guild.id === id_serv).channels.cache.find(channel => channel.id === id_channel).messages.fetch(id_message_yuumi).then(message =>{
            
            console.log("message yuumi ajouté");
            message.react('🐱');
            
        }).catch(err =>{
            console.log("ERROR" + err);
            Error("Server encountered error : " +err);
        })
    
});

client.on(Events.MessageReactionAdd,async (reaction,user) =>{
    console.log("Reaction ajouté");
    if(reaction.message.id === id_message_roleLOL && !user.bot){
        if(reaction.emoji.name === '⬆️'){ //TOP
           var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
           
           member.roles.add(top_role).then(mbr => {
               console.log("Role attribué avec succès pour " + mbr.displayName);
           }).catch(() => {
               console.log("Role pas attribué");
           });
        } else if(reaction.emoji.name === '🌴'){ //JNG
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(jng_role).then(mbr => {
                console.log("Role attribué avec succès pour " + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            });
         }else if(reaction.emoji.name === '↗️'){ //MID
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(mid_role).then(mbr => {
                console.log("Role attribué avec succès pour "
                 + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            }); 
        }
        else if(reaction.emoji.name === '⬇️'){ //ADC
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(adc_role).then(mbr => {
                console.log("Role attribué avec succès pour " + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            }); 
        }else if(reaction.emoji.name === '⛑️'){ //SUPP
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(supp_role).then(mbr => {
                console.log("Role attribué avec succès pour " + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            }); 
        }

            if(!user.bot){
            reaction.users.remove(user.id);}
            
        
    }
    if(reaction.message.id === id_message_createch && !user.bot){
        if(reaction.emoji.name === '👎'){ // non createch
           var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
           
           member.roles.add(intrus_role).then(mbr => {
               console.log("Role attribué avec succès pour " + mbr.displayName);
           }).catch(() => {
               console.log("Role pas attribué");
           });
        }else if(reaction.emoji.name === '👍'){ // createch
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            SendDirectMessage(member,"Demande de rôle createch en attente de vérification");
            LogInServer("Demande de rôle createch en attente de vérification pour " + member.displayName);
            LogInModeration("Demande de rôle createch en attente de vérification pour " + member.displayName);
            
            }
    
        if(!user.bot){
            reaction.users.remove(user.id);}

    }
    
    // Check if a reaction has been added to a message in the channel moderation
    if(reaction.message.channel.id === id_moderation_channel && !user.bot){
        if(reaction.emoji.name === '✅'){ // accepter createch
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(createch_role).then(mbr => {
                console.log("Role attribué avec succès pour " + mbr.displayName);
            }).catch(() => {
                console.log("Role pas attribué");
            });
            // SendDirectMessage(member,"Demande de rôle createch acceptée");
            LogInServer("Demande de rôle createch acceptée pour " + member.displayName);
            // LogInModeration("Demande de rôle createch acceptée pour " + member.displayName);
        }else if(reaction.emoji.name === '❌'){ // refuser createch
            var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
            // SendDirectMessage(member,"Demande de rôle createch refusée");
            LogInServer("Demande de rôle createch refusée pour " + member.displayName);
            // LogInModeration("Demande de rôle createch refusée pour " + member.displayName);
        }
        if(!user.bot){
            reaction.message.delete();
        }
        //Remove the message
    
    }

    if(reaction.message.id === id_message_yuumi && !user.bot){
        if(reaction.emoji.name === '🐱'){ // yuumi
           var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
           
           member.roles.add(yuumi_role).then(mbr => {
               console.log("Role attribué avec succès pour " + mbr.displayName);
           }).catch(err => {
               console.log("Role pas attribué" + err);
           });
        }
        if(!user.bot){
            reaction.users.remove(user.id);}
    }

    
});



client.on('messageReactionRemove',(reaction,user) =>{
    console.log("Reaction enlevé");
});

// client.on('message', message =>{
//     //Reaction part
   

//     if(!message.content.startsWith(prefix)|| message.author.bot)return;
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
//     if(command === 'ping'){
//         client.command.get('ping').execute(message,args);

//     }else if(command == 'henri' || command == 'Henri' || command == 'Henry'|| command == 'henry'){
//         client.command.get('trolling').execute(message,args);
//     }else if(command == 'help' || command == 'Help' || command == 'Commands' || command == 'Command'|| command == 'commands' || command == 'command'){
//         client.command.get('help').execute(message,args);
//     }else if(command == 'tennis' || command == 'Tennis' ){
//         client.command.get('tennis').execute(message,args);
//     }
   
// });

client.login(process.env.TOKEN);