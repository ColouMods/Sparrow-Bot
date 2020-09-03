const Discord = require('discord.js');
const client = new Discord.Client();
var diebot = 1;
var broMode = 0;
var broCount;
var catPath = "https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/";
greet = ["Oh hi", "Hi", "Sup"];
sendChannels = ["447499927220781068", "449616538358513698"];
//this is just to check if she'll come back online
//as is this
client.on('ready', () => {
	console.log('I am ready!');
	client.user.setPresence({game: {name: "The Sims 2: Ultimate Collection", type: 0}});
	// client.channels.get('449616538358513698').sendMessage("I've updated!");
	client.user.setStatus('dnd');
	setTimeout(() => { 
		client.user.setStatus('online');
	}, 1000);
});

client.on("guildCreate", guild => {
    guild.channels.find("name", "shar-general").sendMessage("I don't know if this is the place to introduce youself, but hi!");
});

//GENERAL STUFF
client.on('message', message => {

	// if Loren Bot says brotato, give RNG 10 chances to make her randomly repeat part of his message
	if (message.author.id == 424318662674087946 && message.content.match(/brotato/i)) { 
	//if (message.content.match(/brotato/i)) { 
		broCount = 10;
		message.channel.send("Lmao");
	}

	if (broCount >= 1) {
		broMode = 1;
		broCount--;
	} else {
		broMode = 0;
	}

	if (broMode == 1) {
		brotato = (Math.floor(Math.random() * 10)+1);
		if (brotato == 1) {
			message.channel.sendMessage("yo whaddup my brotato");
			// if RNG complies, we deactivate broMode and reset broCount
			broCount = 0;
			broMode = 0;
		}
	}

	if(message.author.bot) return;

	lmaoNum = (Math.floor(Math.random() * 10)+1);
	if (lmaoNum == 1) {
        message.channel.sendMessage("Lmao");
	}

	cuntNum = (Math.floor(Math.random() * 100)+1);
	if (cuntNum == 1) {
	    message.channel.sendMessage("i hope you're prepared for an unforgettable cunt");
	}
	
	fuckNum = (Math.floor(Math.random() * 200)+1);
	if (fuckNum == 1) {
        message.channel.sendMessage("I used to be a renegade :skull: , I used to :regional_indicator_f: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k: <:catThink:434451031145840641>  :sweat_drops:  around :arrow_heading_up: :repeat: \nBut I couldn't take the punishment :alarm_clock:  :house_abandoned:, and had to settle down :house: :arrow_down: \nNow I'm playing it real straight :arrow_right:  , and :regional_indicator_y: :regional_indicator_e: :regional_indicator_s: I  :regional_indicator_f: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k: my BEES :bee: \nYou might :thinking: I'm crazy, but I don't even care :no_entry_sign: \nBecause I can tell what's going on :ok: \nIt's hip to  :regional_indicator_f: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k: BEES :bee: \nIt's hip to  :regional_indicator_f: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k: BEES :bee:");
	}
	
	if (message.content.match(/dream/i)) {
        message.channel.sendMessage("I had one last night. I failed my A-Levels with DEP. No idea what the P grade was but it must have been bad because I cried pretty bad over it. UCAS track had Coventry marked as \"lol rejected\" and I had to start retakes that day. It was the most disappointing thing because I didn't have Adrian, I had Kelly. Those of you who talked to me last year will know who she is. (Those who don't, media teacher from first year). She was her usual annoying, scary self and I ended up crying when she walked into the room. The dream ended with her finding my old revision as she was throwing it out and saw it said \"Damn Kelly was such a bitch lmao\"");
	}
	
	pizzaNum = (Math.floor(Math.random() * 100)+1);
	if (pizzaNum == 1) {
        message.channel.sendMessage("My sister (taco smasher) got into a habit of making pizza except her dough was shit but my parents kept praising it like it was god-tier and I must admit, I didn't like going back to my parents because she'd force this shit pizza at me and omg she didn't even use yeast or anything");
	}
	
	if (message.content.match(/cat/i)) {
		// server specific
		if (message.channel.type != "dm") {
			wrongNum = (Math.floor(Math.random() * 50)+1);
			rightChannel = message.guild.id;
			if (wrongNum != 1) {
				catNum = (Math.floor(Math.random() * 56)+1);//this is the number of possibilities starting from zero, so 5 is 01234
				message.channel.sendMessage(catPath + "cat" + catNum + ".jpg");
				return;
				}
			else if (wrongNum == 1){
				wrongChannel = (Math.floor(Math.random() * sendChannels.length));
				catNum = (Math.floor(Math.random() * 56)+1);//this is the number of possibilities starting from zero, so 5 is 01234
				msgChannel = sendChannels[wrongChannel];
				client.channels.get(msgChannel).sendMessage(catPath + "cat" + catNum + ".jpg");
					if (client.channels.get(msgChannel).guild.id != rightChannel) {	
					setTimeout(() => { 
						client.channels.get(msgChannel).send("Whoops, wrong server.");
					}, 3390);
				}
				return;
			}
		}
	
		// DM specific, wrong channel would cause a crash in this case
		if (message.channel.type == "dm") {
			catNum = (Math.floor(Math.random() * 56)+1); // this is the number of possibilities starting from zero, so 5 is 01234
			message.channel.sendMessage(catPath + "cat" + catNum + ".jpg");
			return;
		}
	}
	
	if (message.content.match(/kitchen nightmares/i) || message.content.match(/lamb sauce/i) || message.content.match(/gordon/i) || message.content.match(/ramsay/i))
	{
		message.channel.send("Funny you say that", {files: ["https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/ramsay.jpg"]});
		return;
	}
	
	if (message.content.match(/send help/i))
	{
		message.channel.send("Help.");
		//Haha get it she sends "Help."
		//I don't even know if that was the joke Sprow was making, she's so confusing. ;-;
	}
	
	if (message.content.match(/window frames/i))
	{
		message.channel.send("WHAT TF", {files: ["https://raw.githubusercontent.com/ColouMods/Sparrow-Bot/master/images/WHATTF.png"]});
		return;
	}
	
	if (message.content.match(/lol/i) || message.content.match(/lmfao/i) || message.content.match(/lmao/i) || message.content.match(/rofl/i))
	{
		message.channel.sendMessage("Lmao");
		return;
	}

	if (((message.content.match(/shut up/i)) || (message.content.match(/shut the fuck up/i)) || (message.content.match(/ban/i)) || (message.content.match(/delete/i)) || (message.content.match(/mute/i))) && (message.content.match(/bot/i)))
	{
		threeEyedSprow = (Math.floor(Math.random() * 50) + 1);
		if (threeEyedSprow == 1) {
			message.channel.sendMessage(";-;;");
		} else {
			message.channel.sendMessage(";-;");
		}
		return;
	}

	if ((message.content.match(/1 in 4000/i)) || ((message.content.match(/tmsm/i) && message.content.match(/crash/i))) )
	{
		message.channel.sendMessage("OH GOD\nit was my own fault Liquid's game kept crashing.\nI didn't convert it right.\nIt crashes the game.\nI blamed Radical for something that is my fault\nI fucked up Liquid's stream");
	}

	if (message.content.match(/bot/i) && message.content.match(/cancer/i))
	{
		message.channel.sendMessage("Nah mate");
		message.channel.sendMessage("You're cancer");
	}
	return;
});

