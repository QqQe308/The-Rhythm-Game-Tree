let modInfo = {
	name:"音乐游戏树",
	id: "Rhythm Game",
	author: "QqQe308",
	pointsName: "notes",
	modFiles: ["layers.js", "tree.js"],
	discordName: "B站一只新手Up",
	discordLink: "https://b23.tv/Hlg9D5u",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
	endgame: new Decimal("e100000"),
}
// Set your version in num and name
let VERSION = {
	num: "0.15",
	name: "Cytusser",
}

let winText = `恭喜通关！你已经完成了你的音游之旅…吗？请期待下一个更新！<br>当前结局：1e100000 Notes，下一个更新:第五行的层级！`

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e100000"))
}

let changelog = `<h1>更新日志</h1><br>
<h2>v0.15 Cytusser 2023/10/28~2023/11/5<br>
<h3>- 添加1个层级：Cytus<br>
- 添加Cytus力量<br>
- 添加9个里程碑，8个可购买，1个挑战<br>
- 添加5+5+2+2+7=21个升级<br>
- 重新平衡游戏，更改部分显示文本<br>
- 游戏结局：1e100000 Notes（1e32 Cytus力量）<br><br>
<h2>v0.1 REBALANCE 2023/10/18~2023/10/26<br>
<h3>- 添加2个层级：Lanota，魔王曲<br>
- 添加“PTT”，包括3个可点击<br>
- 添加“RKS”，包括2个可点击<br>
- 添加7+4+5+1=17个升级，3+1+2=6个里程碑<br>
- 重新制作了游戏（修改很多升级，重新平衡，修复了一堆bug）<br>
- 添加了“炸档修复”层级<br>
- 添加了剧情<br>
- 游戏结局：1e33000 Notes（1e20 Phidata，1e240源点）<br><br>
<h2>v0.06 Early Game 2023/10/06-2023/10/16<br>
<h3>- 添加3个层级：歌曲，Arcaea，Phigros<br>
- 添加14+14+16=44个升级<br>
- 添加8个挑战，3个可购买，7个里程碑<br>
- 游戏结局：1e20000 Notes（1e14 Phidata）`//changelog

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return player.points.gte('1e100000')
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(1)
	gain = gain.times(player['a'].points).add(1)
	if (hasUpgrade('s', 11)) gain = gain.times(1e100)
	if (hasUpgrade('s', 12)) gain = gain.times(upgradeEffect('s', 12))
	if (hasUpgrade('s', 13)) gain = gain.times(1e200)
	if (hasUpgrade('s', 14)) gain = gain.times(upgradeEffect('s', 14))
	if (hasAchievement('A', 13)) gain = gain.times(1e50)
	if (hasUpgrade('s', 21)) gain = gain.times(upgradeEffect('s', 21))
	if (hasUpgrade('a', 16)) gain = gain.times(1e30)
	if (inChallenge('a', 12)) gain = gain.times('1e-500')
	if (inChallenge('a', 13)) gain = gain.times('1e-500')
	if(buyableEffect('s',12)>1) gain = gain.times(buyableEffect('s',12))
	if (inChallenge('a', 14)) gain = gain.times('1e-800')
	if (hasUpgrade('p', 14)) gain = gain.times(upgradeEffect('p', 14))
	if (inChallenge('p', 13)) gain = gain.times(1e-55)
	if (hasUpgrade('p', 25)) gain = gain.times(1e308)
	if(buyableEffect('c',11)>1) gain = gain.times(buyableEffect('c',11))
	if (hasUpgrade('s', 31)) gain = gain.times(upgradeEffect('s', 31))
	if (hasUpgrade('a', 41)) gain = gain.times(upgradeEffect('a',41))
if (hasUpgrade('a', 42)) gain = gain.times(upgradeEffect('a',42))
if (hasUpgrade('s', 34)) gain = gain.times(upgradeEffect('s', 34))
if (hasUpgrade('s', 36)) gain = gain.times(1e300)
if (hasUpgrade('l', 16)) gain = gain.times(upgradeEffect('l', 16))
if (hasUpgrade('l', 17)) gain = gain.times(upgradeEffect('l', 17))
if (hasUpgrade('a', 45)) gain = gain.times(upgradeEffect('a', 45))
	
	if(inChallenge('p',12)){gain= gain.pow(0.1)}
	if(hasChallenge('p',13)){gain = gain.pow(challengeEffect('p',13))}
	if(inChallenge('p',15)){gain= gain.pow(0.3)}
	if (hasUpgrade('l', 12)) gain = gain.pow(upgradeEffect('l', 12))
	if (hasUpgrade('l', 14)) gain = gain.pow(upgradeEffect('l', 14))
	if(inChallenge('c',11))gain= gain.pow(0.1)
	if(inChallenge('c',12))gain= gain.pow(0.1)
	
	gain=gain.min('1e100000')

	return gain
}
// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
  
}}

// Display extra things at the top of the page
var displayThings = [
  "v0.15 游戏结局: 1e100000 Notes（硬上限）",
]


 
// Less important things beyond this point!



// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

function rksRandom() {return new Decimal(player.A.resetTime).sub(new Decimal(player.A.resetTime).floor())}