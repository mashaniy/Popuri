const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true}); // botnya tidak akan bisa mention @everyone
const config = require("./config.json"); // kita akan menaruh prefix dan token disini

bot.on("ready", async () => {
	console.log(`${bot.user.username} Sudah online!`);
	bot.user.setActivity("Hero.Of.Leaf.Valley", {type: "PLAY.HM-"});	
});

bot.on("message", async message => {
	if (message.author.bot) return; // bot kita tidak akan menjawab jika command dikirim oleh bot lain
	if (message.channel.type === 'dm') return; // bot kita tidak akan menjawab jika kita menggunakan command di DM atau PM

    let prefix = config.prefix;
    let messageArray = message.content.split(" "); // commend bisa disisipkan spasi
    let cmd = messageArray[0]; 
    let args = messageArray.slice(1);    

    if (cmd === `${prefix}Popuri`) { 
	      message.channel.send("halo!");
    }
	
    if (cmd === `${prefix}Popuriinfo`) {
	let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
	let botembed = new Discord.RichEmbed()
		.setAuthor("Informasi Bot")
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
		.setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
		.addField("Nama Bot", bot.user.username)
		.addField("Dibuat", bot.user.createdAt)
		.setFooter("©haniy")
        	.setTimestamp()

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
    }
});

bot.login(process.env.BOT_TOKEN);
