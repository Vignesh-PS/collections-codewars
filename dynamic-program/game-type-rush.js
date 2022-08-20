var text ={"gameServerData":{"text2":" to create a special mailbox for Mona Lisa, where its fans can send their love letters to.","maxKeyPressDelayMs":15000},"type":"StartGameResponse","playerData":{"displayName":"Vignesh 01","country":"India","car":{"id":"61","wheel":"16"}},"gameData":{"gameStatus":"started","text":"The popularity of Mona Lisa has no equivalence. Because of the famous painting's popularity, the Louvre managers decided","otherPlayersLength":4,"gameMode":"car","otherPlayers":{"player1":{"displayName":"Autumnburn Parrot","country":"India","wpm":55.944,"car":{"id":5,"wheel":5},"race":{"hits":"26,26,24,29,24,20,16,25,10","errorHits":"0,0,0,1,2,2,4,2,3"}},"player2":{"displayName":"Dkpro","country":"India","wpm":59.113,"car":{"id":17,"wheel":5},"race":{"hits":"21,24,32,25,26,29,24,14,5","errorHits":"2,2,0,2,1,4,2,3,0"}},"player3":{"displayName":"Mehul Chikara","country":"India","wpm":62.745,"car":{"id":86,"wheel":16},"race":{"hits":"18,30,18,21,29,30,36,18","errorHits":"3,2,2,2,4,1,3,2"}},"player4":{"displayName":"Bowgull Speaker","country":"India","wpm":65.934,"car":{"id":55,"wheel":0},"race":{"hits":"25,34,31,22,19,40,20,9","errorHits":"2,0,2,2,4,0,3,0"}}}}}


var text1 = text.gameData.text;

var text2 = text.gameServerData.text2;

var result = text1+text2;

console.log(result);