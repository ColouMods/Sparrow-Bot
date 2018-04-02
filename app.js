const Discord = require('discord.js');
const client = new Discord.Client();
var diebot = 1;

client.on('ready', () => {
    console.log('I am ready!');
    //client.user.setActivity('Sims 2 Ultimate Collection', { type: 'PLAYING' });
    /*client.user.setActivity('YouTube', { type: 'WATCHING' })
  	.then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  	.catch(console.error);*/
    /*client.user.setPresence({ game: { name: 'with discord.js' }, status: 'idle' })
  	.then(console.log)
  	.catch(console.error);*/
});

client.on('message', message => {
	if (message.author.bot == true) {
		if (message.content === "<@424679471077916682> Hi") {
			message.channel.startTyping();
			setTimeout(() => {
				message.channel.sendMessage("Hi.");	
			}, 1310);
			message.channel.stopTyping(true);
		} else if (message.content === "How are you?") {
			message.channel.startTyping();
			setTimeout(() => {
       				message.channel.send("OK, I guess.");
			}, 3930);
			message.channel.stopTyping(true);
       		}
}
return;
});
//This is for responding to Chris
client.on('message', message => {
	if (message.author.id == 290486859480563713) {
		if ((message.content.match(/<@424679471077916682>/i) && message.content.match(/die/i)) || (message.content.match(/bot/i) && message.content.match(/die/i))) {
				if (diebot == 20)
    				{
       				message.channel.sendMessage("Don't you think you've said that enough, Chris?");
					diebot = 1;
					return;
    				}
				message.channel.sendMessage("No, Chris. Lmao.");
				diebot++;
			}
}
return;
});

//THIS IS SPECIFICALLY REPLYING TO CAT IMAGE LINKS.
client.on('message', message => {
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat1.jpg' ||
		message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat5.jpg'
		)
	{
		message.channel.sendMessage("MIIIA");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat8.jpg')
	{
		message.channel.sendMessage("same");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat17.jpg')
	{
		message.channel.sendMessage("He's sinking too low");
		message.channel.sendMessage("HA");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat23.jpg')
	{
		message.channel.sendMessage("*BECOME THE PRESENT*");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat24.jpg')
	{
		message.channel.sendMessage("EYES ARE SO CUTE THO");
		message.channel.sendMessage("YEAH");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat25.jpg')
	{
		message.channel.sendMessage("Too cute tbh");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat26.jpg')
	{
		message.channel.sendMessage("Awwwwwwwww");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat28.jpg')
	{
		message.channel.sendMessage("When you realise you're a cat");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat31.jpg')
	{
        	message.channel.sendMessage("AwW");
		message.channel.sendMessage("PURRITO");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat36.jpg')
	{
		message.channel.sendMessage("RAWR");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat37.jpg')
	{
		same = ["same", "Same"];
		{
		message.channel.sendMessage(same[Math.floor(Math.random() * 2)]);
		}
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat39.jpg')
	{
		message.channel.sendMessage("haha")
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat40.jpg')
	{
		message.channel.sendMessage("tongue")
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat42.jpg')
	{
		message.channel.sendMessage("NSFW")
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat45.jpg')
	{
		message.channel.sendMessage("Aww");
		message.channel.sendMessage("Baby bed");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat47.jpg')
	{
        	message.channel.sendMessage("STRETCHY CONE");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat48.jpg')
	{
        	message.channel.sendMessage("Bag cat");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat51.jpg')
	{
        	message.channel.sendMessage("AWW CONE BABy");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat52.jpg')
	{
        	message.channel.sendMessage("Awww poor thing :frowning:");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat53.jpg')
	{
        	message.channel.sendMessage("SO CUTE");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat55.jpg')
	{
        	message.channel.sendMessage("HAHAH");
		message.channel.sendMessage("Same");
	}
	
});
//THIS IS MORE GENERAL STUFF.
client.on('message', message => {
	if(message.author.bot) return;
		//if (message.author.username == "Colou's Pet Bot")
			//if (message.content.match(/<@424679471077916682>/i))
				//if (message.content.match(/Hi/i))
				//{
        			//message.channel.sendMessage("Oh hi.");
        			//}
	//else return;
	
	//if (message.content.match(/ /i))
	//{
	lmaoNum = (Math.floor(Math.random() * 10)+1);
	if (lmaoNum == 1)
    	{
        message.channel.sendMessage("Lmao");
    	}
	//}
	
	if (message.content.match(/ /i))
	{
	cuntNum = (Math.floor(Math.random() * 100)+1);
	if (cuntNum == 1)
    	{
        message.channel.sendMessage("i hope you're prepared for an unforgettable cunt");
    	}
	}
	
	
	
	if (message.content.match(/cat/i)) 
        {
		catNum = (Math.floor(Math.random() * 55)+1);//this is the number of possibilities starting from zero, so 5 is 01234
        message.channel.sendMessage("https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat"+catNum+".jpg");
		return;
	}	
	if (message.content.match(/kitchen nightmares/i) ||
	    message.content.match(/lamb sauce/i) ||
	    message.content.match(/gordon/i) ||
	    message.content.match(/ramsay/i)
        )
    	{
        message.channel.sendMessage("Funny you say that https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/ramsay.jpg");
		return;
    	}
	
	if (message.content.match(/lol/i) ||
	    message.content.match(/lmfao/i) ||
	    message.content.match(/lmao/i) ||
	    message.content.match(/rofl/i)
        )
    	{
        message.channel.sendMessage("Lmao");
		return;
    	}

	
		//This is her mention code
	if (message.content.match(/@sparrow/i))
		if (message.content.match(/view github/i))
	{
        message.channel.sendMessage("My GitHub link is https://github.com/ColouMods/Sparrow-Bot/ Wait, I don't have a Github link, I'm half-digested Sparrow.");
        }
		else if (message.content.match(/war is good for absolutely nothing/i))
	{
        message.channel.sendMessage("Haha");
	message.channel.sendMessage("Right, I'm afraid I'm odd");
	message.channel.sendMessage("No");
	message.channel.sendMessage("Off to bed*");
        }
		else if (message.content.match(/a garden sounds fun/i))
	{
	message.channel.sendMessage("Brain poop, whoops.");
	}
		else if (message.content.match(/would you mind calming the fuck down/i))
	{
	message.channel.sendMessage(";-;");	
	}
		else if (message.content.match(/springfield nightmares/i))
	{
	message.channel.sendMessage("Oh god I gotta work on that");	
	}
		else
	{
	message.channel.sendMessage("Sparrow should be good");
	}
	return;
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