//GENERAL MENTION STUFF
client.on('message', message=> {
	if (message.isMentioned(client.user)) {
		if (message.content.match(/view github/i))
		{
			message.channel.sendMessage("My GitHub link is https://github.com/ColouMods/Sparrow-Bot/ Wait, I don't have a Github link, I'm half-digested Sparrow.");
		}
		
		else if
		(
			(message.content.match(/make cloou/i) && message.content.match(/to/i) && message.content.match(/a boolean/i)) ||
			(message.content.match(/convert cloou/i) && message.content.match(/to/i) && message.content.match(/a boolean/i)) ||
			(message.content.match(/make colou/i) && message.content.match(/to/i) && message.content.match(/a boolean/i)) ||
			(message.content.match(/convert colou/i) && message.content.match(/to/i) && message.content.match(/a boolean/i))
		)
		{
			message.channel.sendMessage("boolprop cloou false");
			}
		
		else if (message.content.match(/war is good for absolutely nothing/i))
		{
			message.channel.sendMessage("Haha");
			message.channel.sendMessage("Right, I'm afraid I'm odd");
			message.channel.sendMessage("No");
			message.channel.sendMessage("Off to bed*");
			}
		
		else if (message.content.match(/hi/i) || message.content.match(/hello/i) || message.content.match(/hey/i))
		{
			message.channel.sendMessage(greet[Math.floor(Math.random() * greet.length)]);
		}
		
		else if (message.content.match(/what is the current acis release/i))
		{
			message.channel.sendMessage("Don't do it, don't play it.");
			setTimeout(() => { 
				message.channel.send('Please.');
			}, 6000);
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
	}
});

//"SPARROW BOT SAYS" STUFF (dear god this is a mess)

client.on('message', message => {

//memes and shit
	if ((message.channel.id == 449617271258742784) && (message.author.bot == false))
	{
		var shitToSend = message.content;
		client.channels.get('424212795970551808').sendMessage(shitToSend);
	}
	
//hwwotw general
	if ((message.channel.id == 452839469779779596) && (message.author.bot == false)) {
		var shitToSend = message.content;
		client.channels.get('422215368782643202').sendMessage(shitToSend);
	}
/* dead channels RIP
//secret 
	if ((message.channel.id == 452827828103151616) && (message.author.bot == false))
	{
		var shitToSend = message.content;
		client.channels.get('447499927220781068').sendMessage(shitToSend);
	}
	
//sprows mod server general
	if ((message.channel.id == 455383264547569676) && (message.author.bot == false)) {
		var shitToSend = message.content;
		client.channels.get('454685400699502594').sendMessage(shitToSend);
	}
*/

//CHRIS BEGIN
	if ((message.channel.id == 449683861664956426) && (message.author.bot == false))
	{
		var shitToSend = message.content;
		client.users.get("90852908509175808").sendMessage(shitToSend);
	}

	if (message.author.id == 90852908509175808 || message.author.id == 290486859480563713) {
		if (message.channel.type =="dm") {
			var shitToSend = message.content;
			client.channels.get('449683861664956426').sendMessage("Chris just said ```" + shitToSend + "```");
			return;
		} else {
			if (((message.isMentioned(client.user)) && message.content.match(/die/i)) || (message.content.match(/bot/i) && message.content.match(/die/i))) {
				if (diebot == 20) {
					message.channel.sendMessage("Don't you think you've said that enough, Chris?");
					diebot = 1;
					return;
				}
				message.channel.sendMessage("No, Chris. Lmao.");
				diebot++;
			}
		}
	}

//NIGHT BEGIN
	if ((message.channel.id == 449699947080712211) && (message.author.bot == false))
	{
		var shitToSend = message.content;
		client.users.get("230847867458158593").sendMessage(shitToSend);
	}

	if ((message.channel.type =="dm") && (message.author.id == 230847867458158593))
	{
		var shitToSend = message.content;
		client.channels.get('449699947080712211').sendMessage("Nightbane just said ```" + shitToSend + "```");
	}

//WILL BEGIN
	if ((message.channel.id == 449705781298987008) && (message.author.bot == false))
	{
		var shitToSend = message.content;
		client.users.get("188248640635011072").sendMessage(shitToSend);
	}

	if ((message.channel.type =="dm") && (message.author.id == 188248640635011072))
	{
		var shitToSend = message.content;
		client.channels.get('449705781298987008').sendMessage("Will just said ```" + shitToSend + "```");
	}

//SPROW BEGIN
	if ((message.channel.id == 450033076114948107) && (message.author.bot == false))
	{
		var shitToSend = message.content;
		client.users.get("259458435484090369").sendMessage(shitToSend);
	}

	if ((message.channel.type =="dm") && (message.author.id == 259458435484090369))
	{
		var shitToSend = message.content;
		client.channels.get('450033076114948107').sendMessage("Sparrow just said ```" + shitToSend + "```");
	}

//CLOOU BEGIN
	if ((message.channel.id == 450035060863926272) && (message.author.bot == false))
	{
		var shitToSend = message.content;
		client.users.get("333710766706524167").sendMessage(shitToSend);
	}

	if ((message.channel.type =="dm") && (message.author.id == 333710766706524167))
	{
		var shitToSend = message.content;
		client.channels.get('450035060863926272').sendMessage("Colou just said ```" + shitToSend + "```");
	}

//HOMER BEGIN
	if ((message.channel.id == 450037451994693651) && (message.author.bot == false))
	{
		var shitToSend = message.content;
		client.users.get("290486859480563713").sendMessage(shitToSend);
	}

	if ((message.channel.type =="dm") && (message.author.id == 290486859480563713))
	{
		var shitToSend = message.content;
		client.channels.get('450037451994693651').sendMessage("Homer just said ```" + shitToSend + "```");
	}
});

//THIS IS SPECIFICALLY REPLYING TO CAT IMAGE LINKS.
client.on('message', message => {
	if (message.author.id == 424679471077916682 && message.content.match(/https:\/\/raw.githubusercontent.com\/ColouMods\/Sparrow-Bot\/master\/images\/cat/i)) {
		catID = message.content;
		catID = catID.slice(catPath.length + 3);
			catID = catID.slice(0, -4);
		switch(parseInt(catID, 10)) {
			case 1:
				message.channel.sendMessage("MIIIA");
				break;
			case 5:
				message.channel.sendMessage("MIIIA");
				break;
			case 8:
				message.channel.sendMessage("same");
				break;
			case 11:
				message.channel.sendMessage("Scratchy");
				break;
			case 13:
				message.channel.sendMessage("She was only 1 in this pic, she's 3 now <:tjo:425348087461183488>");
				message.channel.sendMessage("Aww");
				break;
			case 14:
				message.channel.sendMessage("Same");
				break;
			case 15:
				message.channel.sendMessage("Curly mia");
				break;
			case 17:
				message.channel.sendMessage("He's sinking too low");
				message.channel.sendMessage("HA");
				break;
			case 21:
				message.channel.sendMessage("EYES");
				break;
			case 23:
				message.channel.sendMessage("*BECOME THE PRESENT*");
				break;
			case 22:
				message.channel.sendMessage("Why are most of these Mia?");
				break;
			case 24:
				message.channel.sendMessage("EYES ARE SO CUTE THO");
				message.channel.sendMessage("YEAH");
				break;
			case 25:
				message.channel.sendMessage("Too cute tbh");
				break;
			case 26:
				message.channel.sendMessage("Awwwwwwwww");
				break;
			case 28:
				message.channel.sendMessage("When you realise you're a cat");
				break;
			case 30:
				message.channel.sendMessage("Same");
				break;
			case 31:
				message.channel.sendMessage("AwW");
				message.channel.sendMessage("PURRITO");
				break;
			case 32:
				message.channel.sendMessage("My poppy is growing well *ba dum tiss*");
				break;
			case 34:
				message.channel.sendMessage("Me when I'm woken up");
				break;
			case 35:
				message.channel.sendMessage("Oooh I remember that box, she was obsessive with that but we had to send it back to amazon");
				break;
			case 36:
				message.channel.sendMessage("RAWR");
				break;
			case 37:
				same = ["same", "Same"];
				message.channel.sendMessage(same[Math.floor(Math.random() * 2)]);
				break;
			case 38:
				message.channel.sendMessage("haha");
				break;
			case 39:
				message.channel.sendMessage("Lap cat");
				break;
			case 40:
				message.channel.sendMessage("tongue");
				break;
			case 42:
				message.channel.sendMessage("NSFW");
				break;
			case 44:
				message.channel.sendMessage("It's like a fucking western.");
				message.channel.sendMessage("Like Dash staring and Mia and Mia staring at Dash like wtf you in my house for");
				break;
			case 45:
				message.channel.sendMessage("Aww");
				message.channel.sendMessage("Baby bed");
				break;
			case 47:
				message.channel.sendMessage("STRETCHY CONE");
				break;
			case 48:
				message.channel.sendMessage("Bag cat");
				break;
			case 49:
				message.channel.sendMessage("aww");
				message.channel.sendMessage("JACK IN DA ~~HOOD~~ VETS");
				break;
			case 51:
				message.channel.sendMessage("AWW CONE BABy");
				break;
			case 52:
				message.channel.sendMessage("Awww poor thing :frowning:");
				break;
			case 53:
				message.channel.sendMessage("SO CUTE");
				break;
			case 54:
				message.channel.sendMessage("STP");
				message.channel.sendMessage("PLEASe");
				break;
			case 55:
				message.channel.sendMessage("HAHAH");
				message.channel.sendMessage("Same");
				break;
			default:
				break;
		}
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
