// function what check obj is empty

const util = {
  isEmpty: function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  },
  getRank: function getRank(data, steamID) {
    let date = new Date();
    console.log(
      `User with ${steamID} take a request at ${date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()}`
    );
    if (data === undefined) {
      return;
    } else {
      switch (data.user_info[steamID].mmr_level) {
        case 0:
          rankString = "uncalibrated";
          break;
        case 1:
          rankString = "♟ Pawn 1";
          break;
        case 2:
          rankString = "♟ Pawn 2";
          break;
        case 3:
          rankString = "♟ Pawn 3";
          break;
        case 4:
          rankString = "♟ Pawn 4";
          break;
        case 5:
          rankString = "♟ Pawn 5";
          break;
        case 6:
          rankString = "♟ Pawn 6";
          break;
        case 7:
          rankString = "♟ Pawn 7";
          break;
        case 8:
          rankString = "♟ Pawn 8";
          break;
        case 9:
          rankString = "♟ Pawn 9";
          break;
        case 10:
          rankString = "♞ Knight 1";
          break;
        case 11:
          rankString = "♞ Knight 2";
          break;
        case 12:
          rankString = "♞ Knight 3";
          break;
        case 13:
          rankString = "♞ Knight 4";
          break;
        case 14:
          rankString = "♞ Knight 5";
          break;
        case 15:
          rankString = "♞ Knight 6";
          break;
        case 16:
          rankString = "♞ Knight 7";
          break;
        case 17:
          rankString = "♞ Knight 8";
          break;
        case 18:
          rankString = "♞ Knight 9";
          break;
        case 19:
          rankString = "♝ Bishop 1";
          break;
        case 20:
          rankString = "♝ Bishop 2";
          break;
        case 21:
          rankString = "♝ Bishop 3";
          break;
        case 22:
          rankString = "♝ Bishop 4";
          break;
        case 23:
          rankString = "♝ Bishop 5";
          break;
        case 24:
          rankString = "♝ Bishop 6";
          break;
        case 25:
          rankString = "♝ Bishop 7";
          break;
        case 26:
          rankString = "♝ Bishop 8";
          break;
        case 27:
          rankString = "♝ Bishop 9";
          break;
        case 28:
          rankString = "♜ Rook 1";
          break;
        case 29:
          rankString = "♜ Rook 2";
          break;
        case 30:
          rankString = "♜ Rook 3";
          break;
        case 31:
          rankString = "♜ Rook 4";
          break;
        case 32:
          rankString = "♜ Rook 5";
          break;
        case 33:
          rankString = "♜ Rook 6";
          break;
        case 34:
          rankString = "♜ Rook 7";
          break;
        case 35:
          rankString = "♜ Rook 8";
          break;
        case 36:
          rankString = "♜ Rook 9";
          break;
        case 37:
          rankString = "♚ King";
          break;
        case 38:
          rankString = `♛ Queen Rank#${data.user_info[steamID].queen_rank}`;
          break;
      }
    }
    return rankString;
  }
};


module.exports = util;
