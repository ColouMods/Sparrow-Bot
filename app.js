const Discord = require('discord.js');
const client = new Discord.Client();
var diebot = 1;
greet = ["Oh hi", "Hi", "Sup"];
sendChannels = ["447499927220781068", "449616538358513698"];
lolrej = '"lol rejected"';
bitch = '"Damn Kelly was such a bitch lmao"';
//this is just to check if she'll come back online
client.on('ready', () => {
	console.log('I am ready!');
	client.channels.get('449616538358513698').sendMessage("I've updated!");
    //client.user.setActivity('Sims 2 Ultimate Collection', { type: 'PLAYING' });
    /*client.user.setActivity('YouTube', { type: 'WATCHING' })
  	.then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  	.catch(console.error);*/
    /*client.user.setPresence({ game: { name: 'with discord.js' }, status: 'idle' })
  	.then(console.log)
  	.catch(console.error);*/
});

//client.on('message', message => {
//	if (message.author.id == 90852908509175808)
//	{
//      	message.author.sendMessage("Hi Chris lmao");
//	}
//});

client.on("guildCreate", guild => {
    guild.channels.find("name", "shar-general").sendMessage("I don't know if this is the place to introduce youself, but hi!");
});

client.on('message', message => {
	if (message.content.match(/bot/i) && message.content.match(/cancer/i))
	{
	message.channel.sendMessage("Nah mate");
	message.channel.sendMessage("You're cancer");
	}
});

client.on('message', message => {
    	if (message.content.match(/@Sparrow DM Colou/i))
	{
        message.channel.sendMessage('Okay then.');
	client.users.get("333710766706524167").sendMessage("Hi Colou");
	
	/*
	async run(message) {
	let client = message.channel.client;
	let user = client.fetchUser('<333710766706524167>')
	.then(user => {
        user.sendMessage('Test message'); 

    	});
	}*/
	}
});

client.on('message', message => {
	if (message.author.id == 333710766706524167)
	{
    		if (message.content.match(/@Sparrow Annoy Chris/i))
		{
        	message.channel.sendMessage('Absolutely.');
		client.users.get("90852908509175808").sendMessage("Hey, Colou asked me to annoy you.");
		client.users.get("90852908509175808").sendMessage("I think he enjoys annoying you.");
		client.users.get("90852908509175808").sendMessage("He's weird.");
		}
	}
});
//memes and shit
client.on('message', message => {
	if ((message.channel.id == 449617271258742784) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.channels.get('424212795970551808').sendMessage(shitToSend);
	}
});
//secret
client.on('message', message => {
	if ((message.channel.id == 452827828103151616) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.channels.get('447499927220781068').sendMessage(shitToSend);
	}
});
//hwwotw general
client.on('message', message => {
	if ((message.channel.id == 452839469779779596) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.channels.get('422215368782643202').sendMessage(shitToSend);
	}
});

//sprows mod server general
client.on('message', message => {
	if ((message.channel.id == 455383264547569676) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.channels.get('454685400699502594').sendMessage(shitToSend);
	}
});

//CHRIS BEGIN

client.on('message', message => {
	if ((message.channel.id == 449683861664956426) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.users.get("90852908509175808").sendMessage(shitToSend);
	}
});

client.on('message', message => {
	if ((message.channel.type =="dm") && (message.author.id == 90852908509175808))
	{
		var shitToSend = message.content;
    		client.channels.get('449683861664956426').sendMessage("Chris just said ```" + shitToSend + "```");
	}
});
//CHRIS END

//NIGHT BEGIN

client.on('message', message => {
	if ((message.channel.id == 449699947080712211) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.users.get("230847867458158593").sendMessage(shitToSend);
	}
});

client.on('message', message => {
	if ((message.channel.type =="dm") && (message.author.id == 230847867458158593))
	{
		var shitToSend = message.content;
    		client.channels.get('449699947080712211').sendMessage("Nightbane just said ```" + shitToSend + "```");
	}
});
//NIGHT END

//WILL BEGIN

