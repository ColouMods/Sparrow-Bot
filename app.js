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
        message.channel.sendMessage("https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat"+catNum+".png");
		return;
    }
    if (message.content.match(/food/i) ||
        message.content.match(/steak/i) ||
		message.content.match(/cheese/i) ||
		message.content.match(/dinner/i) ||
		message.content.match(/lunch/i) ||
		message.content.match(/breakfast/i) ||
		message.content.match(/meatballs/i) ||
		message.content.match(/tacos/i) ||
        )
    {
        message.channel.sendMessage("Kitchen Nightmares lmfao https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/ramsay.jpg");
		return;
    }
	//This is her mention code
	if (message.content.match(/@sparrow/i))
		if (message.content.match(/@sparrow view github/i))
	{
        message.channel.sendMessage("My GitHub link is https://github.com/ColouMods/Sparrow-Bot/ Wait, I don't have a Github link, I'm Evie Whateverthefuckmylastnameis.");
        }
		else if (message.content.match(/@sparrow quote the lion king/i))
	{
        message.channel.sendMessage("I've never seen the Lion King.");
        }
		else 
	{
		message.channel.sendMessage("Oh yeah the game is hardcodedly hiding those meshes for rocke_v. When you rename the car it no longer does that.");
	}
    return;
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
