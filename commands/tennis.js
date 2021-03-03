module.exports = {
    name: 'tennis',
    description: 'tennis match',
    execute(message,args) {
            var temp =Math.floor((Math.random()*3)+1);
            
            switch(temp) {
                case 1 : 
                    message.channel.send('smash');
                    break;
                case 2 : 
                    message.channel.send('lift');
                    break;
                case 3 : 
                    message.channel.send('slice');
                    break;
                
            }
    }
}