client.on('message', message => {
	if ((message.channel.id == 449705781298987008) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.users.get("188248640635011072").sendMessage(shitToSend);
	}
});

client.on('message', message => {
	if ((message.channel.type =="dm") && (message.author.id == 188248640635011072))
	{
		var shitToSend = message.content;
    		client.channels.get('449705781298987008').sendMessage("Will just said ```" + shitToSend + "```");
	}
});
//WILL END

//SPROW BEGIN

client.on('message', message => {
	if ((message.channel.id == 450033076114948107) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.users.get("259458435484090369").sendMessage(shitToSend);
	}
});

client.on('message', message => {
	if ((message.channel.type =="dm") && (message.author.id == 259458435484090369))
	{
		var shitToSend = message.content;
    		client.channels.get('450033076114948107').sendMessage("Sparrow just said ```" + shitToSend + "```");
	}
});
//SPROW END

//CLOOU BEGIN

client.on('message', message => {
	if ((message.channel.id == 450035060863926272) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.users.get("333710766706524167").sendMessage(shitToSend);
	}
});

client.on('message', message => {
	if ((message.channel.type =="dm") && (message.author.id == 333710766706524167))
	{
		var shitToSend = message.content;
    		client.channels.get('450035060863926272').sendMessage("Colou just said ```" + shitToSend + "```");
	}
});
//CLOOU END

//HOMER BEGIN

client.on('message', message => {
	if ((message.channel.id == 450037451994693651) && (message.author.bot == false))
	{
		var shitToSend = message.content;
    		client.users.get("290486859480563713").sendMessage(shitToSend);
	}
});

client.on('message', message => {
	if ((message.channel.type =="dm") && (message.author.id == 290486859480563713))
	{
		var shitToSend = message.content;
    		client.channels.get('450037451994693651').sendMessage("Homer just said ```" + shitToSend + "```");
	}
});
//HOMER END

