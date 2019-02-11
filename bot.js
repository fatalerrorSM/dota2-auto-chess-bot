const tmi = require("tmi.js");
const twitchCONFIG = require("./twitchCONFIG");
const http = require("http");
const utils = require("./utils/util");

const opts = {
  identity: {
    username: twitchCONFIG.BOT_USERNAME,
    password: twitchCONFIG.OAUTH_TOKEN
  },
  channels: [twitchCONFIG.CHANNEL_NAME]
};

const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

function onMessageHandler(target, context, msg, self) {
  const commandName = msg.split(" ");
  if (commandName[0] === "!инфа") {
    client.say(
      target,
      "Чтобы найти информацию о вашем ранге и ммр в DotaAutoChess -> введите:!rank + ваш steamID (пример:!rank 7656119809*******)"
    );
  }
  if (commandName[0] === "!disc") {
    client.say(target, "discord с лигами https://discord.gg/HfhjDwf");
  }
  if (commandName[0] === "!info") {
    client.say(
      target,
      "To find information about your rank and mmr in DotaAutoChess -> type:!rank + your steamID (example:!rank 7656119809*******)"
    );
  }
  if (commandName[1] == null) {
    console.log("commandName[1] is null");
  } else if (commandName[0] === "!rank") {
    let url = twitchCONFIG.URL;
    let steamID = commandName[1];
    console.log(twitchCONFIG.BOT_USERNAME);
    url += steamID.toString();

    http.get(url, res => {
      console.log("Got response: " + res.statusCode);
      res.setEncoding("utf8");
      res.on("data", function(chunk) {
        let data = JSON.parse(chunk);
        if (utils.isEmpty(data.user_info)) {
          let targetName = "@" + context.username;
          client.say(
            target,
            `${targetName} your id is wrong or bot can't access to information`
          );
        } else {
          let rankString = utils.getRank(data, steamID);

          let targetName = "@" + context.username;

          client.say(
            target,
            `${targetName} your current rank is ${rankString}`
          );
        }
      });
    });
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
