//Other Rows
addLayer("A", {
  infoboxes: {
 introBox: {
  title: "成就",
  body(){return "成就页面可以帮助你查看当前的进度！标🏆的成就还有奖励哦！"},
        },
},
  name:"Achievements",
  symbol:"🏆",
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#ffe125",
    resource: "成就", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "音游之始",
            done() {return player.s.points.gte(1)}, 
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得你的第一首歌曲！", 
            textStyle: {'color': '#ABCDEF'},
        },
        12: {
            name: "进展很快",
            done() {return player.points.gte(1.79e308)}, 
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得1.8e308Notes！", 
            textStyle: {'color': '#ABABAB'},
        },
        13: {
            name: "制作音游<br>🏆",
            done() {return player.a.points.gte(1)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得一个源点！<br>奖励：源点获取基本指数为0.5，点数*1e50",
            textStyle: {'color': '#DDBBDD'},
        },
        14: {
            name: "进展快吗",
            done() {return player.points.gte('1e400')},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "达到1e400Notes！",
            textStyle: {'color': '#DDAAAA'},
        },
        15: {
            name: "进入挑战",
            done() {return hasUpgrade('a',15)},
           onComplete(){player.ach=player.ach.add(1)},
            tooltip: "解锁挑战！",
            textStyle: {'color': '#DDCCCC'},
        },
        21: {
            name: "音游之盛",
            done() {return player.s.points.gte(1e15)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "达到1e15歌曲！",
            textStyle: {'color': '#ABBBBB'},
        },
        22: {
            name: "韵律源点<br>🏆",
            done() {return player.a.points.gte(1e10)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "达到1e10源点！<br>奖励：歌曲基本指数+0.616",
            textStyle: {'color': '#DD66AA'},
        },
        23: {
            name: "调律诗篇",
            done() {return player.l.points.gte(1)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得一个诗篇",
            textStyle: {'color': '#44DDDD'},
        },
        24: {
            name: "一古戈尔",
            done() {return player.s.points.gte(1e100)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得1e100(1 Googol)歌曲",
            textStyle: {'color': '#5244ff'},
        },
        25: {
            name: "有必要吗",
            done() {return player.a.ptt.gte(2.886499075)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得2.886499075PTT",
            textStyle: {'color': '#ff5eee'},
        },
        31: {
            name: "下一进展<br>🏆",
            done() {return player.p.points.gte(1)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得一个PhiData！<br>奖励：源点获取量变为原来的10倍（软上限前），解锁剧情",
            textStyle: {'color': '#CC11AA'},
            
        },
        32: {
            name: "再次挑战",
            done() {return hasUpgrade('p',13)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "解锁Phidata挑战！",
            textStyle: {'color': '#CCBBAA'},
            
        },
        33: {
            name: "遗忘的层<br>🏆",
            done() {return player.l.points.gte(8)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得8个诗篇！<br>奖励：100%Phidata每秒",
            textStyle: {'color': '#98f8f2'},
            
        },
        34: {
            name: "从未遗忘<br>🏆",
            done() {return player.l.points.gte(15)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "获得15个诗篇！<br>奖励：解锁更多Phidata升级",
            textStyle: {'color': '#BBCCDD'},
            
        },
        35: {
            name: "DABCABCD<br>ABCADBAA<br>BABCABCD<br>BAAADBAB",
            done() {return hasUpgrade('a',32)},
           onComplete(){player.ach=player.ach.add(1)},
            tooltip: "购买升级“Cyaegha”<br>梗来源：人声部分的空耳",
            textStyle: {'color': '#DABCAB'},
            
        },
        41: {
            name: "困难魔王<br>🏆",
            done() {return hasUpgrade('p',27)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "解锁第五个层级：魔王曲<br>奖励：Phidata^1.1",
            textStyle: {'color': '#55BB11'},
            
        },
        42: {
            name: "人如其名",
            done() {return hasUpgrade('a',35)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "购买升级“#1f1e33”",
            textStyle: {'color': '#1f1e33'},
            
        },
        43: {
            name: "韵律源神<br>🏆",
            done() {return player.a.points.gte(1e100)},
            onComplete(){player.ach=player.ach.add(1)},
            tooltip: "达到1e100源点！<br>奖励：源点^1.04（软上限后）",
            textStyle: {'color': '#e381caf7'},
        },
        44: {
            name: "韵律源神<br>II",
            onComplete(){player.ach=player.ach.add(1)},
            done() {return player.a.points.gte(1e175)},
            tooltip: "达到1e175源点！",
            textStyle: {'color': '#e989d1e7'},
        },
        45: {
            name: "韵律源神<br>III",
            onComplete(){player.ach=player.ach.add(1)},
            done() {return player.a.points.gte(1e240)},
            tooltip: "达到1e240源点！<br>你无不无聊……",
            textStyle: {'color': '#d47ac9d6'},
        },
        51: {
            name: "创新纪元",
            onComplete(){player.ach=player.ach.add(1)},
            done() {return player.c.points.gt(0)},
            tooltip: "获得一个Cyten（第四行重置资源）！",
            textStyle: {'color': '#a3a3a3'},
        },
        52: {
            name: "韵律能源",
            onComplete(){player.ach=player.ach.add(1)},
            done() {return player.c.power.gte(100000)},
            tooltip: "得到100000个Cytus力量！",
            textStyle: {'color': '#666666'},
        },
    },
    tabFormat: {
   "成就": {
        content: [ ["infobox","introBox"],
    ["display-text",
      function() {return '你有 ' + player.ach + ' 成就!'},
     {"color": "#ffe125", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
    "achievements",
],
  unlocked(){return true}
},
},
},
)//Achievements
addLayer("t", {
  infoboxes: {
 introBox: {
  title: "炸档测试",
  body(){return "如果你存档出了问题（比如点数无止尽的增长），请重置本层级！（本层级保留所有层级的升级、挑战、可购买等，只会重置点数和每层的资源）"},
        },
},
    name: "test",
    symbol: "T",
    position: 0,
    startData() { return {
        unlocked() { return true},
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(0), 
    resource: "测试",
    baseResource: "notes", 
    baseAmount() {return player.points}, 
    type: "static", 
    exponent: 1, 
    effect(){
      return {Notes: 1}
    },
    effectDescription() { 
    },
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.5)
       return exp
    },
    row: 4, 
    hotkeys: [
        {key: "t", description: "T： Reset for Test", },
    ],
    layerShown(){ return true},
    
})//test

//Row 0
addLayer("s", {
  infoboxes: {
 introBox: {
  title: "层级1--歌曲",
  body(){return "欢迎您来到本游戏！本游戏的玩法是模组树，主题是音乐游戏！<br>目前你玩到的版本是2023/10/18开始重新平衡的NG-！修改了大部分升级的效果，并且添加了更多内容<br>本层级减益：歌曲*0.5，歌曲基本指数为0.1"},
        },
},
    name: "songs", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#abcdef",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "歌曲", // Name of prestige currency
    baseResource: "notes", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.05,
    // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(0.5)
        mult = mult.times(player['a'].points).add(1)
        if (hasUpgrade('a', 11)) mult = mult.times(upgradeEffect('a', 11))
        if (hasUpgrade('a', 11)&&hasUpgrade('s',15)) mult = mult.times(100)
        if (hasUpgrade('a', 12)) mult = mult.times(upgradeEffect('a', 12))
        mult=mult.times(buyableEffect('s',11))
        if (hasUpgrade('p',13)) mult = mult.times(1e15)
        if (hasUpgrade('p',24)) mult = mult.pow(1.2)
        if(hasChallenge('p',14)){mult = mult.pow(challengeEffect('p',14))}
       mult = mult.times(player['p'].points.add(1).pow(1).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',11)) mult = mult.times(player['p'].points.add(1).pow(4).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',31)) mult = mult.times(player['p'].points.add(1).pow(3).pow(player.m.points.add(1).pow(0.5)))
        if(hasChallenge('p',15)){mult = mult.pow(challengeEffect('p',15))}
        
        if(mult>1e160) mult = mult.times(mult.div(1e160).pow(-0.35))//sc1
         if(mult>1e2000) mult = mult.times(mult.div(1e2000).pow(-0.99))//sc2
         
         if(buyableEffect('c',13)>1) mult = mult.times(buyableEffect('c',13))
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.1)
      if(hasUpgrade('a',21)){exp= exp.add(0.15)}
      if(hasUpgrade('s',23)){exp= exp.add(0.5)}
      if(hasAchievement('A',22)){exp= exp.add(0.616)}
      if(hasUpgrade('a',23)){exp= exp.add(1)}
      if(inChallenge('a',11)){exp= exp.times(0.6)}
      if(hasChallenge('a',11)){exp= exp.times(1.2)}
      if(hasUpgrade('a',16)){exp= exp.times(1.25)}
      if(inChallenge('a',13)){exp= exp.times(0.35)}
      if(hasUpgrade('a',22)){exp= exp.times(1.2)}
      if(hasUpgrade('a',24)){exp= exp.times(1.2)}
      if(inChallenge('a',14)){exp= exp.times(0.15)}
      if(hasChallenge('a',14)){exp= exp.times(1.2)}
      if(hasUpgrade('p',24)){exp= exp.times(1.2)}
      if(inChallenge('p',11)){exp= exp.times(0.5)}
      if(inChallenge('p',12)){exp= exp.times(0.1)}
      if(hasUpgrade('s',26)){exp= exp.times(1.1)}
      if(inChallenge('p',13)){exp= exp.times(0.1)}
     if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
     if (hasUpgrade('p', 33)) exp = exp.times(upgradeEffect('p', 33))
     if(hasUpgrade('l',15)){exp= exp.times(1.035)}
      return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for songs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches(){return ['a','l']},
    deactivated(){de = false
      if(inChallenge('p',13))de = true
      return de
    },
    layerShown(){return true},
 passiveGeneration()
  {mult = new Decimal(0)
  if(hasUpgrade('a',13))
  mult = new Decimal(1)
  if(hasUpgrade('s',17))
  mult = new Decimal(2)
  if(hasMilestone('p',0))
  mult = mult.add(5)
  if(hasUpgrade('p',13))
  mult = mult.times(5)
  return mult},
  softcap:new Decimal (1e20),
  softcapPower:new Decimal(0.05),
  autoUpgrade() {return hasMilestone('l',0)||hasMilestone('c',0)},
  resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "a") {
                if (hasUpgrade("a", 12)&&!player.a.activeChallenge) {kept.push("upgrades")}
            }
            if (resettingLayer == "p") {
                if (hasMilestone("p", 5)) {kept.push("buyables")}
            }
            if (resettingLayer == "m") {
                if (hasMilestone("m", 1)) {kept.push("buyables")}
            }
            if (resettingLayer == "c") {
                if (hasMilestone("c", 3)) {kept.push("upgrades")}
            }
            if (resettingLayer == "t") {
                kept.push("upgrades")
            }
            layerDataReset(this.layer, kept)
        }
    },
      upgrades: {
    11:{ title: "困难游戏的开始",
                description: "欢迎您来到本游戏！将Note获取乘以1e100，因为这实在是太难了！",
                cost: new Decimal(1),
                effect() { return 1e100 },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "游戏可真<困难>",
                description:"增加Note获取量，效果为歌曲^6",
                cost: new Decimal(25),
                unlocked() { return (hasUpgrade('s', 11))},
                effect() {
             return player.s.points.add(1).pow(6).min(new Decimal('1e13000'))
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "这游戏不要太“简单”？？",
                description:"Note获取量*1e200",
                cost: new Decimal(60),
                unlocked() { return (hasUpgrade('s', 12))},
                effect() {
        return new Decimal(1e200)},},
    14:{ title: "不需要的升级",
                description:"升级12的效果加强（^6——^10）",
                cost: new Decimal(1000),
                unlocked() { return (hasUpgrade('s', 13))},
                effect() {
        return player.s.points.add(1).pow(4).min(new Decimal('1e8000'))
        },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    15:{ title: "这游戏就这点内容吗？",
                description:"解锁下一个层级，韵律，歌曲*100（软上限前）（在获得一个韵律升级后生效）",
                cost: new Decimal(1500),
                unlocked() { return (hasUpgrade('s', 14))},
              },
    16:{title:"我讨厌挂机",
    description:"源点获取量指数+0.3（0.5-0.8），并且增益乘以2倍",
    cost: new Decimal(10000),
    unlocked() { return (hasUpgrade('a', 14))}, },
    17:{ title: "讨厌的时间墙",
                description:"解锁一个Arcaea升级，每秒获得200%歌曲和源点",
                unlocked() { return (hasUpgrade('s', 16))},
                cost: new Decimal(1e5),},
    21:{title:"为何不多点升级？",
    description:"源点增益点数效果增强（源点^10）",
    cost: new Decimal(1e6),
    unlocked() { return (hasUpgrade('s', 17))},
      effect() {
        return player.a.points.add(1).pow(10)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    22:{title:"终于结束挂机",
    description:"解锁更多Arcaea升级，源点获取量变为原来的10倍（源点软上限：1e10）",
    cost: new Decimal(1e7),
    unlocked() { return (hasChallenge('a', 11))},
      effect() {
        return new Decimal(10) }, },
    23:{title:"单曲精选集",
    description:"歌曲基本指数增加0.5，源点获取量*5",
    cost: new Decimal(1e14),
    unlocked() { return (hasUpgrade('a', 17))},},
    24:{title:"歌曲太多了…",
    description:"解锁两个歌曲可购买，源点获取指数+0.1（软上限前）",
    cost: new Decimal(1e28),
    unlocked() { return (hasUpgrade('a', 21))},},
    25:{title:"极限数值",
    description:"根据歌曲数量增益源点获取量",
    cost: new Decimal(1e96),
    unlocked() { return (hasMilestone('l', 1))},
    effect() {
        return player.s.points.add(10).log(2).pow(1.2).add(1) },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    },
    26:{title:"无限歌曲",
    description:"歌曲指数乘以1.1",
    cost: new Decimal('1.80e308'),
    unlocked() { return (hasUpgrade('s', 25))}, },
    27:{title:"10^2^9=1e512",
    description:"源点指数乘以1.15",
    cost: new Decimal('1e512'),
    unlocked() { return (hasUpgrade('s', 26))}, },
},
    buyables: {
    11: {
        cost(){return this.effect().pow(3)},
        display() { return "基于购买次数增加歌曲的乘数（软上限前）<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名曲师",
        effect() {return new Decimal(2).pow(getBuyableAmount(this.layer,this.id).add(1))},
        unlocked(){unlock= false
        if(hasChallenge('a',13)) unlock=true
        if(hasMilestone('p',1)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost())).log(2).div(3)))
        },
        if (canAfford=true&&hasUpgrade('s',24)) {
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost().add(1)).max(1)).log(3).div(2)))},
    },
    12: {
        cost(){return this.effect().pow(2)},
        display() { return "基于购买次数增加Note乘数<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名谱师",
        effect() {return new Decimal(3).pow(getBuyableAmount(this.layer,this.id).add(1))},
        unlocked(){unlock= false
        if(hasUpgrade('s',24)) unlock=true
        if(hasMilestone('p',1)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost())).log(3).div(2)))
        },
        if(canAfford=true&&hasUpgrade('s',24))  {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost().add(1)).max(1)).log(3).div(2)))},
    },
    13: {
        cost(){return this.effect().pow(10)},
        display() { return "基于购买次数增加源点乘数<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名画师",
        effect() {return new Decimal(5).pow(getBuyableAmount(this.layer,this.id).add(1))},
        unlocked(){unlock= false
        if(hasUpgrade('s',24)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
            if(!hasMilestone('p',1)){player[this.layer].points = player[this.layer].points.sub(this.cost())}
            if(!hasMilestone('p',1)){setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))}
            if(hasMilestone('p',1)){setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost())).log(5).div(5)))}
        },
        if(canAfford=true&&hasMilestone('p',3)&&player.s.points>1e10)  {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost().add(1)).max(1)).log(5).div(5)))},
    },
}
})//Songs

