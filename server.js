const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 //كود للتجربة
 
client.on('message', message =>{
  if(message.content === '$ping'){
let start = Date.now(); message.channel.send('pong').then(message => {
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});
 
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");
 
 
 
var fox = "By KillerFox";  // ممنوع اللمس
var perfi = "By KillerFox";
console.log('Code BC By KillerFox Embed and Avatar ');
client.on('message', message => { // BY KillerFox or ALphaCodes
    if (message.author.id === client.user.id) return; // BY KillerFox or ALphaCodes
    if (message.guild) { // BY KillerFox or ALphaCodes
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' '); // BY KillerFox or ALphaCodes
if(message.content.split(' ')[0] == '$bc') { // غير امر او برفكس
    if (!args[1]) { // BY KillerFox or ALphaCodes
message.channel.send("**$bc <Messages> :incoming_envelope:  **"); // ممنوع المس
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return; // ممنوع اللمس
            var bc = new Discord.RichEmbed()
            .setThumbnail(client.user.avatarURL)
            .addField(':beginner: Server :beginner: :twisted_rightwards_arrows: ', `${message.guild.name}`)
            .addField(':heartpulse:  Sender :heartpulse: :twisted_rightwards_arrows: ', `${message.author.username}#${message.author.discriminator}`)
            .addField(':scroll: Message :scroll: :twisted_rightwards_arrows: ', args)
            .addField(':gemini: My Language :gemini: :twisted_rightwards_arrows: ',` JavaScript `)
            .setFooter('Devolope Code By KillerFox') // حط اي شي تبيه
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
