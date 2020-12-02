require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const MOD_ME = "mod-me";

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!!!!!!");
});

client.on("message", (msg) => {
  if (msg.content === `${BOT_PREFIX}${MOD_ME}`) {
    addMod(msg.member);
  }
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});

function addMod(member) {
  member.roles.add("783647717238767617");
}

client.login(process.env.BOT_TOKEN);