//Row 1
addLayer("a", {
  infoboxes: {
    introBox: {
    title: "层级2--Arcaea",
    body(){ return "欢迎来到第二层！本层级会重置上一层的升级和其他一些东西，但是会有更多的增益，加油！<br>本层级减益：*0.5，^0.1（软上限前）<br>资源名称由来：Arcaea中文名：韵律源点"
                },
        },
    chalBox: {
    title: "Arcaea挑战",
    body(){ return "欢迎来到挑战！你可以进入挑战让游戏变得更困难，但是完成挑战会有更多提升，也能解锁后面的游戏内容！"
    },
        },
    pttBox: {
    title: "PTT",
    body(){ return "PTT是Arcaea中的游戏实力衡量标准，有了越多的PTT，就会给其他资源一些增益，不过PTT是有上限的，接下来可以解锁更多和PTT相关的内容"
    },
        },
},
    name: "Arcaea",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked() { return (hasUpgrade('s', 15))},
		points: new Decimal(0),
		ptt: new Decimal(0),
		pttMax: new Decimal(1),
		pttMax2: new Decimal(1),
    }},
    color: "#DDBBDD",
    requires: new Decimal(2000), 
    resource: "源点",
    baseResource: "歌曲", 
    baseAmount() {return player['s'].points}, 
    type: "normal", 
    exponent: 0.15, 
    effect(){
      return {Notes: player['a'].points.add(1)}
    },
    effectDescription() { 
            return "Note和歌曲增益乘以"+format(player['a'].points.add(1))},
    gainMult() { 
        mult = new Decimal(0.5)
        if (hasUpgrade('s', 16)) mult = mult.times(2)
        if (hasChallenge('a', 12)) mult = mult.times(15)
        if (hasUpgrade('s', 22)) mult = mult.times(10)
        if(hasUpgrade('s',23)){mult = mult.times(5)}
        if(hasUpgrade('s',25)){mult = mult.times(upgradeEffect('s',25))}
        if (hasChallenge('p',11)) mult = mult.times(challengeEffect('p',11))
        mult=mult.times(buyableEffect('s',13))
        if(hasChallenge('p',14)){mult = mult.pow(challengeEffect('p',14))}
       mult = mult.times(player['p'].points.add(1).pow(1).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',11)) mult = mult.times(player['p'].points.add(1).pow(4).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',31)) mult = mult.times(player['p'].points.add(1).pow(3).pow(player.m.points.add(1).pow(0.5)))
        if(hasChallenge('p',15)){mult = mult.pow(challengeEffect('p',15))}
        if(hasUpgrade('a',26)){mult = mult.times(upgradeEffect('a',26))}
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.1)
      if(hasAchievement('A',13)){exp= exp.add(0.4)}
      if(hasUpgrade('a',23)){exp= exp.add(1)}
      if(hasUpgrade('s',16)){exp= exp.add(0.2)}
      if(hasUpgrade('s',24)){exp= exp.add(0.1)}
      if(hasChallenge('a',14)){exp= exp.mul(1.2)}
      if(inChallenge('p',11)){exp= exp.times(0.5)}
      if(inChallenge('p',12)){exp= exp.times(0.1)}
      if(hasUpgrade('a',25)){exp= exp.times(1.2)}
      if(hasUpgrade('p',21)){exp= exp.times(upgradeEffect('p',21))}
      if(hasUpgrade('s',27)){exp= exp.times(1.15)}
      if(inChallenge('p',13)){exp= exp.times(0.1)}
      if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
      if(hasAchievement('A',33)){exp= exp.times(1.04)}
      if(hasUpgrade('p',34)){exp= exp.times(upgradeEffect('p',34))}
      if(hasUpgrade('a',36)){exp= exp.times(1.005)}
      return exp
    },
    row: 1, 
    branches(){return ['p','m']},
    deactivated(){de = false
      if(inChallenge('p',13))de = true
      return de
    },
    hotkeys: [
        {key: "a", description: "A: Reset for Arcaea", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){shown= false
    if(hasUpgrade('s',15)){shown=true}
    if(hasUpgrade('a',11)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
 passiveGeneration(){
   mult = new Decimal(0)
  if(hasUpgrade('s',17))
  mult = new Decimal(2)
  if(hasMilestone('p',0))
  mult = mult.add(5)
  if(hasUpgrade('p',13))
  mult = mult.times(5)
  return mult },
  softcap:new Decimal (1e10),
  softcapPower:new Decimal(0.05),
  autoUpgrade() {return hasMilestone('p',2)||hasMilestone('c',0)},
  resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
                kept.push("upgrades","challenges")
            }
            if (resettingLayer == "p") {
              if (hasMilestone("p", 0)||hasMilestone("c", 0)) {kept.push("ptt","pttMax","pttMax2")}
                if (hasMilestone("p", 4)||hasMilestone("c", 0)) {kept.push("challenges")}
            }
            if (resettingLayer == "m") {
                if (hasMilestone("m", 1)||hasMilestone("c", 0)) {kept.push("challenges","ptt","pttMax","pttMax2")}
            }
            if (resettingLayer == "c") {
                if (hasMilestone("c", 0)) {kept.push("challenges")}
                if (hasMilestone("c", 3)) {kept.push("challenges","upgrades")}
            if (hasMilestone("c", 5)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2")}
              
            }
            layerDataReset(this.layer, kept)
        }
    },
challenges: {
    11: {
        name: "Past",
        challengeDescription: "歌曲获取量变为原来的0.6次方",
        goalDescription:"1e400 Notes",
        rewardDescription:"歌曲获取量^1.2",
        unlocked(){unlock= false
        if(hasUpgrade('a',15)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('1e400')||hasMilestone('p',0)},
    },
    12: {
        name: "Present",
        challengeDescription:"Note获取量变为原来的1e-500倍",
        goalDescription:"1e10 Notes",
        rewardDescription:"源点获取量变为原来的15倍",
        unlocked(){unlock= false
        if(hasChallenge('a',11)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gt(1e10)||hasMilestone('p',0)},
    },
    13: {
        name: "Future",
        challengeDescription:"歌曲获取量^0.35，且Note获取量*1e-500",
        goalDescription:"1e40 Notes",
        rewardDescription:"解锁一个歌曲可购买，并自动购买",
        unlocked(){unlock= false
        if(hasChallenge('a',12)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gt(1e40)||hasMilestone('p',0)},
    },
    14: {
        name: "Beyond",
        challengeDescription:"歌曲获取量^0.15，且Note获取量*1e-800",
        goalDescription:"10.1 Notes",
        rewardDescription:"解锁下一个层级，歌曲和源点的指数*1.2（软上限前）",
        unlocked(){unlock= false
        if(hasUpgrade('a',24)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gt(10.1)||hasMilestone('p',0)},
    },
},
upgrades: {
    11:{ title: "我们音游玩家是这样的",
    description:"根据源点数量乘以歌曲的获取量，效果是源点^3",
    cost: new Decimal(1),
    effect() {
    return player['a'].points.add(1).pow(3)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "韵律的力量",
    description:"升级11效果提升（源点^3——^8），源点不重置歌曲升级",
    cost: new Decimal(2),
    unlocked() { return (hasUpgrade('a', 11))},
    effect() {
   return player['a'].points.add(1).pow(5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "我知道，这很痛苦",
    description:"每秒获得100%重置时获得的歌曲",
   cost: new Decimal(2),
    unlocked() { return (hasUpgrade('a', 12))},
     },
    14:{ title: "优质曲库",
   description:"解锁更多歌曲升级",
    cost: new Decimal(5),
    unlocked() { return (hasUpgrade('a', 13))},},
    15:{title:"PoTenTial",
    description:"解锁挑战",
    cost: new Decimal(500),
    unlocked() { return (hasUpgrade('s', 17))},},
    16:{title:"有那么快吗？",
    description:"歌曲^1.25，Notes*1e30（挑战中可能有效！）",
    cost: new Decimal(9999),
    unlocked() { return (hasChallenge('a', 11))},},
    17:{title:"高质量曲库",
    description:"再次解锁更多歌曲升级",
    cost: new Decimal(199999),
    unlocked() { return (hasChallenge('a', 12))},},
     21:{title:"挑战3的额外奖励？？",
    description:"歌曲基本指数增加0.25",
    cost: new Decimal(3e8),
    unlocked() { return (hasChallenge('a', 13))},},
    22:{title:"购买歌曲",
    description:"歌曲指数乘以1.2（软上限前）",
    cost: new Decimal(3e9),
    unlocked() { return (hasUpgrade('a', 21))},},
    23:{title:"真的有软上限吗？",
    description:"歌曲和源点指数+1（软上限前）",
    cost: new Decimal(1e12),
    unlocked() { return (hasUpgrade('a', 22))},},
    24:{title:"未来的挑战",
    description:"解锁第四个挑战“Beyond”，歌曲指数*1.2（软上限前）",
    cost: new Decimal(1e13),
    unlocked() { return (hasUpgrade('a', 23))},},
    25:{ title: "韵律之光",
    description:"源点指数乘以1.2（软上限前）",
    cost: new Decimal(5e14),
    unlocked() { return (hasMilestone('l', 0))}, },
    26:{ title: "韵律的力量 II",
    description:"根据PTT增益源点，效果是100^(PTT+1)（软上限前）",
    cost: new Decimal(1.5e15),
    unlocked() { return (hasMilestone('l', 1))},
    effect() {
   return new Decimal(100).pow(player.a.ptt.add(1))
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    27:{ title: "韵律之神",
    description: "解锁下一个层级，Phigros",
    cost: new Decimal(1e17),
    unlocked() { return (hasMilestone('l', 2))}, },
    31:{ 
      fullDisplay() {return "Singularity<br>加强PTT对Phidata的增益效果<br>当前效果："+format(this.effect())+"×<br>需要：8 PTT"},
    cost() {return new Decimal(8)},
    canAfford() {return player.a.ptt.gte(8)},
    unlocked() { return (hasUpgrade('p', 23))},
    effect() {
   return new Decimal(2).pow(player.a.ptt.div(3))
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    32:{ 
      fullDisplay() {return "Cyaegha<br>基于歌曲增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.1 PTT"},
    canAfford() {return player.a.ptt.gte(8.1)},
    unlocked() { return (hasUpgrade('a', 31))},
    effect() {
   return player.s.points.add(10).log(3).pow(0.25)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    33:{ 
      fullDisplay() {return "烈華RESONANCE<br>基于源点增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.2 PTT"},
    canAfford() {return player.a.ptt.gte(8.2)},
    unlocked() { return (hasUpgrade('a', 32))},
    effect() {
   return player.a.points.add(10).log(2).pow(0.4)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    34:{ 
      fullDisplay() {return "Halcyon<br>基于魔王曲增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.5 PTT"},
    canAfford() {return player.a.ptt.gte(8.5)},
    unlocked() { return (hasMilestone('m',0))},
    effect() {
   return player.m.points.mul(3).add(1).pow(4)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    35:{ 
      fullDisplay() {return "#1f1e33<br>基于Phidata增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.9 PTT"},
    canAfford() {return player.a.ptt.gte(8.9)},
    unlocked() { return (hasMilestone('m',1))},
    effect() {
   return player.p.points.add(10).log(10).pow(1.2)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    36:{ 
      fullDisplay() {return "Dantalion<br>源点^1.005（软上限后）<br>当前效果：^1.005<br>需要：9.3 PTT"},
    canAfford() {return player.a.ptt.gte(9.3)},
    unlocked() { return (hasUpgrade('p',35))},},
    37:{ 
      fullDisplay() {return "CHAOS<br>是时候了<br>...<br>解锁下一个层级，Cytus<br>需要：10.8 PTT"},
      onPurchase() {if(!hasMilestone('c',0)) confirm("…下一纪元，Cytus。")},
    canAfford() {return player.a.ptt.gte(10.8)},
    unlocked() { return hasUpgrade('p',37)},},
},
clickables: {
    11: {
      title() {return "增加PTT"},
      display() {return "点击或按住以增加PTT！"},
      canClick() {return true},
      onClick() {player.a.ptt = player.a.ptt.add(new Decimal(10).pow(player.a.pttMax.add(1)).log(2).div(new Decimal(10).pow(player.a.ptt.add(1)).log(2)).log(3).div(5).max(0))},
      onHold() {player.a.ptt = player.a.ptt.add(new Decimal(10).pow(player.a.pttMax.add(1)).log(2).div(new Decimal(10).pow(player.a.ptt.add(1)).log(2)).log(3).div(5).max(0))},
    },
    12: {
      title() {return "增加PTT上限"},
      display() {return "点击或按住以增加PTT上限<br>（基于诗篇数量）"},
      canClick() {return true},
      onClick() {player.a.pttMax = player.a.pttMax.add(player.l.points.add(1).log(10).add(1).pow(2).sub(player.a.pttMax.mul(player.a.pttMax2)).div(2).max(0))},
      onHold() {player.a.pttMax = player.a.pttMax.add(player.l.points.add(1).log(10).add(1).pow(2).sub(player.a.pttMax.mul(player.a.pttMax2)).div(2).max(0))},
      unlocked() {return hasMilestone('l',2)||hasMilestone('p',1)}
    },
    13: {
      title() {return "增加PTT上限2"},
      display() {return "增加上一个可点击效果的上限（基于Phidata数量）<br>上限×"+format(new Decimal(1).div(player.a.pttMax2))+"<br>确切来说，×"+new Decimal(1).div(player.a.pttMax2)},
      canClick() {return true},
      onClick() {player.a.pttMax2 = player.a.pttMax2.sub(player.p.points.add(1).log(100).add(1).div(5).pow(0.5).mul(player.a.pttMax2.pow(10)).max(player.a.pttMax2.div(100)).sub(player.a.pttMax2.div(100)).min(player.a.pttMax2.mul(0.1)))},
      onHold() {player.a.pttMax2 = player.a.pttMax2.sub(player.p.points.add(1).log(100).add(1).div(5).pow(0.5).mul(player.a.pttMax2.pow(10)).max(player.a.pttMax2.div(100)).sub(player.a.pttMax2.div(100)).min(player.a.pttMax2.mul(0.1)))},
      unlocked() {return hasUpgrade('l',13)}
    },
},
tabFormat: {
   "升级": {
        content: [ ["infobox","introBox"],
          "main-display",
    "prestige-button",
        ["display-text",
      function() {return '你有 ' + format(player.s.points) + ' 歌曲<br>你正在获得 ' + format(new Decimal(tmp.a.resetGain).mul(tmp.a.passiveGeneration))+' 源点每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "upgrades",
],
    },
   "挑战": {
        content: [ ["infobox","chalBox"],
   "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('a',15)}
},
   "PTT": {
        content: [ ["infobox","pttBox"],
          "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.a.ptt.mul(10000).floor().div(10000)) + ' PTT!'},
     {"color": "#ff5eee", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '当前PTT上限： ' + format(player.a.pttMax.mul(10000).floor().div(10000)) + ' PTT'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '确切来说，你有 ' + player.a.ptt + ' PTT'+'<br>当前的PTT上限为 ' + player.a.pttMax},
     {"color": "#ffffff", "font-size": "9px", "font-family": "Comic Sans MS"}],
     "blank",
    "clickables",
    ['row',[['upgrade',31],['upgrade',32],['upgrade',33],['upgrade',34],['upgrade',35],['upgrade',36],['upgrade',37]]]
],
  unlocked(){return hasUpgrade('l',11)||hasMilestone('p',1)}
},
},
})//Arcaea
addLayer("l", {
  infoboxes: {
    introBox: {
    title: "层级3--Lanota",
    body(){ return "欢迎来到第三层！本层级和上一层一样，会重置歌曲的升级和其他一些东西，但是这个层级是“静态”的，所以你不可以像源点一样获得很多很多。不过，这个层级会有更多的增益，继续加油！<br>资源名称由来：Lanota中文名：调律诗篇"
                },
        },
},
    name: "调律诗篇",
    symbol: "L",
    position: 0,
    startData() { return {
        unlocked() { return (hasChallenge('a', 14))},
		points: new Decimal(0),
    }},
    color: "#44DDDD",
    requires: new Decimal(1e90), 
    resource: "诗篇",
    baseResource: "歌曲", 
    baseAmount() {return player['s'].points}, 
    type: "static", 
    exponent: 1, 
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.07)
      if(player.l.points.gte(4)) exp= new Decimal(0.06)
      if(player.l.points.gte(15)) exp= new Decimal(0.015).div(player.l.points.sub(14).pow(0.5))
      if(player.l.points.gte(30)) exp= new Decimal(0.001)
       return exp
    },
    row: 1, 
    branches(){return ['p','m']},
    canBuyMax(){return player.l.points.gte(30)},
    hotkeys: [
        {key: "l", description: "L: Reset for Lanota", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){shown= false
    if(hasChallenge('a',14)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
    autoPrestige() {return hasUpgrade('p',12)},
    resetsNothing() {return hasUpgrade('p',12)},
    autoUpgrade() {return hasMilestone('p',2)||hasMilestone('c',0)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
          if (resettingLayer == "t") {
                kept.push("upgrades","milestones")
            }
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "p") {
                if (hasMilestone("p", 1)||hasMilestone("c", 1)) {kept.push("milestones")}
            }
            if (resettingLayer == "m") {
                if (hasMilestone("m", 1)||hasMilestone("c", 1)) {kept.push("milestones")}
            }
            if (resettingLayer == "c") {
                if (hasMilestone("c", 1)) {kept.push("milestones")}
                if (hasMilestone("c", 3)) {kept.push("milestones","upgrades")}
            }
            layerDataReset(this.layer, kept)
        }
    },
  softcap:new Decimal (1e1000000),
  softcapPower:new Decimal(0.05),
    challenges: {
    11: {
        name: "EZ",
        challengeDescription(){
          if(!hasUpgrade('p',21)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"}
          if(hasUpgrade('p',21)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/100"}},
        goalDescription(){return "1e"+new Decimal(14).add(challengeCompletions(this.layer,this.id))+"源点"},
        rewardDescription(){return "根据挑战完成次数增益源点<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(5)},
        unlocked(){unlock= false
        if(hasUpgrade('p',13)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',21)){return new Decimal(5)}
          if(hasUpgrade('p',21)){return new Decimal(100)}},
        canComplete: function() {
          return player.a.points.gte(new Decimal(10).pow(14).mul(new Decimal(10).pow(challengeCompletions(this.layer,this.id))))}
        },
    },
    upgrades: {
    11:{ title: "本源之点",
    description:"在源点层级解锁“PTT”界面",
    cost: new Decimal(2),
    unlocked() {return hasMilestone('l',1)}, },
    12:{ title: "潜能无限",
    description() {return "解锁下一个PTT可点击，PTT对点数也有提升效果"},
    effect() {return player.a.ptt.add(10).log(10).min(1.25)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    cost: new Decimal(3),
    unlocked() {return hasMilestone('l',2)}, },
    13:{ title: "小潜力股",
    description() {return "再解锁下一个PTT可点击，PTT对Phidata也有提升效果"},
    effect() {return new Decimal(2).pow(player.a.ptt.div(3).add(1))},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: new Decimal(11),
    unlocked() {return hasUpgrade('p',22)}, },
    14:{ title: "潜能无限 II",
    description() {return "让RKS也生效于“潜能无限”的效果（基于RKS指数提升点数"},
    effect() {return player.p.rks.add(9).log(10).min(1.1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    cost: new Decimal(25),
    unlocked() {return hasUpgrade('p',37)}, },
    15:{ title: "歌曲串烧",
    description() {return "歌曲^1.035（软上限后）"},
    cost: new Decimal(28),
    unlocked() {return hasUpgrade('p',37)}, },
   },
    milestones: {
    0: {
        requirementDescription: "获得1个诗篇",
        effectDescription: "自动购买歌曲升级，解锁一个Arcaea升级",
        done() { return player.l.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2个诗篇",
        effectDescription: "解锁一个歌曲升级，解锁Lanota升级",
        unlocked() {return hasMilestone('l',0)},
        done() { return player.l.points.gte(2) }
    },
    2: {
        requirementDescription: "获得3个诗篇",
        effectDescription: "解锁更多升级",
        unlocked() {return hasMilestone('l',1)},
        done() { return player.l.points.gte(3) }
    },
},
tabFormat: {
    "里程碑": {
        content: [ ["infobox","introBox"],
          "main-display",
    "prestige-button",
        ["display-text",function() {return '软上限：3诗篇，15诗篇，30诗篇！'},
        {"color": "#ffffff", "font-size": "px", "font-family": "Comic Sans MS"}],
    "milestones",],},
    "升级": {
        content: [ 
     "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('l',1)}
    },
"挑战": {
        content: [ "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('m',13)}
}
},
})//Lanota

//Row 2
addLayer("p", {
    infoboxes: {
    introBox: {
    title: "层级4--Phigros",
    body(){
      return "欢迎来到第四层！恭喜你，已经来到了第三行！本层级不仅会重置“歌曲”层级，还会重置“Arcaea”层级和“Lanota”层级。不过，你可以通过获得里程碑来给予一些重置时的补助！<br>资源名称由来：Phigros中的“Phi”和Phigros中的机制“data”结合：Phidata"},
    },
    upgBox: {
    title: "Phigros升级",
    body(){ return "和前面的升级类似，Phigros升级也需要Phidata购买，不同的是，大部分升级不是购买上一个就解锁了，而是需要别的解锁条件"
                },
        },
    chalBox: {
    title: "Phigros挑战",
    body(){ return "和前面的挑战不同的是，Phigros挑战可以完成多次，后续还可以提升挑战次数，根据你的完成次数，挑战的奖励会变得更强"
                },
        },
    RKSBox: {
    title: "RKS",
    body(){ return "和PTT类似，RKS是Phigros中的游戏实力衡量标准，有了越多的RKS，就会给其他资源一些增益，不过RKS是有上限的，接下来可以解锁更多和RKS相关的内容。不同点是，RKS可点击并非随时可以点击"
                },
        },
    p1: {
    title: "Phigros•冰封世界",
    body(){ return "本层级所有剧情来自Phigros官方！接下来会根据你的游戏进度解锁更多剧情<br>楔子<br>曾有流浪人，未受洗礼，未信神。<br>攀似绿箩藤，圣石登宵，持剑诰。<br>我要这，穹顶降镐，地霜共冰消，渊无饥骨，路非遥。<br>垂髫闻，沉思莞尔，教后生：何不，振臂筑塔，通云霄。——2089.10.27"},
    unlocked() {return hasMilestone('p',0)},
        },
    p2: {
    title: "诗笺#1",
    body(){ return "诗笺#1  收集时间770/03/27  保管单位：deathMark  等级：main  逃吧。   事到如今  转瞬即逝的虹  还能逃到哪里去  哪里容得  醉人的花香，  故去的残想，  清醒的思想，  虚构的梦乡。  哪里就是  我的故乡。  "},
    unlocked() {return hasUpgrade('p',13)},
        },
    p3: {
    title: "诗笺#2",
    body(){ return "诗笺#2  收集时间770/02/29  保管单位：deathMark  等级：main  冰封世界，融化中。    五神鸟拙追旭日，光携风行列成诗。  春照唤鸠归，剑已出鞘，难再回。  峰上两相遇，针芒相对，淋绦絮。  三寸巧舌嚼不烂，五丈坚岩立俩人。  云开雾散仰苍穹，古韵幽弹檄终曲。  萨里巅，悉听风，风何言，言何语，皆被小儿闲涂。  常言道，东海吞象无尸骨，覆水浇地亦难收。  且叫豪侠驾车迎，连营下榻待新机。  "},
    unlocked() {return hasUpgrade('p',22)},
        },
    p4: {
    title: "诗笺#3",
    body(){ return "诗笺#3  收集时间770/03/01  保管单位：deathMark  等级：main  咕。咕。咕。咕。  溲泡泛。   细鳞片鲴炖白𬞟，馍汤灌口魄神还。  乐府兴来调琴瑟，秦人似获蛊中音。  驰行冰原二十载，唯闻笛笙青河沿。  求留小憩痴人苑，细问客从何处来。  "},
    unlocked() {return hasUpgrade('p',25)},
        },
    p5: {
    title: "诗笺#4",
    body(){ return "诗笺#4  收集时间770/03/06  保管单位：deathMark  等级：main  人类的身份这么重要吗……  活物需要名字，  死物也需要名字。  活物为了  厚土埋身  亦存生机。  死物无欲，  只求活着。"},
    unlocked() {return hasUpgrade('p',27)},
        },
    p6: {
    title: "诗笺#5",
    body(){ return "诗笺#5  收集时间770/03/03  保管单位：deathMark  等级：main  学不会写诗……   春天，  万物复苏的季节。  "},
    unlocked() {return hasUpgrade('p',33)},
        },
    p7: {
    title: "诗笺#6",
    body(){ return "诗笺#6  收集时间770/03/32  保管单位：deathMark  等级：main  光。   流亡时代，  鸢尾将开出花来，  万丈光芒，  穿透阴霭，  拨见云开。  "},
    unlocked() {return hasUpgrade('p',37)},
        },
},
    name: "Phigros",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked() { return (hasUpgrade('a', 27))},
		points: new Decimal(0),
		rks: new Decimal(0),
		rksMax: new Decimal(1),
		rksMax2:new Decimal(1),
    }},
    color: "#CC11AA",
    requires: new Decimal(1e17), 
    resource: "Phidata",
    baseResource: "源点", 
    baseAmount() {return player['a'].points}, 
    type: "normal", 
    exponent: 0.05, 
    effect(){
        if(!hasUpgrade('p',11)){return player['p'].points.add(1).pow(player.m.points.add(1).pow(0.5))}
      if(hasUpgrade('p',11)&&!hasUpgrade('p',31)){return player['p'].points.add(1).pow(5).pow(player.m.points.add(1).pow(0.5))}
      if(hasUpgrade('p',31)){return player['p'].points.add(1).pow(8).pow(player.m.points.add(1).pow(0.5))}
    },
    effectDescription() { 
      if(!hasUpgrade('p',11)){
            return "歌曲和源点增益乘以"+format(player['p'].points.add(1).pow(player.m.points.add(1).pow(0.5)))}
      if(hasUpgrade('p',11)&&!hasUpgrade('p',31)){return "歌曲和源点增益乘以"+format(player['p'].points.add(1).pow(5).pow(player.m.points.add(1).pow(0.5)))}
      if(hasUpgrade('p',31)){return "歌曲和源点增益乘以"+format(player['p'].points.add(1).pow(8).pow(player.m.points.add(1).pow(0.5)))}
    },
    gainMult() { 
        mult = new Decimal(1)
        if(hasChallenge('p',12)){mult = mult.times(challengeEffect('p',12))}
        if(hasUpgrade('p',15)){mult = mult.times(upgradeEffect('p',15))}
        if(hasUpgrade('p',16)){mult = mult.times(upgradeEffect('p',16))}
        if(hasUpgrade('p',17)){mult = mult.times(upgradeEffect('p',17))}
        if(hasUpgrade('l',13)){mult = mult.times(upgradeEffect('l',13))}
        if(hasUpgrade('a',31)){mult = mult.times(upgradeEffect('a',31))}
        if(hasUpgrade('a',32)){mult = mult.times(upgradeEffect('a',32))}
        if(hasUpgrade('a',33)){mult = mult.times(upgradeEffect('a',33))}
        if(hasUpgrade('a',34)){mult = mult.times(upgradeEffect('a',34))}
        if(hasUpgrade('a',35)){mult = mult.times(upgradeEffect('a',35))}
        if(hasChallenge('p',14)){mult = mult.pow(challengeEffect('p',14))}
        if(hasChallenge('p',15)){mult = mult.pow(challengeEffect('p',15))}
        if(hasUpgrade('m',11)){mult = mult.times(100000)}
        if(hasUpgrade('p',37)){mult = mult.times(1e8)}
        if(buyableEffect('c',12)>1) mult = mult.times(buyableEffect('c',12))
        
        if(hasUpgrade('p',36)){mult = mult.pow(upgradeEffect('p',36))}
        return mult
    },
    gainExp() { 
      exp= new Decimal(1)
      if(hasUpgrade('p',26)){exp = exp.times(1.15)}
      if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
      if(hasAchievement('A',41)){exp = exp.times(1.1)}
       return exp
    },
    row: 2, 
    branches(){return ['c']},
    hotkeys: [
        {key: "p", description: "P: Reset for Phigros", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){shown= false
    if(hasUpgrade('a',27)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
               kept.push("buyables","upgrades","challenges")
            }
            if (resettingLayer == "c") {
            if(hasMilestone('c',1))kept.push("milestones")
            if(hasMilestone('c',2))kept.push("milestones","rks","rksMax","rksMax2")
            if(hasMilestone('c',4))kept.push("milestones","rks","rksMax","rksMax2","challenges")
            }
            layerDataReset(this.layer, kept)
        }
    },
 passiveGeneration()
  { mult = new Decimal(0)
  if(hasAchievement('A',33)) mult = new Decimal(1)
  if(hasUpgrade('p',25)) mult = new Decimal(5)
 // mult = new Decimal(0)
  return mult},
  softcap:new Decimal (1e10),
  softcapPower:new Decimal(0.15),
  autoUpgrade() {return hasMilestone('c',3)},
  challenges: {
      11: {
        name: "EZ",
        challengeDescription(){
          if(!hasUpgrade('p',21)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/2"}
          if(hasUpgrade('p',21)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/10"}},
        goalDescription(){return "1e"+new Decimal(8).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(4))+"源点"},
        rewardDescription(){return "根据挑战完成次数增益源点（软上限前）<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(10)},
        unlocked(){unlock= false
        if(hasUpgrade('p',13)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',21)){return new Decimal(2)}
          if(hasUpgrade('p',21)){return new Decimal(10)}},
        canComplete: function() {
          return player.a.points.gte(new Decimal(10).pow(8).mul(new Decimal(10).pow(new Decimal(challengeCompletions(this.layer,this.id)).mul(4))))},
        },
      12: {
        name: "HD",
       challengeDescription(){
          if(!hasUpgrade('p',21)){return "点数、歌曲和源点获取^0.1<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/2"}
          if(hasUpgrade('p',21)){return "点数、歌曲和源点获取^0.1<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/10"}},
        goalDescription(){return "1e"+new Decimal(50).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(20))+"点数"},
        rewardDescription(){return "根据挑战完成次数增益Phidata<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(2)},
        unlocked(){unlock= false
        if(hasUpgrade('p',14)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',21)){return new Decimal(2)}
          if(hasUpgrade('p',21)){return new Decimal(10)}},
        canComplete: function() { return player.points.gte(new Decimal(10).pow(50).mul(new Decimal(10).pow(20).pow(challengeCompletions(this.layer,this.id))))}
        },
      13: {
        name: "IN",
       challengeDescription(){
          if(!hasUpgrade('p',21)){return "歌曲和源点层级被禁用，歌曲和源点^0.1，点数×1e-55<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/2"}
          if(hasUpgrade('p',21)){return "歌曲和源点层级被禁用，歌曲和源点^0.1，点数×1e-55<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"}},
        goalDescription(){return "1e"+new Decimal(200).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(100))+"点数"},
        rewardDescription(){return "根据挑战完成次数指数提升Notes<br>效果：^"+challengeEffect(this.layer,this.id).mul(100).round().div(100)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.2).div(5.2).add(0.8077)},
        unlocked(){unlock= false
        if(hasMilestone('p',6)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',21)){return new Decimal(2)}
          if(hasUpgrade('p',21)){return new Decimal(5)}},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(200).mul(new Decimal(10).pow(100).pow(challengeCompletions(this.layer,this.id))))}
        },
      14: {
        name: "AT",
       challengeDescription(){
         if(!hasUpgrade('p',32)){return "同时进入前三个挑战<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/2"}
          if(hasUpgrade('p',32)){return "同时进入前三个挑战<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"}},
        goalDescription(){return "1e"+new Decimal(100).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(50))+"点数"},
        rewardDescription(){return "根据挑战完成次数指数提升歌曲、源点和Phidata<br>效果：^"+challengeEffect(this.layer,this.id).mul(100).round().div(100)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.25).div(10).add(0.9)},
        countsAs: [11, 12, 13],
        unlocked(){unlock= false
        if(hasUpgrade('p',32)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',32)){return new Decimal(2)}
          if(hasUpgrade('p',32)){return new Decimal(5)}},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(100).mul(new Decimal(10).pow(50).pow(challengeCompletions(this.layer,this.id))))}
        },
      15: {
        name: "SP",
       challengeDescription(){return "同时进入前三个挑战，点数再次^0.3<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/10"},
        goalDescription(){return "1e"+new Decimal(30).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(15))+"点数"},
        rewardDescription(){return "根据挑战完成次数提升歌曲，源点，Phidata获取指数<br>效果：×"+challengeEffect(this.layer,this.id).mul(100).round().div(100)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.25).div(10).add(0.9)},
        countsAs: [11, 12, 13],
        unlocked(){unlock= false
        if(hasUpgrade('p',32)) unlock=true
          return unlock },
        completionLimit(){
          return new Decimal(10)},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(30).mul(new Decimal(10).pow(15).pow(challengeCompletions(this.layer,this.id))))}
        },
    },
    upgrades: {
    11:{ title: "增强data I",
    description:"data对歌曲和源点的增益变为原来的5次方",
    cost: new Decimal(1),
    unlocked() {return hasMilestone('p',4)},
    effect() {
    return player['p'].points.add(1).pow(5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "Qol为什么不在里程碑里面？",
    description:"自动购买诗篇，诗篇不重置任何东西",
    cost: new Decimal(2),
    unlocked() {return hasUpgrade('p',11)},
    },
    13:{ title: "别搞时间墙了",
    description:"解锁Phidata挑战和剧情，被动获取歌曲和源点速度*5",
    cost: new Decimal(3),
    unlocked() {return hasUpgrade('p',12)},
    },
    14:{ title: "增强data II",
    description:"data对歌曲和源点的增益以5次方的提升对点数生效，解锁下一个挑战",
    cost: new Decimal(15),
    unlocked() {return hasChallenge('p',11)},
    effect() {
    return player['p'].points.add(1).pow(25)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    15:{ title: "韵律的力量 III",
    description:"源点增益Phidata获取量，效果为源点^0.02",
    cost: new Decimal(50),
    unlocked() {return hasChallenge('p',12)},
    effect() {
    return player.a.points.add(1).pow(0.02)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    16:{ title: "Phigros的力量",
    description:"诗篇增益Phidata获取量，效果为诗篇^0.6",
    cost: new Decimal(1000),
    unlocked() {return challengeCompletions('p',12)>1},
    effect() {
    return player.l.points.add(1).pow(0.6)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    17:{ title: "高物量歌曲",
    description:"Notes增益Phidata获取量，效果为log(Notes)^0.2",
    cost: new Decimal(10000),
    unlocked() {return hasUpgrade('p',16)},
    effect() {
    return player.points.add(10).log(10).pow(0.2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    21:{ title: "Phigros大神",
    description:"基于Phidata数量指数提升源点，增加前几个挑战的上限",
    cost: new Decimal(100000),
    unlocked() {return challengeCompletions('p',13)>0},
    effect() {
    return player.p.points.add(10).log(10).pow(0.1).div(10).add(1)
    },
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))}, },
    22:{ title: "RKS11.00",
    description:"解锁更多Lanota升级",
    cost: new Decimal(200000),
    unlocked() {return challengeCompletions('p',12)>2},},
    23:{ title: "RKS12.00",
    description:"解锁PTT升级",
    cost: new Decimal(1e7),
    unlocked() {return hasAchievement('A',34)},},
    24:{ title: "RKS13.00",
    description:"弱化歌曲软上限（歌曲^1.2（软上限后））",
    cost: new Decimal(5e7),
    unlocked() {return hasUpgrade('p',23)},},
    25:{ title: "RKS14.00??",
    description:"Notes获取量*1e308，500%Phidata每秒",
    cost: new Decimal(1e9),
    unlocked() {return hasUpgrade('p',24)},},
    26:{ title: "RKS15.00??!!",
    description:"Phidata获取量^1.15<br>tips:Phidata软上限：1e10",
    cost: new Decimal(1e10),
    unlocked() {return hasUpgrade('a',32)},},
    27:{ title: "RKS16.00之力",
    description:"解锁下一个层级：魔王曲",
    cost: new Decimal(5e12),
    unlocked() {return hasUpgrade('p',26)},},
    31:{ title: "Painful",
    description:"增加Phidata公式的效果<br>(^5~^8)",
    cost: new Decimal(1e13),
    unlocked() {return hasMilestone('m',0)},},
    32:{ title: "Horrrible",
    description:"解锁两个Phidata挑战：AT、SP",
    cost: new Decimal(1e14),
    unlocked() {return hasUpgrade('p',31)},},
    33:{ title: "Impossible",
    description:"PTT对歌曲也有提升效果（软上限后）",
    cost: new Decimal(3e14),
    unlocked() {return hasMilestone('m',1)},
    effect() {return player.a.ptt.add(10).log(10).pow(0.5)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    34:{ title: "Difficult",
    description:"PTT对源点提升增加（软上限后）",
    cost: new Decimal(5e14),
    unlocked() {return hasMilestone('m',1)},
    effect() {return player.a.ptt.add(10).log(10).pow(0.4)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    35:{ title: "Anxious",
    description:"解锁更多PTT升级，解锁魔王曲升级",
    cost: new Decimal(8e14),
    unlocked() {return hasUpgrade('p',34)},
    },
    36:{ title: "Terrible",
    description:"RKS指数提升Phidata,源点,歌曲获取量（软上限前）",
    cost: new Decimal(2e15),
    unlocked() {return hasUpgrade('p',35)},
    effect() {return player.p.rks.add(1).pow(0.4).div(5).add(0.8)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    37:{ title: "Anguished",
    description:"解锁更多升级，解锁下一个RKS可点击，Phidata*1e8（软上限前）<br>有没有发现这一行升级的首字母是Phidata",
    cost: new Decimal(1e18),
    unlocked() {return hasUpgrade('p',36)},
    },
   },
    milestones: {
    0: {
        requirementDescription: "获得1个Phidata",
        effectDescription: "源点挑战要求为0，被动获取歌曲和源点增加500%每秒（PTT永远不重置），解锁剧情",
        done() { return player.p.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2个Phidata",
        effectDescription: "保留Lanota里程碑",
        done() { return player.p.points.gte(2) }
    },
    2: {
        requirementDescription: "获得3个Phidata",
        effectDescription: "自动购买Arcaea升级和Lanota升级",
        done() { return player.p.points.gte(3) }
    },
    3: {
        requirementDescription: "获得4个Phidata",
        effectDescription: "歌曲和源点层级不重置任何东西",
        done() { return player.p.points.gte(4) }
    },
    4: {
        requirementDescription: "获得5个Phidata",
        effectDescription: "保留源点挑战，解锁Phidata升级",
        done() { return player.p.points.gte(5) }
    },
    5: {
        requirementDescription: "获得300个Phidata",
        effectDescription: "保留歌曲可购买数量（挑战中仍然生效哦！）",
        unlocked() {return hasChallenge('p',12)},
        done() { return player.p.points.gte(300) }
    },
    6: {
        requirementDescription: "获得100000个Phidata",
        effectDescription: "解锁下一个Phidata挑战",
        unlocked() {return hasUpgrade('p',17)},
        done() { return player.p.points.gte(100000) }
    },
},
    clickables:{
      11: {
      title() {return "增加RKS"},
      display() {return "这是有规律的哦！点击增加RKS"},
      canClick() {return rksRandom()<0.3||hasUpgrade('c',11)},
      onClick() {player.p.rks=player.p.rks.add(player.p.rksMax.sub(player.p.rks).div(5))},
      onHold() {if(hasUpgrade('c',11)) player.p.rks=player.p.rks.add(player.p.rksMax.sub(player.p.rks).div(5))},
    },
      12: {
      title() {return "增加RKS上限"},
      display() {return "基于Phidata增加RKS上限"},
      canClick() {return rksRandom()>0.7||hasUpgrade('c',11)},
      onClick() {player.p.rksMax = player.p.rksMax.add(player.p.points.add(1).log(20).add(1).log(10).sub(player.p.rksMax.mul(player.p.rksMax2)).div(2).max(0.001).sub(0.001))},
      onHold() {if(hasUpgrade('c',11)) player.p.rksMax = player.p.rksMax.add(player.p.points.add(1).log(20).add(1).log(10).sub(player.p.rksMax.mul(player.p.rksMax2)).div(2).max(0.001).sub(0.001))},
      unlocked() {return hasUpgrade('p',37)}
    },
      13: {
      title() {return "增加RKS上限2"},
      display() {return "基于Cytus力量增加上一个可点击效果的上限<br>上限×"+format(new Decimal(1).div(player.p.rksMax2))+"<br>确切来说，×"+ new Decimal(1).div(player.p.rksMax2)},
      canClick() {return true},
      onClick() {if(hasUpgrade('c',11)) player.p.rksMax2 = player.p.rksMax2.sub(player.c.power.add(1).log(10).add(1).div(5).pow(0.5).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))},
      onHold() {player.p.rksMax2 = player.p.rksMax2.sub(player.c.power.add(1).log(10).add(1).div(5).pow(0.5).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))},
      unlocked() {return hasUpgrade('c',11)}
    },
    },
tabFormat: {
    "里程碑": {
        content: [ "main-display",
        ["infobox","introBox"],
    "prestige-button",
            ["display-text",
      function() {return '你有 ' + format(player.a.points) + ' 源点<br>你正在获得 ' + format(new Decimal(tmp.p.resetGain).mul(tmp.p.passiveGeneration))+' Phidata每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "milestones",],},
    "升级": {
        content: [ ["infobox","upgBox"],
          "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('p',4)}
    },
    "挑战": {
        content: [["infobox","chalBox"],
          "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('p',13)}
},
    "RKS": {
     content: [["infobox","RKSBox"],
          "main-display",
    "prestige-button",
       ["display-text",
      function() {return '你有 ' + format(player.p.rks)+ ' RKS!'},
     {"color": "#ff5eee", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '当前RKS上限： ' + format(player.p.rksMax) + ' RKS'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '确切来说，你有 ' + player.p.rks + ' RKS'+'<br>当前的RKS上限为 ' + player.p.rksMax},
     {"color": "#ffffff", "font-size": "9px", "font-family": "Comic Sans MS"}],
    "clickables",
],
  unlocked(){return hasUpgrade('m',11)}
},
 "剧情": {
        content: [ 
        ["infobox","p1"],
        ["infobox","p2"],
        ["infobox","p3"],
        ["infobox","p4"],
        ["infobox","p5"],
        ["infobox","p6"],
        ["infobox","p7"],
],
  unlocked(){return hasMilestone('p',0)}
},
},
})//Phigros
addLayer("m", {
  infoboxes: {
    introBox: {
    title: "层级5--魔王曲",
    body(){
      return "欢迎来到第五层！本层级也会重置“歌曲”层级，“Arcaea”层级和“Lanota”层级。而且，本层级和Lanota类似，也是静态层级。你可以通过里程碑获得更多增益！<br>"},
    },
    upgBox: {
    title: " ",
    body(){return "n"},
        },
    chalBox: {
    title: "",
    body(){ return "n"
                },
        },
},
    name: "魔王曲",
    symbol: "M",
    position: 0,
    startData() { return {
        unlocked() { return (hasUpgrade('p', 27))},
		points: new Decimal(0),
    }},
    color: "#55BB11",
    requires: new Decimal(1e40), 
    resource: "魔王曲",
    baseResource: "源点", 
    baseAmount() {return player['a'].points}, 
    type: "static", 
    exponent: 1, 
    effect(){
      return {Notes: player.m.points.add(1).pow(0.5)}
    },
    effectDescription() { 
      if(!hasUpgrade('m',21)){
            return "Phidata效果变成原来的"+format(player.m.points.add(1).pow(0.5))+"次方"}
      if(hasUpgrade('m',21)){}return "歌曲和源点增益乘以"+format(player['p'].points.add(1).pow(5))
    },
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.008)
       return exp
    },
    row: 2, 
    branches(){return ['c']},
    hotkeys: [
        {key: "m", description: "M: Reset for Monster Songs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    autoPrestige() {return hasMilestone('c',6)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
               kept.push("milestones","upgrades")
            }
            if (resettingLayer == "c") {
               if(hasMilestone("c", 1))kept.push("milestones")
               if(hasMilestone("c", 3))kept.push("milestones","upgrades")
            }
            layerDataReset(this.layer, kept)
        }
    },
    layerShown(){shown= false
    if(hasUpgrade('p',27)){shown=true}
    return shown},
  softcap:new Decimal (1e1000000),
  softcapPower:new Decimal(0.05),
    challenges: {
    11: {
        name: "EZ",
        challengeDescription(){
          if(!hasUpgrade('p',22)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"}
          if(hasUpgrade('p',22)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/100"}},
        goalDescription(){return "1e"+new Decimal(14).add(challengeCompletions(this.layer,this.id))+"源点"},
        rewardDescription(){return "根据挑战完成次数增益源点<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(5)},
        unlocked(){unlock= false
        if(hasUpgrade('p',13)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',22)){return new Decimal(5)}
          if(hasUpgrade('p',22)){return new Decimal(100)}},
        canComplete: function() {
          return player.a.points.gte(new Decimal(10).pow(14).mul(new Decimal(10).pow(challengeCompletions(this.layer,this.id))))}
        },
    },
    upgrades: {
    11:{ title: "Rrhar'il",
    description:"解锁RKS（在Phidata界面），Phidata×1e5（软上限前）",
    cost: new Decimal(0),
    unlocked() {return hasUpgrade('p',35)}, },
    12:{ title: "Testify",
    description:"基于RKS和PTT增益Cytus力量获得",
    cost: new Decimal(8),
    effect() {
        return player.p.rks.pow(5).mul(player.a.ptt)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasUpgrade('c',11)}, },
   },
    milestones: {
    0: {
        requirementDescription: "获得1首魔王曲",
        effectDescription: "解锁更多Phidata升级和PTT升级",
        done() { return player.m.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2首魔王曲",
        effectDescription: "再次解锁更多升级，Phidata里程碑对魔王曲也生效",
        done() { return player.m.points.gte(2) }
    },
},
tabFormat: {
    "里程碑": {
        content: [ ["infobox","introBox"],
    "main-display",
    "prestige-button",
    "milestones",],},
    "升级": {
        content: [ "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasUpgrade('p',35)}
    },
"挑战": {
        content: [ "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('m',13)}
}
},
})//Monster Songs

//Row 3
addLayer("c", {
  infoboxes: {
 introBox: {
    title: "层级6--Cytus",
    body(){
      return "欢迎来到第六层！恭喜你，已经来到了第四行！本层级会重置前三行，也就是所有之前的进度！不用担心，接下来会解锁更多、更好、更有趣的内容，继续前行吧！<br>资源名称由来：自己想的"},
    },
},
    name: "Cytus",
    symbol: "C",
    position: 0,
    startData() { return {
        unlocked() { return hasUpgrade('a',37)
        },
		points: new Decimal(0),
		power: new Decimal(0),
    }},
    color: "#a3a3a3",
    requires: new Decimal(1e20), 
    resource: "Cyten",
    baseResource: "Phidata", 
    baseAmount() {return player.p.points}, 
    type: "normal", 
    exponent: 1, 
    effect(){
      eff=player.c.points.add(1).pow(2).sub(1)
      return eff
    },
    effectDescription() { return "生成"+format(tmp.c.powercal)+" Cytus力量每秒"
    },
    gainMult() { 
        mult = new Decimal(1)
        
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.02)
       return exp
    },
    powercal(){
      mult = player.c.points.add(1).pow(2).sub(1)
      if(buyableEffect('c',14)>1) mult = mult.times(buyableEffect('c',14))
      if(hasUpgrade('m',12)) mult = mult.times(upgradeEffect('m',12))
      return mult
},
    row: 3, 
    hotkeys: [
        {key: "c", description: "C： Reset for Cytus", },
    ],
    layerShown(){ return hasUpgrade('a',37)},
    update(diff) {
			if (player.c.unlocked) player.c.power = player.c.power.add(tmp.c.powercal.mul(diff));
		},
		upgrades: {
    11:{ title: "Cytus I",
    description:"解锁第三个RKS可点击，RKS可点击随时都可以点击",
    cost: new Decimal(5),
    unlocked() {return hasMilestone('c',7)}, },
   },
		milestones: {
    0: {
        requirementDescription: "1000 Cytus力量",
        effectDescription: "永久自动购买歌曲、Arcaea、Lanota升级，保留Arcaea挑战",
        done() { return player.c.power.gte(1000) }
    },
    1: {
        requirementDescription: "2333 Cytus力量",
        effectDescription: "保留诗篇里程碑，Phidata里程碑和魔王曲里程碑",
        unlocked() {return hasMilestone('c',0)},
        done() { return player.c.power.gte(2333) }
    },
    2: {
        requirementDescription: "2 Cytens && 5000 Cytus力量",
        effectDescription: "保留RKS，解锁Cytus可购买",
        unlocked() {return hasMilestone('c',1)},
        done() { return player.c.points.gte(2)&&player.c.power.gte(5000) }
    },
    3: {
        requirementDescription: "3 Cytens",
        effectDescription: "保留歌曲、Arcaea、Lanota、魔王曲升级，自动购买Phidata升级",
        unlocked() {return hasMilestone('c',2)},
        done() { return player.c.points.gte(3) }
    },
    4: {
        requirementDescription: "4 Cytens",
        effectDescription: "保留Phidata挑战，解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',3)},
        done() { return player.c.points.gte(4) }
    },
    5: {
        requirementDescription: "5 Cytens",
        effectDescription: "保留PTT，再次解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',4)},
        done() { return player.c.points.gte(5) }
    },
    6: {
        requirementDescription: "6 Cytens",
        effectDescription: "自动购买魔王曲，再次解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',5)},
        done() { return player.c.points.gte(6) }
    },
    7: {
        requirementDescription: "10 Cytens",
        effectDescription: "解锁Cytus升级和更多魔王曲升级",
        unlocked() {return hasMilestone('c',6)},
        done() { return player.c.points.gte(10) }
    },
},
buyables: {
			rows: 4,
			cols: 4,
			11: {
				title: "音乐世界",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(1.5))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e80).pow(x.pow(2))},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>点数获取量×" + format(data.effect))
                },
      unlocked() { return hasMilestone('c',2)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
    player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
     buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
				autoed() { return false },
                style: {'height':'200px'},
			},
			12: {
				title: "音乐星球",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(3).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(1.6))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(100).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Phidata获取量×" + format(data.effect))
      },
      unlocked() { return hasMilestone('c',4)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
    player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
				autoed() { return false },
                style: {'height':'200px'},
			},
			13: {
				title: "音乐恒星",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(15)) x = x.pow(2).div(15)
     let cost = Decimal.pow(2, x.mul(2).pow(1.5))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e50).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>歌曲获取量×" + format(data.effect)+"（软上限后）" )
      },
      unlocked() { return hasMilestone('c',5)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
    player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
				autoed() { return false },
                style: {'height':'200px'},
			},
			14: {
				title: "音乐星云",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(15)) x = x.pow(2).div(15)
     let cost = Decimal.pow(2, x.mul(1.6).pow(1.5))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(2).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Cytus力量获取量×" + format(data.effect))
      },
      unlocked() { return hasMilestone('c',5)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
    player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
				autoed() { return false },
                style: {'height':'200px'},
			},
		},
    tabFormat: {
    "里程碑": {
        content: [ ["infobox","introBox"],
    "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.p.points) + ' Phidata<br>你正在获得 ' + format(new Decimal(tmp.c.resetGain).mul(tmp.c.passiveGeneration))+' Cyten每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '你有 ' + format(player.c.power)+' Cytus力量'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "milestones",
     ],},
   "可购买": {
        content: [ 
    "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.c.power)+' Cytus力量'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
    "buyables",
     ],
     unlocked(){return hasMilestone('c',2)}
   },
    "升级": {
        content: [ "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('c',7)}
    },
"挑战": {
        content: [ "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('c',13)}
},

},
})//Cytus