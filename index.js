require("dotenv").config();
const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("messageCreate", async m => {
    const args = m.content.toLowerCase().trim().split(/ +/);

    switch (args.shift()) {
        case "_deploy":
	    const data = [
	        {
	            name: "ping",
	            description: "Pong!"
	        }
	     ]
	    m.guild.commands.set(data);
	    m.reply("Ok!");
	    break;
        case "_ping":
	    m.reply(commands.ping());
	    break;
    }
})

client.on("interactionCreate", async i => {
    if(i.isCommand()) {
        switch (i.commandName) {
	    case "ping":
		i.reply(commands.ping());
	        break;
        }
    }
})

const commands = {
    ping: () => {
        return "Pong!";
    }
}

client.login("NzQ5NTkwMjYwNjk4MzE2OTAy.X0uMVA.XT6try-khSJlQCYQ7de3vCDxDSI");
