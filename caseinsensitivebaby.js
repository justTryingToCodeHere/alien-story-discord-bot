const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let prefix = "A! ";
client.on("message", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "Hello") || message.content.startsWith(prefix + "hello") || message.content.startsWith(prefix + "Hey") || message.content.startsWith(prefix + "hey")) {
    message.channel.send("Hello there.");
  } else
  if (message.content.startsWith(prefix + "I love you") || message.content.startsWith(prefix + "i love you")) {
    message.reply("I love you too.");
  }
});

client.login('config.token');
