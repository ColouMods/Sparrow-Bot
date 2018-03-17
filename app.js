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
        message.channel.sendMessage("https://raw.githubusercontent.com/ColouMods/Loren-Bot/master/cats/cat"+catNum+".png");
		return;
    }
    if (message.content.match(/steamed hams/i) ||
        message.content.match(/aurora borealis/i) ||
        message.content.match(/oh egads/i) ||
        message.content.match(/delightfully devilish/i) ||
        message.content.match(/steamed clams/i) ||
        message.content.match(/the house is on fire/i) ||
        message.content.match(/unforgettable luncheon/i) ||
        message.content.match(/well seymour i made it/i) ||
        message.content.match(/ah superintendent chalmers/i) ||
        message.content.match(/i hope you're prepared for an/i) ||
        message.content.match(/my roast is ruined/i) ||
        message.content.match(/i were to purchase/i) ||
        message.content.match(/and disguise it as my own/i) ||
        message.content.match(/crazy explanations/i) ||
        message.content.match(/need his medications/i) ||
        message.content.match(/lame exaggerations/i) ||
        message.content.match(/trouble in town tonight/i) ||
        message.content.match(/stretching my calves/i) ||
        message.content.match(/isometric exercise/i) ||
        message.content.match(/that isn't smoke it's steam/i) ||
        message.content.match(/regional dialect/i) ||
        message.content.match(/obviously grilled/i) ||
        message.content.match(/patented skinner burgers/i) ||
        message.content.match(/steam a good ham/i) ||        
        message.content.match(/despite your directions/i)
        )
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
		return;
    }
    
	
	//This is basic content searching
    if (message.content.match(/map builder/i)) 
    {
        message.channel.sendMessage('The map builder should be out sometime this year. I realize the wait for it has been tremendous and I apologize to those who have been looking forward to it.');
		return;
    }
	if (message.content.match(/launcher/i)) 
    {
        message.channel.sendMessage("Our Mod Launcher includes a hack called *Modern Computer Support* that does some stuff to the game to make it work much closer to how it's supposed to on modern versions of Windows.");
		return;
    }
    if (message.content.match(/Loren is the gayest/i)) 
    {
        message.channel.sendMessage('TIL.');
		return;
    }
    if (message.content.match(/piracy/i)) 
    {
        message.channel.sendMessage("Please don't discuss piracy here.");
		return;
    }
    if (message.content.match(/road/i)) 
    {
        message.channel.sendMessage("Making new roads with the map builder is pretty easy.");
		return;
    }
    if (message.content.match(/sketchup/i) || message.content.match(/3d model/i)) 
    {
        message.channel.sendMessage("SketchUp. I have a love/hate relationship with that software.");
	message.channel.sendMessage("Or is it more like tolerate/hate?");    
	message.channel.sendMessage("I'm not sure.");    
		return;
    }
    if (message.content.match(/nocd/i)) 
    {
        message.channel.sendMessage("Using a No CD crack isn't really piracy (morally speaking at least) if you actually own the game but I'd rather we not discuss the subject in this server.");
		return;
	}
    if (message.content.match(/loren is a girls name/i) || message.content.match(/loren is a her name/i)) 
    {
        message.channel.sendMessage("I'm a guy lol");
		return;
    }
//STUPID EASTER EGGS, SPECIFIC CASES
    if (message.content.match(/When Donut Mod 4 is revealed as a suppository, there will be ass activity./i)) 
    {
	message.channel.sendMessage("That's an impressive level of shock factor in that message.");
	        return;
    }
    if (message.content.match(/loren is my sugar daddy/i)) 
    {
	message.channel.sendMessage("http://i.imgur.com/3PFqxIp.gifv");
	        return;
    }
	
	//This is his mention code
	if (message.content.match(/@loren goodwin/i))
		if (message.content.match(/@loren goodwin view github/i))
	{
        message.channel.sendMessage("My GitHub link is https://github.com/ColouMods/Loren-Bot/ Wait, I don't have a Github link, I'm Loren Goodwin.");
        }
		else if (message.content.match(/@loren goodwin quote the lion king/i))
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