client.on('message', message => {
    	if (message.content.match(/execute order 66/i))
	{
        message.channel.sendMessage('Understood.');
	client.users.get("259458435484090369").sendMessage("Hi me, I'm you. Wanna be friends?");
	}
	if (message.content.match(/execute order 67/i))
	{
        message.channel.sendMessage('You just ruined the reference, but okay.');
	client.users.get("259458435484090369").sendMessage("So, how was your day?");
	}
	if (message.content.match(/@Sparrow Chris is broken/i))
	client.channels.get('424212795970551808').sendMessage('Uh oh, I broke him.')
	if (message.content.match(/@Sparrow Cloou is broken/i))
	client.channels.get('424212795970551808').sendMessage('Whoops, posted twice.')
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
	if (message.author.id == 90852908509175808) {
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
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat11.jpg')
	{
		message.channel.sendMessage("Scratchy");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat13.jpg')
	{
		message.channel.sendMessage("She was only 1 in this pic, she's 3 now <:tjo:425348087461183488>");
		message.channel.sendMessage("Aww");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat14.jpg')
	{
		message.channel.sendMessage("Same");
	}
	
	
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat15.jpg')
	{
		message.channel.sendMessage("Curly mia");
	}

	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat17.jpg')
	{
		message.channel.sendMessage("He's sinking too low");
		message.channel.sendMessage("HA");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat21.jpg')
	{
		message.channel.sendMessage("EYES");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat23.jpg')
	{
		message.channel.sendMessage("*BECOME THE PRESENT*");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat22.jpg')
	{
		message.channel.sendMessage("Why are most of these Mia?");
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
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat30.jpg')
	{
		message.channel.sendMessage("Same");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat31.jpg')
	{
        	message.channel.sendMessage("AwW");
		message.channel.sendMessage("PURRITO");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat32.jpg')
	{
        	message.channel.sendMessage("My poppy is growing well *ba dum tiss*");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat34.jpg')
	{
        	message.channel.sendMessage("Me when I'm woken up");
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat35.jpg')
	{
        	message.channel.sendMessage("Oooh I remember that box, she was obsessive with that but we had to send it back to amazon");
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
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat38.jpg')
	{
		message.channel.sendMessage("haha")
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat39.jpg')
	{
		message.channel.sendMessage("Lap cat")
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat40.jpg')
	{
		message.channel.sendMessage("tongue")
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat42.jpg')
	{
		message.channel.sendMessage("NSFW")
	}
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat44.jpg')
	{
		message.channel.sendMessage("It's like a fucking western.");
		message.channel.sendMessage("Like Dash staring and Mia and Mia staring at Dash like wtf you in my house for");
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
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat49.jpg')
	{
        	message.channel.sendMessage("aww");
		message.channel.sendMessage("JACK IN DA ~~HOOD~~ VETS");
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
	
	if (message.content === 'https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat54.jpg')
	{
        	message.channel.sendMessage("STP");
		message.channel.sendMessage("PLEASe");
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
	
	//if (message.content.match(/ /i))
	//{
	cuntNum = (Math.floor(Math.random() * 100)+1);
	if (cuntNum == 1)
    	{
        message.channel.sendMessage("i hope you're prepared for an unforgettable cunt");
    	}
	//}
	fuckNum = (Math.floor(Math.random() * 200)+1);
	if (fuckNum == 1)
    	{
        message.channel.sendMessage("I used to be a renegade :skull: , I used to :regional_indicator_f: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k: <:catThink:434451031145840641>  :sweat_drops:  around :arrow_heading_up: :repeat: \nBut I couldn't take the punishment :alarm_clock:  :house_abandoned:, and had to settle down :house: :arrow_down: \nNow I'm playing it real straight :arrow_right:  , and :regional_indicator_y: :regional_indicator_e: :regional_indicator_s: I  :regional_indicator_f: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k: my BEES :bee: \nYou might :thinking: I'm crazy, but I don't even care :no_entry_sign: \nBecause I can tell what's going on :ok: \nIt's hip to  :regional_indicator_f: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k: BEES :bee: \nIt's hip to  :regional_indicator_f: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k: BEES :bee:");
	}
	dreamNum = (Math.floor(Math.random() * 200)+1);
	if (dreamNum == 1) 
    	{
        message.channel.sendMessage("I had one last night. I failed my A-Levels with DEP. No idea what the P grade was but it must have been bad because I cried pretty bad over it. UCAS track had Coventry marked as " + lolrej + " and I had to start retakes that day. It was the most disappointing thing because I didn't have Adrian, I had Kelly. Those of you who talked to me last year will know who she is. (Those who don't, media teacher from first year). She was her usual annoying, scary self and I ended up crying when she walked into the room. The dream ended with her finding my old revision as she was throwing it out and saw it said " + bitch);
	}
	
	
	if (message.content.match(/cat/i)) {
    	wrongNum = (Math.floor(Math.random() * 2)+1);
	if (wrongNum != 1)
	{
		catNum = (Math.floor(Math.random() * 56)+1);//this is the number of possibilities starting from zero, so 5 is 01234
		message.channel.sendMessage("https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat"+catNum+".jpg");
		return;
	}
	else if (wrongNum == 1)
	{
		wrongChannel = (Math.floor(Math.random() * sendChannels.length));
		catNum = (Math.floor(Math.random() * 56)+1);//this is the number of possibilities starting from zero, so 5 is 01234
		client.channels.get(sendChannels[wrongChannel]).sendMessage("https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/cat"+catNum+".jpg");
       		if (sendChannels[wrongChannel].guild_id != message.guild.id) {
		client.channels.get(sendChannels[wrongChannel]).send("Whoops, wrong server.");
		}
		return;
	}
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
	
	if (message.content.match(/window frames/i))
    	{
        message.channel.sendMessage("WHAT TF");
	message.channel.sendMessage("https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/WHATTF.png");
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
		else if (message.content.match(/hi/i) || message.content.match(/hello/i) || message.content.match(/hey/i))
	{
  	message.channel.sendMessage(greet[Math.floor(Math.random() * greet.length)]);
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
