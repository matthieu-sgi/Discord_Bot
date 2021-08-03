module.exports = {
    name: 'help',
    description: 'giving commands help',
    execute(message,args) {
            // const Discord = require('discord.js');
            // const text = new Discord.MessageEmbed()
            // .setTitle("Commands")
            // .setColor('#DAF7A6')
            // .addFields({
            //     name: 'Test',
            //     value: 'Voici la liste des commandes \nVous pouvez jouer au ping-pong en tapant \"-ping\nVous pouvez aussi jouer au tennis en tapant \"-tennis\"\nVous pouvez aussi envoyer des messages d\'amour à Henri en tapant \"-Henri\" '
            // })

            // .addFields(
            //     { name: 'Regular field title', value: 'Voici la liste des commandes \nVous pouvez jouer au ping-pong en tapant \"-ping\nVous pouvez aussi jouer au tennis en tapant \"-tennis\"\nVous pouvez aussi envoyer des messages d\'amour à Henri en tapant \"-Henri\"' },
            //     { name: '\u200B', value: '\u200B' },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            //     { name: 'Inline field title', value: 'Some value here', inline: true },
            // )
            //message.channel.send(text);
            message.channel.send('Voici la liste des commandes \nVous pouvez jouer au ping-pong en tapant \"-ping\"'
                                    +'\nVous pouvez aussi jouer au tennis en tapant \"-tennis\"'
                                    +"\nVous pouvez aussi envoyer des messages d\'amour à Henri en tapant \"-Henri\" ");
            message.channel.send('Si vous voulez rajouter des commandes utiles, vous pouvez contacter Matthieu');
            
    }
}