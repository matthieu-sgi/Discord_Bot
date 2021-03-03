module.exports = {
    name: 'help',
    description: 'giving commands help',
    execute(message,args) {
        
            message.channel.send('\' Voici la liste des commandes \nVous pouvez jouer au ping-pong en tapant \"-ping\"'
                                    +'\nVous pouvez aussi jouer au tennis en tapant \"-tennis\"'+
                                    + '\nVous pouvez aussi envoyer des messages d\'amour à Henri en tapant \"-Henri\"\'');
            message.channel.send('\'Si vous voulez rajouter des commandes utiles, vous pouvez contacter Matthieu\'');
    }
}