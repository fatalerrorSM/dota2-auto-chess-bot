const tmi = require("tmi.js");
const twitchCONFIG = require("./twitchCONFIG");
const got = require("got");
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
  if (commandName[0] === "!info") {
    client.say(
      target,
      "To find information about your rank and mmr in DotaAutoChess -> type:!rank + your steamID (example:!rank 7656119809*******)"
    );
  }
  if (commandName[1] == null) {
  } else if (commandName[0] === "!rank" && commandName[1].length == 17) {
    let url = twitchCONFIG.URL;
    let steamID = commandName[1];

    url += steamID.toString();
    got(url).then(res => {
      let data = JSON.parse(res.body);
      console.log(data);
      if (utils.isEmpty(data.user_info)) {
        let targetName = "@" + context.username;
        client.say(
          target,
          `${targetName} your id is wrong or bot can't access to information FeelsRainMan`
        );
      } else {
        let rankString = utils.getRank(data, steamID);

        let targetName = "@" + context.username;

        let matches = data.user_info[steamID].match;
        client.say(
          target,
          `${targetName} your current rank is ${rankString} (played matches -> ${matches})`
        );
      }
    }).catch(err => {
      console.error(err);
      client.say(target,`sorry,but bot has some problems FeelsRainMan`);
    });
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
