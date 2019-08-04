const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "Y";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Y.K.M`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Y.K.M ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Hi im pearl gaming bot by y.k.m`,"")
client.user.setStatus("dnd")
});

client.on('message', message => {
   
    let u = convertMS(client.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"
   
   
    function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};
 
    var api = `${Math.round(client.ping)}`
 
 
 if (message.content.startsWith("!info")) {
client.fetchUser('508018871668703248').then(user=>{
 
 
      message.channel.send({
 embed: new Discord.RichEmbed()
    .setColor('#36393e')
       
        .addField('**PING**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**RAM**' , `${~~(process.memoryUsage().heapUsed / 1024 / 1024)}mb` + '.')
 
.addField('**WebSocket:**',api + " ms  ")
       .addField(`:control_knobs: `, `**Uptime :**  ${uptime}`)
               .setFooter(`Run by:
${user.tag}
`)
            })
 
   
 
 
})
 }
  });
 
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};
client.login(process.env.BOT_TOKEN);
