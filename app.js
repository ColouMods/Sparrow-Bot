const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if(message.author.bot) return;
	
	if (message.content.match(/cat/i)) 
        {
		catNum = (Math.floor(Math.random() * 4)+1);//this is the number of possibilities starting from zero, so 5 is 01234
        message.channel.sendMessage("https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat"+catNum+".jpg");
		return;
	}	
	if (message.content.match(/kitchen nightmares/i) ||
	    message.content.match(/gordon/i) ||
	    message.content.match(/ramsay/i)
        )
    	{
        message.channel.sendMessage("Funny you say that https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/ramsay.jpg");
		return;
    	}
	

	
		//This is her mention code
	if (message.content.match(/@sparrow/i))
		if (message.content.match(/@sparrow view github/i))
	{
        message.channel.sendMessage("My GitHub link is https://github.com/ColouMods/Sparrow-Bot/ Wait, I don't have a Github link, I'm Sparrow.");
        }
		else if (message.content.match(/@sparrow quote the lion king/i))
	{
        message.channel.sendMessage("placeholder");
        }
		else 
	{
		message.channel.sendMessage("placeholder");
	}
    	return;
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
