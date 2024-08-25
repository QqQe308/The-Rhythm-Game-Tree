//2024.02.02:layers.js已经五千多行了，太卡了。启用layers2.js。以后每5000行（对应层级结束后）就另开一个layers.js
//2024.4:将Rotaeno层级加入layers2.js

//Row 4
addLayer("r", {
  infoboxes: {
 introBox: {
  title: "层级9--Rotaeno",
  body(){return "欢迎来到第九层！恭喜你，已经来到了第五行！本层级会重置前四层的所有内容，但是将解锁更多增益！<br>资源名称由来：Rotaeno中文名：旋转音律"},
     },
 upgTreeBox: {
  title: "Rot升级树",
  body(){return "这是Rot升级树！在这里，你需要用资源购买Rot点数来购买升级（事实上，这些并不是升级，但是有升级类似的效果）与反物质维度中的时间研究树类似，你不一定能同时购买所有升级，所以想清楚再做哦！<br>由于性能原因，购买升级树时可能会有一些卡顿，这时请不要购买升级树，等待不卡顿时再购买（否则可能由此导致Rot点数为负数情况）"},
     },
 upgBox: {
  title: "Rotaeno升级",
  body(){return "这些是正常的Rotaeno升级！这些升级的加成大部分是推进升级树的进度，以及一些其他小的效果。"},
     },
chalBox: {
  title: "Rotaeno升级",
  body(){return "类比Phigros挑战和反物质维度中的永恒挑战（不过代码比之前Phigros挑战写得好多了）这里的Rotaeno挑战可以完成5次，而且根据完成的次数，挑战的难度会加大，奖励效果也会相应提升。"},
     },
},
    name: "Rotaeno",
    symbol: "Ro",
    position: 0,
    startData() { return {
		points: n(0),
		     total:n(0),
		rot:n(0),
		rota:n(0),//累计rot
		upgCost:n(0),
		resettime:n(0),
		notes:n(0),
    }},
     color: "#00ddff",
    requires: n(1e100), 
    resource: "旋律",
    baseResource: "Cyten", 
    baseAmount() {return player.c.points}, 
    type: "normal", 
    exponent: 0.025, 
    gainMult() { //rgainmult//
     mult = n(1)
     if (gcs("r",42)==1) mult = mult.times(clickableEffect("r", 42))
     if (gcs("r",52)==1) mult = mult.times(clickableEffect("r", 52))
     if(challengeCompletions('r',14)>2) mult=mult.times(challengeEffect('r',14))
     if(hasUpgrade('sp',31)) mult = mult.times(upgradeEffect('sp',31))
     if(hasUpgrade('sp',32)) mult = mult.times(upgradeEffect('sp',32))
     if(hasUpgrade('sp',33)) mult = mult.times(upgradeEffect('sp',33))
     if(hasUpgrade('sp',34)) mult = mult.times(upgradeEffect('sp',34))
     if(hasUpgrade('sp',35)) mult = mult.times(upgradeEffect('sp',35))
     if(hasUpgrade('sp',36)) mult = mult.times(upgradeEffect('sp',36))
     if(hasUpgrade('sp',37)) mult = mult.times(upgradeEffect('sp',37))
     if(hasUpgrade('sp',56)) mult = mult.times(upgradeEffect('sp',56))
     if(hasUpgrade('m',15)) mult = mult.times(upgradeEffect('m',15))
     if(hasUpgrade('mi',15)) mult = mult.times(upgradeEffect('mi',15))
     if(hasUpgrade('j',32)) mult = mult.times(upgradeEffect('j',32))
     if(hasUpgrade('ri',14)) mult = mult.times(upgradeEffect('ri',14))
     if (gcs("r",111)==1) mult = mult.times(clickableEffect("r", 111))
     if (gcs("r",131)==1) mult = mult.times(clickableEffect("r", 131))
     if (gcs("r",132)==1) mult = mult.times(clickableEffect("r", 132))
     if (gcs("r",133)==1) mult = mult.times(clickableEffect("r", 133))
     if (gcs("r",153)==1) mult = mult.times(clickableEffect("r", 153))
     mult=mult.times(tmp.j.pdqja1)
     return mult
    },
    gainExp() { //rgainexp
   exp= n(1)
   if(inChallenge('ri',11)) exp=exp.mul(0.5)
    return exp
    },
    directMult() { //rdirectmult
     mult = n(1)
     if(n(gba('sp',25)).gt(0)) mult=mult.times(buyableEffect('sp',25))
     return mult
    },
    passiveGeneration() {return n(0)},
    row: 4, 
    hotkeys: [
     {key: "r", description: "R： Reset for Rotaeno", onPress(){if(canReset(this.layer)&&hasMilestone('r',0)) doReset(this.layer)}},
    ],
    layerShown(){ return hasUpgrade('sp',27)||player.r.total.gte(1)||hasAchievement('A',111)},
    rotCal() {
     let rot=player.r.rota
     if(inChallenge('r',11)) rot=rot.div(2.4)
     if(inChallenge('r',12)&&!hasUpgrade('r',31)) rot=rot.div(2)
     rot=rot.sub(player.r.upgCost)
     return rot
    },
    rotaCal() {
     let rot=gba('r',11).add(gba('r',12)).add(gba('r',13))
     if(hasUpgrade('j',11)) rot=rot.mul(1.1)
     if(hasUpgrade('sp',54)) rot=rot.mul(1.05)
     if(hasUpgrade('sp',55)&&rot.gte(180)) rot=rot.sub(180).mul(2).add(180)
     return rot
    },
    branches(){return ['c','sp']},
    update(diff) {
     player.r.rot=layers.r.rotCal()
		 if(hasUpgrade('sp',55))	player.r.rota=layers.r.rotaCal().ceil()
		 if(!hasUpgrade('sp',55)) player.r.rota=layers.r.rotaCal()
		 if(hasMilestone('ri',5)) layers.r.clickables[13].onClick()
		 if(hasUpgrade('j',31)&&layers.r.buyables[11].canAfford()&&layers.r.buyables[11].unlocked()) layers.r.buyables[11].buy();
		 if(hasUpgrade('j',31)&&layers.r.buyables[12].canAfford()&&layers.r.buyables[12].unlocked()) layers.r.buyables[12].buy();
		 if(hasUpgrade('j',31)&&layers.r.buyables[13].canAfford()&&layers.r.buyables[13].unlocked()) layers.r.buyables[13].buy();
		 if(hasMilestone('ri',6)&&layers.r.buyables[11].canAfford()&&layers.r.buyables[11].unlocked()) layers.r.buyables[11].buyMax();
		 if(hasMilestone('ri',6)&&layers.r.buyables[12].canAfford()&&layers.r.buyables[12].unlocked()) layers.r.buyables[12].buyMax();
   if(hasMilestone('ri',6)&&layers.r.buyables[13].canAfford()&&layers.r.buyables[13].unlocked()) layers.r.buyables[13].buyMax();
			if(player.devSpeed.neq(0)) {
			player.r.resettime=player.r.resettime.add(diff)
			if(player.r.points.lt(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed).mul(100))&&hasUpgrade('r',44)) player.r.points=player.r.points.add(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(diff).mul(10))
			if(player.r.points.lt(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed).mul(clickableEffect('r',161)))&&gcs('r',161)==1) player.r.points=player.r.points.add(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(diff).mul(clickableEffect('r',161)).div(tmp.r.clickables['161'].a))
			}
	},
	passiveGeneration()
  {mult = n(0)
  if(gcs('r',61)==1)
  mult = clickableEffect('r',61)
return mult
  },
  inChal() {
   if(inChallenge('r',11)) return true
   if(inChallenge('r',12)) return true
   if(inChallenge('r',13)) return true
   if(inChallenge('r',14)) return true
   return false
  },
  chal2Cal() {
   let chal=n(1)
   if(gcs('r',21)==1) chal=chal.sub(0.5)
  if(gcs('r',31)==1) chal=chal.sub(0.02)
  if(gcs('r',32)==1) chal=chal.sub(0.02)
  if(gcs('r',41)==1) chal=chal.sub(0.03)
  if(gcs('r',42)==1) chal=chal.sub(0)
  if(gcs('r',43)==1) chal=chal.sub(0.03)
  if(gcs('r',51)==1) chal=chal.div(1.35)
 if(gcs('r',52)==1) chal=chal.div(1)
 if(gcs('r',53)==1) chal=chal.div(1.35)
 if(gcs('r',61)==1) chal=chal.div(1)
 if(gcs('r',71)==1) chal=chal.div(2)
 if(gcs('r',72)==1) chal=chal.div(1.5)
 if(gcs('r',73)==1) chal=chal.div(1.8)
 if(gcs('r',81)==1) chal=chal.div(1.8)
 if(gcs('r',82)==1) chal=chal.div(1.5)
 if(gcs('r',83)==1) chal=chal.div(1.8)
 if(gcs('r',91)==1) chal=chal.div(1.25)
 if(gcs('r',92)==1) chal=chal.div(1.25)
 if(gcs('r',93)==1) chal=chal.div(1.8)
   return chal
  },
  notesSc() {//填充Notes软上限效果
   let sc=n(0.7)
   if(hasUpgrade('ri',33)) sc=sc.pow(n(1).div(challengeEffect('ri',11).pow(2)))
   if(hasUpgrade('e',13)) sc=sc.pow(upgradeEffect('e',13))
   return sc
  },
  notes() {//计算填充Notes
  let a=player.points
  if(hasUpgrade('ri',13)) a=a.pow(1.1)
  if(hasUpgrade('ri',15)) a=a.pow(upgradeEffect('ri',15))
  a=a.pow(tmp.j.pdqja8)
  
  if(a.log10().gte(2e7)) a = n(10).pow(a.log10().sub(2e7).pow(tmp.r.notesSc).add(2e7))//sc
  return a
  },
  	doReset(resettingLayer) {
     if (layers[resettingLayer].row > layers[this.layer].row) {
      let kept = ["unlocked", "auto"]
      if (resettingLayer == "t") {
     kept.push("milestones","upgrades","buyables","challenges","points","total")
      }
      if (resettingLayer == "ri"||hasMilestone('e',0)) {
     if(hasMilestone('ri',0)) kept.push("milestones","challenges")
     if(hasMilestone('ri',2)) kept.push("upgrades")
     if(hasMilestone('ri',3)) kept.push("clickables")
     if(hasMilestone('ri',8)) kept.push("buyables")
      }
      layerDataReset(this.layer, kept)
     }
    },
   tabFormat: {
     "Milestones": {
     content: [ ["infobox","introBox"],
    "main-display",
    "prestige-button",
    ["display-text",
   function() {return '你有 ' + format(player.c.points) + ' Cyten<br>你正在获得 ' + format(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration))+' 旋律每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    ["display-text",
   function() {return '你累计有 '+format(player.r.total)+' 旋律'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    ["display-text",
   function() {if(player.devSpeed.neq(0)) return '当前重置时间为'+formatTime(player.r.resettime)},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "milestones",
     ],},
     "Upgrade Tree": {
     content: [["infobox","upgTreeBox"],"main-display",'prestige-button',"blank","buyables","blank",
     ["display-text",function() {return '你有 ' + format(player.r.rot) + ' Rot点数！'},
     {"color": "#2edde2", "font-size": "20px", "font-family": "Comic Sans MS"}],
   ["display-text",function() {return '你累计有 ' + format(player.r.rota) + ' Rot点数！'},
     {"color": "#2edde2", "font-size": "16px", "font-family": "Comic Sans MS"}],
   ["display-text",function() {if(hasUpgrade('sp',55)) return '确切来说，你累计有 ' + format(layers.r.rotaCal()) + ' Rot点数！'},
     {"color": "#2edde2", "font-size": "10px", "font-family": "Comic Sans MS"}],"blank",
    ["display-text", function() {if(player.devSpeed.gt(1)) return '算上全局速率，你正在获得 ' + format(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed))+' 旋律每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
    ["display-text", function() {if(gcs('r',161)==1){
     if(player.r.points.lt(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed).mul(clickableEffect('r',161)))) return '算上升级效果，你正在获得 ' + format(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed).mul(clickableEffect('r',161)).div(tmp.r.clickables['161'].a))+' 旋律每秒<br>你需要'+format(player.r.points.div(clickableEffect('r',161)))+'旋律每秒以获得升级的效果'
     else return '算上升级效果，你正在获得 ' + format(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed))+' 旋律每秒<br>你需要'+format(player.r.points.div(clickableEffect('r',161)))+'旋律每秒以获得升级的效果'
    }},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
     ["display-text",function() {if(inChallenge('r',12)) return '当前对Cytus力量的减益：^' + format(tmp.r.chal2Cal)+'<br>确切来说，^'+tmp.r.chal2Cal},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"}],"blank",
    ["display-text",function() {if(hasUpgrade('r',41)) return '你最大填充了 ' + format(player.r.notes) + ' Notes'},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"}],"blank",
     ["display-text",function() {if(player.r.notes.gte("e2e7")) return '填充Notes在1e20000000后达到软上限！<br>软上限效果：指数^'+format(tmp.r.notesSc,3)},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"}],"blank",
    ['row',[['clickable',11]]],"blank",
    ['row',[['clickable',12]]],"blank",
    ['row',[['clickable',13]]],"blank","blank",
    ['row',[['clickable',21]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',31],"blank",['clickable',32]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',41],"blank",['clickable',42],"blank",['clickable',43]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',51],"blank",['clickable',52],"blank",['clickable',53]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',61]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',71],"blank",['clickable',72],"blank",['clickable',73],]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',81],"blank",['clickable',82],"blank",['clickable',83],]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',91],"blank",['clickable',92],"blank",['clickable',93],]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',101],"blank",['clickable',102],"blank",['clickable',103],]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',111],"blank",['clickable',112]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',121]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',131],"blank",['clickable',132],"blank",['clickable',133],]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',141],"blank",['clickable',142],"blank",['clickable',143],]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',151],"blank",['clickable',152],"blank",['clickable',153],]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',161]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',171]]],"blank","blank","blank","blank","blank",
    ['row',[['clickable',181]]],"blank","blank","blank","blank","blank",
    //tabf
     ],
     unlocked(){return hasMilestone('r',0)}
    },
     "Upgrades": {
     content: [ ["infobox","upgBox"],
    "main-display",
    "prestige-button",
    "blank",
    "upgrades",
     ],
   unlocked(){return hasMilestone('r',6)}
     },
     "Challenges": {
     content: [ ["infobox","chalBox"],
   "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('r',17)||hasMilestone('ri',0)}
},
},
   buyables: {
     11: {
      a() { 
   let a=n(2)
   if(hasUpgrade('sp',51)) a=n(1.95)
   if(hasUpgrade('ri',36)) a=n(1.92)
   return a},
   cost() {
   let b=gba(this.layer, this.id)
   cost=this.a().pow(b)
      return cost
      },
      title(){return "Rot点数 I"},
      display() { return "你可以用旋律购买Rot点数购买“升级”<br>价格："+format(this.cost())+"旋律<br>数量："+format(gba(this.layer, this.id))},
      canAfford() { return player[this.layer].points.gte(this.cost()) },
      buy() {
      if(!hasMilestone('ri',6)) player[this.layer].points = player[this.layer].points.sub(this.cost())
      
      setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
      },
      buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.r.points.log(this.a())
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)
				},
      unlocked() {return hasMilestone('r',0)},
      style: {'height':'100px'},
     },
     12: {
      a() {let a=n("1e1200000")
      if(hasUpgrade('sp',52)) a=n("1e800000")
      if(hasUpgrade('ri',34)) a=n(1)
   return a
      },
      cost() {
   return this.a().mul(n("1e50000").pow(gba(this.layer, this.id).pow(1.25))) },
      title(){return "Rot点数 II"},
      display() { return "你可以用Notes购买Rot点数购买“升级”<br>价格："+format(this.cost())+" Notes<br>数量："+format(gba(this.layer, this.id))},
      canAfford() { return player.points.gte(this.cost()) },
      buy() {
      if(!hasMilestone('ri',6)) player.points = player.points.sub(this.cost())
      setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
      },
      buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.points.div(this.a()).log("e50000").root(1.25)
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)
				},
      unlocked() {return hasUpgrade('r',13)},
      style: {'height':'100px'},
     },
     13: {
      a() {
   let a=n(2)
   if(hasUpgrade('sp',53)) a=n(3)
   if(hasUpgrade('ri',32)) a=n(8)
   return a},
      cost() { return n(10).pow(gba(this.layer,this.id).div(this.a()).add(20).pow(2)) },
      title(){return "Rot点数 III"},
      display() { return "你可以用Milthm购买Rot点数购买“升级”<br>价格："+format(this.cost())+" Milthm<br>数量："+format(gba(this.layer, this.id))},
      canAfford() { return player.mi.points.gte(this.cost()) },
      buy() {
   if(!hasMilestone('ri',6)) player.mi.points = player.mi.points.sub(this.cost())
      setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
      },
      buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.log(10).root(2).sub(20).mul(this.a())
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)
				},
      unlocked() {return hasUpgrade('mi',25)},
      style: {'height':'100px'},
     },
    },
   milestones: {
    0: {
     requirementDescription: "第一个旋律",
     effectDescription: "歌曲层级永远不会被重置，为前面的层级带来一系列增益（点击此里程碑获得更多信息）解锁Rotaeno“升级”树",
     tooltip:"所有非静态层级被动获取增加1000%，Cytus力量×100，课题力量×10，蛇增加量×2，去除Cytus挑战4（“CHAOS∞²”）的时间墙",
     done() { return player.r.total.gte(1) }
    },
    1: {
     requirementDescription: "累计2旋律",
     effectDescription: "Phigros、Cytus挑战永远不会被重置，Arcaea层永远不会被重置",
     done() { return player.r.total.gte(2) }
    },
    2: {
     requirementDescription: "累计3旋律",
     effectDescription: "Lanota、Phigros、魔王曲层永远不会被重置，解锁第3行升级树",
     done() { return player.r.total.gte(3) }
    },
    3: {
     requirementDescription: "累计5旋律",
     effectDescription: "Cytus、谱面、曲包升级永远不会被重置，自动购买Arcaea曲包和Lanota曲包",
     done() { return player.r.total.gte(5) }
    },
    4: {
     requirementDescription: "累计7旋律",
     effectDescription: "4种Phigros-Note和课题模式的难度永远不会被重置，自动获得曲包，曲包什么也不重置",
     done() { return player.r.total.gte(7) }
    },
    5: {
     requirementDescription: "累计10旋律",
     effectDescription: "你可以购买最大曲包、Cytus可购买和4种Phigros-Note，所有Cytus、谱面、曲包里程碑永远不会被重置，解锁第4行升级树",
     done() { return player.r.total.gte(10) }
    },
    6: {
     requirementDescription: "累计 6 Rot点数",
     effectDescription: "解锁真正的Rotaeno升级<br>作者做到这里的时候，Phigros 3.4.2（Rotaeno二联）更新",
     done() { return player.r.rota.gte(6) }
    },
    },
   clickables:{    
    11: {//rot11
    title(){return "11"},
    display: "点击重置Rot升级树并且退还Rot点数<br>注意：会强制进行一次Rotaeno重置！",
   canClick() {return !layers.r.inChal()},
   tooltip() {
    if(layers.r.inChal()) return "在挑战中不能重置升级树！"
    },
    onClick() {
   for (let i in layers.r.clickables) if (!["11","12","13"].includes(i)) setClickableState("r",i,0)
      player.r.upgCost=n(0)
      if(!layers.r.inChal()) doReset('r')
    },
      unlocked(){return hasMilestone('r',0)},
     },
    12: {//Rot12
    title(){return "12"},
    display: "点击确定你的升级树和Cytus力量的减益<br>在挑战中不能修改升级树！",
   canClick() {return inChallenge('r',12)&&gcs('r',12)!==1},
    onClick() {
      setClickableState('r',12,1)
    },
      unlocked(){return inChallenge('r',12)},
    },
    13: {//Rot13
    title(){return "13"},
    display: "点击或长按以填充Notes（计入Rot升级141的效果）",
   canClick() {return hasUpgrade('r',41)},
    onClick() {
      player.r.notes=player.r.notes.max(tmp.r.notes)
    },
    onHold() {
      player.r.notes=player.r.notes.max(tmp.r.notes)
    },
      unlocked(){return hasUpgrade('r',41)},
    },
    21: {//Rot21
    title(){return "21" },
    display() {return "累计旋律数量增益Notes获取量<br>价格: 1 Rot点数<br>效果: ×"+format(this.effect())},
    effect() {
      let a=player.r.total.max(10)
      if(a.gte(1e15)) a = n(10).pow(a.log10().sub(15).pow(0.5).add(15))//sc
    eff=n("1e1000").pow(a.pow(0.8))
      if(eff.log10().gte(10000)) eff = n(10).pow(eff.log10().sub(10000).pow(0.8).add(10000))//sc
      if (gcs("r",53)==1) eff = eff.pow(clickableEffect("r", 53))
      if(!hasUpgrade('r',16)) eff=eff.min("1e100000")
      if(eff.log10().gte(100000)) eff = n(10).pow(eff.log10().sub(100000).pow(0.8).add(99999))//sc2
      if(eff.log10().gte(250000)) eff = n(10).pow(eff.log10().sub(250000).pow(0.5).add(250000))//sc3
      if(eff.log10().gte(300000)) eff = n(10).pow(eff.log10().sub(300000).pow(0.1).add(300000).min(300005))
      if (gcs("r",53)==1&&hasUpgrade('r',24)) eff = eff.pow(clickableEffect("r", 53).pow(0.25))
      return eff.max(1)
    },
    tooltip() {
      if(hasUpgrade('r',16)&&this.effect().gte('1e300005')) return "购买要求: 无<br>软上限1：1e10000，软上限2：1e100000，软上限3：1e250000，软上限4：1e300000，硬上限：1e300005"
      if(hasUpgrade('r',16)&&this.effect().gte('1e300000')) return "购买要求: 无<br>软上限1：1e10000，软上限2：1e100000，软上限3：1e250000，软上限4：1e300000"
      if(hasUpgrade('r',16)&&this.effect().gte('1e250000')) return "购买要求: 无<br>软上限1：1e10000，软上限2：1e100000，软上限3：1e250000"
    if(hasUpgrade('r',16)&&this.effect().gte('1e100000')) return "购买要求: 无<br>软上限1：1e10000，软上限2：1e100000"
    if(this.effect().gte('1e100000')) return "购买要求: 无<br>软上限：1e10000，硬上限：1e100000"
    return "购买要求: 无<br>软上限：1e10000"
    },
   style() { return { 'background-color': gcs('r',21)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(inChallenge('r',13)) return false
    return player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(1)
    },
      unlocked(){return hasMilestone('r',0)},
     },
    31: {//Rot31
    title(){return "31" },
    display() {return "Note数量增益Cyten获取量<br>价格: 1 Rot点数<br>效果: ×"+format(this.effect())},
    effect() {
    eff=player.points.max(1).log(10).pow(0.6)
      if(eff.gte(10000)) eff = eff.sub(10000).pow(0.8).add(10000)//sc
      return eff.max(1)
    },
    tooltip() {
    if(!hasUpgrade('r',11)) return "购买要求:21,!32（21表示需要购买21，!32表示不能购买32）"
      return "购买要求：21"
    },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(!hasUpgrade('r',11)) return gcs(this.layer,21)==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,32)!==1
    return gcs(this.layer,21)==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(1)
    },
      unlocked(){return hasMilestone('r',2)},
      branches(){return ["21"]},
     },
    32: {//Rot32
    title(){return "32" },
    display() {return "Cytus力量增益Cyten获取量<br>价格: 1 Rot点数<br>效果: ×"+format(this.effect())},
    effect() {
    eff=player.c.power.max(1).log(2).pow(1.05)
      if(eff.gte(10000)) eff = eff.sub(10000).pow(0.8).add(10000)//sc
      return eff.max(1)
    },
    tooltip() {
    if(!hasUpgrade('r',11)) return "购买要求:21,!31"
      return "购买要求：21"
    },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(!hasUpgrade('r',11)) return gcs(this.layer,21)==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,31)!==1
    return gcs(this.layer,21)==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(1)
    },
      unlocked(){return hasMilestone('r',2)},
      branches(){return ["21"]},
     },
    41: {//Rot41
    title(){return "41" },
    display() {return "曲包数量增益Cytus力量获取量<br>价格: 2 Rot点数<br>效果: ×"+format(this.effect())},
    effect() {
    eff=n(10).pow(player.sp.points.pow(0.8))
      if(eff.log10().gte(100)) eff = n(10).pow(eff.log10().sub(100).pow(0.8).add(100))//sc
      return eff.max(1)
    },
    tooltip() {
    if(!hasUpgrade('r',13)) return "购买要求:31,!43"
      return "购买要求：31"
    },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(!hasUpgrade('r',11)) return gcs(this.layer,31)==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,43)!==1
    return gcs(this.layer,31)==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(2)
    },
      unlocked(){return hasMilestone('r',5)},
      branches(){return ["31"]},
     },
    42: {//Rot42
    title(){return "42" },
    display() {return "Cytus力量数量增益旋律获取量<br>价格: 3 Rot点数<br>效果: ×"+format(this.effect())},
    effect() {
    eff=player.c.power.max(1).log(2).pow(0.05)
    if(hasUpgrade('r',11)) eff=eff.mul(player.c.power.max(1).log(5).pow(0.08))
      return eff.max(1)
    },
    tooltip:"购买要求:31|32（31|32表示31或者32中有一个即可）",
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    return (gcs(this.layer,31)==1||gcs(this.layer,32)==1)&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1},
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(3)
    },
      unlocked(){return hasMilestone('r',5)},
      branches(){return ["31","32"]},
     },
    43: {//Rot43
    title(){return "43" },
    display() {return "Cytus力量数量增益Cytus力量获取量<br>价格: 2 Rot点数<br>效果: ×"+format(this.effect())},
    effect() {
    eff=n(10).pow(player.c.power.max(1).log(10).div(6).pow(0.5))
    if(hasAchievement('A',84)) eff=eff.pow(1.35)
    if(hasUpgrade('r',26)) eff=eff.pow(1.35)
      if(eff.log10().gte(100)) eff = n(10).pow(eff.log10().sub(100).pow(0.8).add(100))//sc
      return eff.max(1)
    },
    tooltip() {
    if(!hasUpgrade('r',13)) return "购买要求:32,!41"
      return "购买要求：32"
    },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(!hasUpgrade('r',11)) return gcs(this.layer,32)==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,41)!==1
    return gcs(this.layer,32)==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(2)
    },
      unlocked(){return hasMilestone('r',5)},
      branches(){return ["32"]},
     },
    51: {//Rot51
     title(){return "51" },
    display() {return "累计Rot点数增益Cytus力量获取量<br>价格: 3 Rot点数<br>效果: ×"+format(this.effect())},
     effect() {
     eff=player.r.rota.pow(1.1).pow(player.r.rota.pow(1.1))
     if(eff.log10().gte(100)) eff = n(10).pow(eff.log10().sub(100).pow(0.8).add(100))//sc
      return eff.max(1)
    },
    tooltip() {
    if(!hasUpgrade('r',14)) return "购买要求:41,!52,!53"
      return "购买要求：41"
    },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(!hasUpgrade('r',14)) return gcs(this.layer,41)==1&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,52)!==1&&gcs(this.layer,53)!==1
    return gcs(this.layer,41)==1&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(3)
    },
      unlocked(){return hasUpgrade('r',12)},
      branches(){return ["41"]},
     },
    52: {//Rot52
     title(){return "52" },
    display() {return "累计Rot点数增益旋律获取量<br>价格: 2 Rot点数<br>效果: ×"+format(this.effect())},
     effect() {
     eff=player.r.rota.pow(0.5)
      return eff.max(1)
    },
    tooltip() {
    if(!hasUpgrade('r',14)) return "购买要求:42,!51,!53"
      return "购买要求：42"
    },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(!hasUpgrade('r',14)) return gcs(this.layer,42)==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,52)!==1&&gcs(this.layer,53)!==1
    return gcs(this.layer,42)==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(2)
    },
      unlocked(){return hasUpgrade('r',12)},
      branches(){return ["42"]},
     },
    53: {//Rot53
     title(){return "53" },
    display() {return "累计Rot点数指数提升21效果<br>价格: 3 Rot点数<br>效果: ^"+format(this.effect())},
     effect() {
     eff=player.r.rota.max(1).log(2.5).pow(0.2)
      return eff.max(1)
    },
    tooltip() {
    if(!hasUpgrade('r',14)) return "购买要求:43,!51,!52"
      return "购买要求：43"
    },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(!hasUpgrade('r',14)) return gcs(this.layer,43)==1&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1&&gcs(this.layer,51)!==1&&gcs(this.layer,52)!==1
    return gcs(this.layer,43)==1&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(3)
    },
      unlocked(){return hasUpgrade('r',12)},
      branches(){return ["43"]},
     },
    61: {//Rot61
     title(){return "61" },
    display() {return "基于Rot点数增加旋律被动获取<br>价格: 10 Rot点数<br>效果: "+format(this.effect().mul(100))+"%每秒"},
     effect() {
     eff=player.r.rota.pow(0.75).div(10)
     let a=n(tmp.r.resetGain)
     if(eff.gte(1)) a=a.mul(eff)
     if(player.devSpeed.gte(1)) a=a.mul(player.devSpeed)
    if(player.r.points.div(1000).gte(a)&&!hasMilestone('j',5)) eff=eff.div(player.r.points.div(n(a).max(1)).div(1000).pow(5).max(1))
     return eff.max(0)
    },
    tooltip() {
      if(hasMilestone('j',5)) return "购买要求:51|52|53"
      return "购买要求:51|52|53<br>注意：为避免过度挂机影响游戏平衡，当旋律数量多于每秒获取数量的1000倍时，获取速度将大幅降低！" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
      if(inChallenge('r',12)&&gcs('r',12)==1) return false
      return (gcs(this.layer,51)==1|| gcs(this.layer,52)==1|| gcs(this.layer,53)==1)&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(10)
    },
      unlocked(){return hasUpgrade('r',15)},
      branches(){return ["51","52","53"]},
     },
    71: {//Rot71
     title(){return "71 源点" },
    display() {return "基于旋律增益源点获取量（额外乘数）<br>价格: 2 Rot点数<br>效果: ×"+format(this.effect())},
     effect() {
     let a=player.r.points
      if(hasUpgrade('r',23)) a=player.r.total
     eff=n(10).pow(a.max(1).pow(200).log(15))
     if(eff.log10().gte(1000)) eff = n(10).pow(eff.log10().sub(1000).pow(0.8).add(1000))//sc
     return eff.max(1)
    },
    tooltip() {if(gcs('r',121)==1) return "购买要求:61"
      return "购买要求:61,!72,!73<br>这人终于会用directMult了" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(gcs(this.layer,61)==1&&gcs(this.layer,121)==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1) return true
    return gcs(this.layer,61)==1&&gcs(this.layer,72)!==1&&gcs(this.layer,73)!==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(2)
    },
      unlocked(){return hasUpgrade('r',21)},
      branches(){return ["61"]},
     },
    72: {//Rot72
     title(){return "72 Phidata" },
    display() {return "基于旋律增益Phidata获取量（额外乘数）<br>价格: 1 Rot点数<br>效果: ×"+format(this.effect())},
     effect() {
      let a=player.r.points
      if(hasUpgrade('r',23)) a=player.r.total
     eff=n(2).pow(a.max(1).pow(10).log(15))
     return eff.max(1)
    },
    tooltip() {if(gcs('r',121)==1) return "购买要求:61"
      return "购买要求:61,!71,!73" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    if(gcs(this.layer,61)==1&&gcs(this.layer,121)==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1) return true
    return gcs(this.layer,61)==1&&gcs(this.layer,71)!==1&&gcs(this.layer,73)!==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(1)
    },
      unlocked(){return hasUpgrade('r',21)},
      branches(){return ["61"]},
     },
    73: {//Rot73
     title(){return "73 Cyten" },
    display() {return "基于旋律增益Cyten获取量（额外乘数）<br>价格: 3 Rot点数<br>效果: ×"+format(this.effect())},
     effect() {
      let a=player.r.points
      if(hasUpgrade('r',23)) a=player.r.total
     eff=n(10).pow(a.max(1).pow(2.5).log(20))
     return eff.max(1)
    },
    tooltip() {
      if(gcs('r',121)==1) return "购买要求:61"
      return "购买要求:61,!71,!72" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
      if(inChallenge('r',12)&&gcs('r',12)==1) return false
      if(gcs(this.layer,61)==1&&gcs(this.layer,121)==1&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1) return true
      return gcs(this.layer,61)==1&&gcs(this.layer,71)!==1&&gcs(this.layer,72)!==1&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(3)
    },
      unlocked(){return hasUpgrade('r',21)},
      branches(){return ["61"]},
    },
    81: {//Rot81
     title(){return "81 源神" },
    display() {return "累计Rot点数指数提升源点获取量<br>价格: 5 Rot点数<br>效果: ^"+format(this.effect())},
     effect() {
     eff=player.r.rota.max(1).log(10).pow(0.25)
     return eff.max(1)
    },
    tooltip() {
      return "购买要求:71" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    return gcs(this.layer,71)==1&&player.r.rot.gte(5)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(5)
    },
      unlocked(){return hasUpgrade('r',25)},
      branches(){return ["71"]},
     },
    82: {//Rot82
     title(){return "82 Phira" },
    display() {return "基于RKS指数提升Phigros挑战HD的效果<br>价格: 9 Rot点数<br>效果: ^"+format(this.effect())},
     effect() {
     eff=player.p.rks.max(1).log(1.66).pow(0.6)
     return eff.max(1)
    },
    tooltip() {
      return "购买要求:72" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    return gcs(this.layer,72)==1&&player.r.rot.gte(9)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(9)
    },
      unlocked(){return hasUpgrade('r',25)},
      branches(){return ["72"]},
    },
    83: {//Rot83
     title(){return "83 Cytoid" },
    display() {return "基于Cyten增益Cytus可购买“音乐星云”的底数<br>价格: 7 Rot点数<br>效果: ×"+format(this.effect())},
     effect() {
     eff=player.c.points.max(1).log(2).pow(0.25)
     if(hasUpgrade('s',36)) eff=eff.pow(upgradeEffect('s',36))
     return eff.max(1)
    },
    tooltip() {
      return "购买要求:73" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
      return gcs(this.layer,73)==1&&player.r.rot.gte(7)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(7)
    },
      unlocked(){return hasUpgrade('r',25)},
      branches(){return ["73"]},
    },
    91: {//Rot91
     title(){return "91 源蛇" },
    display() {return "基于蛇长度指数提升龙的第二个效果<br>价格: 9 Rot点数<br>效果: ^"+format(this.effect())},
     effect() {
     eff=player.a.sn.max(1).pow(0.3).log(10).pow(0.2)
     return eff.max(1)
    },
    tooltip() {
      return "购买要求:81" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    return gcs(this.layer,81)==1&&player.r.rot.gte(9)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(9)
    },
      unlocked(){return hasUpgrade('r',27)},
      branches(){return ["81"]},
    },
    92: {//Rot92
     title(){return "92 Phi-<br>community" },
    display() {return "基于Cytus力量提升Phidata获取量<br>价格: 8 Rot点数<br>效果: ×"+format(this.effect())},
     effect() {
     eff=player.c.power.max(1).pow(0.05)
     if(eff.log10().gte(100)) eff = n(10).pow(eff.log10().sub(100).pow(0.8).add(100))//sc2
     return eff.max(1)
    },
    tooltip() {
      return "购买要求:82" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    return gcs(this.layer,82)==1&&player.r.rot.gte(8)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(8)
    },
      unlocked(){return hasUpgrade('r',27)},
      branches(){return ["82"]},
    },
    93: {//Rot93
     title(){return "93 Cycles" },
    display() {return "基于Notes指数增益Cytus力量获取量<br>价格: 8 Rot点数<br>效果: ^"+format(this.effect())},
     effect() {
     eff=player.c.power.max(1).pow(0.01).log(10).pow(0.2).sub(1).div(5).add(1)
     return eff.max(1)
    },
    tooltip() {
      return "购买要求:83" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
    if(inChallenge('r',12)&&gcs('r',12)==1) return false
    return gcs(this.layer,83)==1&&player.r.rot.gte(8)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(8)
    },
      unlocked(){return hasUpgrade('r',27)},
      branches(){return ["83"]},
    },
    101: {//Rot101
        title(){return "101 Arcaea" },
       display() {return "Arcaea升级Testify的效果基于Notes也给予源点额外乘数，但效果减弱<br>价格: 9 Rot点数<br>效果: ×"+format(this.effect())},
        effect() {
eff=upgradeEffect('a',46)
eff=eff.pow(player.points.max(10).slog().pow(0.025).sub(1).max(0))
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:91" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,91)==1&&player.r.rot.gte(9)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(9)
           },
            unlocked(){return hasUpgrade('r',32)},
            branches(){return ["91"]},
    },
    102: {//Rot102
        title(){return "102 Phigros" },
       display() {return "基于课题力量提升Phidata额外乘数<br>价格: 8 Rot点数<br>效果: ×"+format(this.effect())},
        effect() {
eff=player.ch.enp.max(1).pow(1.5)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:92" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,92)==1&&player.r.rot.gte(8)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(8)
           },
            unlocked(){return hasUpgrade('r',32)},
            branches(){return ["92"]},
    },
    103: {//Rot103
        title(){return "103 Cytus" },
       display() {return "基于Cyten提升Cyten额外乘数<br>价格: 10 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
eff=player.c.points.max(1).log(3.6).pow(9.6)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:93" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,93)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(10)
           },
            unlocked(){return hasUpgrade('r',32)},
            branches(){return ["93"]},
    },
    111: {//Rot111
        title(){return "111" },
       display() {return "基于全局速率增益旋律<br>价格: 6 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
eff=player.devSpeed.max(1).log(1.5).pow(0.5)
if(gcs('r',111)==1&&gcs('r',112)==1&&hasUpgrade('r',35)) eff=eff.pow(1.25)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:101|102|103" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return (gcs(this.layer,101)==1||gcs(this.layer,102)==1||gcs(this.layer,103)==1)&&player.r.rot.gte(6)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(6)
           },
            unlocked(){return hasUpgrade('r',34)},
            branches(){return ["101","102","103"]},
    },
    112: {//Rot112
        title(){return "112" },
       display() {return "基于旋律增益全局速率<br>价格: 6 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
         let a=player.r.points
         if(hasUpgrade('r',36)) a=player.r.total
eff=a.max(10).log(10).pow(0.5)
if(gcs('r',111)==1&&gcs('r',112)==1&&hasUpgrade('r',35)) eff=eff.pow(1.35)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:101|102|103" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return (gcs(this.layer,101)==1||gcs(this.layer,102)==1||gcs(this.layer,103)==1)&&player.r.rot.gte(6)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(6)
           },
            unlocked(){return hasUpgrade('r',34)},
            branches(){return ["101","102","103"]},
    },
    121: {//Rot121
        title(){return "121" },
      display() {return "你可以同时购买Rot升级71、72和73<br>价格: 10 Rot点数"},
           tooltip() {
            return "购买要求:111|112" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return (gcs(this.layer,111)==1||gcs(this.layer,112)==1)&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(10)
           },
            unlocked(){return hasUpgrade('mi',17)},
            branches(){return ["111","112"]},
    },
    131: {//Rot131
        title(){return "131 活跃" },
       display() {return "基于Milthm增益旋律<br>价格: 10 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
         let a=player.mi.points.log(10)
eff=a.div(10).pow(0.4)
        return eff.max(1)
           },
           tooltip() {if(gcs('r',171)==1) return "购买要求:121"
            return "购买要求:121,!132,!133" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,121)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1&&((!gcs(this.layer,132)==1&&!gcs(this.layer,133)==1)||gcs(this.layer,171)==1)
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(10)
           },
            unlocked(){return hasUpgrade('mi',27)},
            branches(){return ["121"]},
    },
    132: {//Rot132
        title(){return "132 被动" },
       display() {return "旋律获取量×5<br>价格: 10 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
        return n(5)
           },
           tooltip() {if(gcs('r',171)==1) return "购买要求:121"
            return "购买要求:121,!131,!133" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,121)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1&&((!gcs(this.layer,131)==1&&!gcs(this.layer,133)==1)||gcs(this.layer,171)==1)
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(10)
           },
            unlocked(){return hasUpgrade('mi',27)},
            branches(){return ["121"]},
    },
    133: {//Rot133
        title(){return "133 挂机" },
       display() {return "基于这次重置时间增益旋律，时间越长效果越高<br>价格: 10 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
         let a=n(player.r.resettime)
if(player.devSpeed.neq(0)) a=a.div(player.devSpeed)
if(hasUpgrade('j',13)) a=a.add(87.35)
eff=a.mul(3.2).root(3.5)
if(player.devSpeed.eq(0)) eff=n(1)
        return eff.max(1)
           },
           tooltip() {if(gcs('r',171)==1) return "购买要求:121<br>不计入全局速率的影响，如果重置时间没有变化，请再次重置一次R层"
            return "购买要求:121,!131,!132<br>不计入全局速率的影响，如果重置时间没有变化，请再次重置一次R层" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,121)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1&&((!gcs(this.layer,131)==1&&!gcs(this.layer,132)==1)||gcs(this.layer,171)==1)
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(10)
           },
            unlocked(){return hasUpgrade('mi',27)},
            branches(){return ["121"]},
    },
    141: {//Rot141
        title(){return "141 活跃" },
       display() {return "基于填充Notes数量增益Milthm维度（你需要先填充Notes）<br>价格: 8 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
      let eff=n(10).pow(player.r.notes.max(10).log(2)).pow(0.3).log(10).pow(0.3)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:131<br>你需要用Rot升级树13来填充Notes" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,131)==1&&player.r.rot.gte(8)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(8)
           },
            unlocked(){return hasUpgrade('r',41)},
            branches(){return ["131"]},
    },
    142: {//Rot142
        title(){return "142 被动" },
       display() {return "Milthm维度倍率×80<br>价格: 8 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
        return n(80)
           },
           tooltip() {
            return "购买要求:132" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,132)==1&&player.r.rot.gte(8)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(8)
           },
            unlocked(){return hasUpgrade('r',41)},
            branches(){return ["132"]},
    },
    143: {//Rot143
        title(){return "143 挂机" },
       display() {return "基于Milthm增益Milthm维度<br>价格: 8 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
eff=player.mi.points.max(10).log(10).pow(0.7)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:133" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,133)==1&&player.r.rot.gte(8)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(8)
           },
            unlocked(){return hasUpgrade('r',41)},
            branches(){return ["133"]},
    },
    151: {//Rot151
        title(){return "151 活跃" },
       display() {return "基于填充Notes数量增益课题力量<br>价格: 12 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
      let eff=player.r.notes.max(1).root(1e5)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:141" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,141)==1&&player.r.rot.gte(12)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(12)
           },
            unlocked(){return hasUpgrade('r',45)},
            branches(){return ["141"]},
    },
    152: {//Rot152
        title(){return "152 被动" },
       display() {return "课题力量×1e30<br>价格: 12 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
        return n(1e30)
           },
           tooltip() {
            return "购买要求:142" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,142)==1&&player.r.rot.gte(12)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(12)
           },
            unlocked(){return hasUpgrade('r',45)},
            branches(){return ["142"]},
    },
    153: {//Rot153
        title(){return "153 挂机" },
       display() {return "基于课题力量增益旋律<br>价格: 1 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
eff=player.ch.enp.pow(0.1).max(1).log(2).pow(0.5).max(1)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:143" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,143)==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(1)
           },
            unlocked(){return hasUpgrade('r',45)},
            branches(){return ["143"]},
    },
    161: {//Rot161
     title(){return "161" },
     a() {if(hasUpgrade('ri',12)) return n(1)
     else return n(10)},
    display() {return "如果当前旋律数量小于每秒获取量的"+format(this.effect())+"倍，则旋律获取量×"+format(this.effect().div(this.a()))+"<br>价格: 10 Rot点数"},
     effect() {
     eff=player.r.rota.pow(0.9).mul(10)
     if(hasUpgrade('ri',12)) eff=eff.pow(1.1)
     return eff.max(100)
    },
    tooltip() {
      return "购买要求:151|152|153" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
   canClick() {
      if(inChallenge('r',12)&&gcs('r',12)==1) return false
      return (gcs(this.layer,151)==1|| gcs(this.layer,152)==1|| gcs(this.layer,153)==1)&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1
   },
    onClick() {setClickableState(this.layer, this.id,1)
      if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(10)
    },
      unlocked(){return hasUpgrade('r',46)},
      branches(){return ["151","152","153"]},
     },
    171: {//Rot171
        title(){return "171" },
      display() {return "你可以同时购买Rot升级131、132和133<br>价格: 10 Rot点数"},
           tooltip() {
            return "购买要求:161" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,161)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(10)
           },
            unlocked(){return hasUpgrade('j',13)},
            branches(){return ["161"]},
    },
    181: {//Rot181
        title(){return "181" },
       display() {return "基于Rot点数增益Cytus力量<br>价格: 0 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
eff=player.r.rota.max(1).pow(player.r.rota.max(1))
if(eff.log10().gte(500)) eff = n(10).pow(eff.log10().sub(500).pow(0.8).add(500))//sc
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:171" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,171)==1&&player.r.rot.gte(0)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       if(!hasMilestone('ri',3)) player.r.upgCost=player.r.upgCost.add(0)
           },
            unlocked(){return hasAchievement('A',105)},
            branches(){return ["171"]},
    },
   },
   upgrades: {
    11:{ title: "Rot助推 I",
   description: "你可以同时购买升级31和32，并且升级42的效果提升",
    cost: n(100),
    unlocked() {return true},
    },
    12:{ title: "Rot助推 II",
   description: "解锁第五行升级树",
    cost: n(200),
    unlocked() {return hasUpgrade('r',11)},
    },
    13:{ title: "Rot助推 III",
   description: "你可以同时购买升级41和43，你可以使用Notes购买Rot点数",
    cost: n(500),
    unlocked() {return hasUpgrade('r',12)},
    },
    14:{ title: "Rot助推 IV",
   description: "你可以同时购买升级51、52和53",
    cost: n(1000),
    unlocked() {return hasUpgrade('r',13)},
    },
    15:{ title: "Rot助推 V",
   description: "解锁第六行升级树",
    cost: n(2000),
    unlocked() {return hasUpgrade('r',14)},
    },
    16:{ title: "Rot助推 VI",
   description: "去除Rot升级21的硬上限（但改为软上限）",
    cost: n(3000),
    unlocked() {return hasUpgrade('r',15)},
    },
    17:{ title: "Rottttaeno…Challlllllenge",
   description: "解锁Rotaeno挑战（RC）",
    cost: n(4000),
    unlocked() {return hasUpgrade('r',16)},
    },
    21:{ title: "Rot助推 VII",
   description: "解锁Phidata曲包，解锁第七行升级树",
    cost: n(5000),
    unlocked() {return hasChallenge('r',11)},
    },
    22:{ title: "Rot助推 VIII",
   description: "Rot升级31和32对Cyten的额外增益也生效",
    cost: n(20000),
    unlocked() {return hasUpgrade('r',21)},
    },
    23:{ title: "Rot助推 IX",
   description: "Rot升级71、72、73的效果基于累计旋律",
    cost: n(200000),
    unlocked() {return hasUpgrade('r',22)},
    },
    24:{ title: "Rot助推 X",
   description: "Rot升级53的效果在软上限后也生效，但效果减弱（^0.25）",
    cost: n(1000000),
    unlocked() {return hasUpgrade('r',23)},
    },
    25:{ title: "Rot助推 XI",
   description: "解锁第八行升级树",
    cost: n(1500000),
    unlocked() {return hasUpgrade('r',24)},
    },
    26:{ title: "Rot助推 XII",
   description: "再次提升Rot升级43的效果",
    cost: n(1e7),
    unlocked() {return hasUpgrade('r',25)},
    },
    27:{ title: "曲包+挑战助推 I",
   description: "解锁第二个Rotaeno挑战，解锁第九行升级树，解锁Cytus曲包",
    cost: n(1e8),
    unlocked() {return hasUpgrade('r',26)},
    },
    31:{ title: "曲包+挑战助推 II",
   description: "RC2中不再对Rot点数有减益，自动购买Phigros曲包和Cytus曲包",
    cost: n(1e9),
    unlocked() {return hasUpgrade('r',27)},
    },
    32:{ title: "Rot助推 XIII",
   description: "解锁第10行升级树，你可以最大化购买曲包",
    cost: n(5e9),
    unlocked() {return challengeCompletions('r',12)>4},
    },
    33:{ title: "曲包助推 III",
   description: "R层重置不再重置曲包数量",
    cost: n(3e10),
    unlocked() {return hasUpgrade('r',32)},
    },
    34:{ title: "Rot助推 XIV",
   description: "解锁第11行升级树",
    cost: n(5e11),
    unlocked() {return hasUpgrade('r',33)},
    },
    35:{ title: "Rot助推 XV",
   description: "当同时拥有Rot升级111和112时，提升升级111和112的效果",
    cost: n(1e12),
    unlocked() {return hasUpgrade('r',34)},
    },
    36:{ title: "Rot助推 XVI",
   description: "Rot升级112的效果基于累计旋律",
    cost: n(1e14),
    unlocked() {return hasUpgrade('r',35)},
    },
    37:{ title: "层级助推 I",
   description: "解锁下一个层级，Milthm，全局速率×3",
    cost: n(5e14),
    unlocked() {return hasUpgrade('r',36)},
    },
    41:{ title: "Rot助推 XVII",
   description: "解锁第14行升级树和Rot升级13",
    cost: n(5e23),
    unlocked() {return hasChallenge('r',13)},
    },
    42:{ title: "层级助推 II",
   description: "解锁两个歌曲升级",
    cost: n(7.5e23),
    unlocked() {return challengeCompletions('r',13)>1},
    },
    43:{ title: "层级助推 III",
   description: "解锁两个魔王曲升级",
    cost: n(5e24),
    unlocked() {return challengeCompletions('r',13)>2},
    },
    44:{ title: "层级助推 IV",
   description: "解锁两个Rotaeno升级，如果当前旋律数量小于每秒获取量的100倍，则旋律获取量×10",
    cost: n(5e25),
    unlocked() {return challengeCompletions('r',13)>3},
    },
    45:{ title: "Rot助推 XVIII",
   description: "解锁第15行升级树",
    cost: n(2e26),
    unlocked() {return hasUpgrade('r',44)},
    },
    46:{ title: "Rot助推 XIX",
   description: "解锁第16行升级树，Cytus力量×1e60",
    cost: n(4e26),
    unlocked() {return hasUpgrade('r',45)},
    },
    47:{ title: "层级助推 V",
   description: "解锁下一个层级，判定，谱面额外乘数×1.0025，Milthm维度×10",
    cost: n(1e27),
    unlocked() {return challengeCompletions('r',13)>4},
    },
    },
   challenges: {
   11: {
     name: "RC1 Note消逝",
     challengeDescription(){
   return "Notes获取量^0.1，Rot点数数量÷2.4<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"},
     goalDescription(){return "1e"+n(500).add(n(challengeCompletions(this.layer,this.id)).mul(50))+" Cytus力量"},
     rewardDescription(){return "降低曲包的价格<br>效果：^"+format(challengeEffect(this.layer,this.id))},
     rewardEffect() {eff=n(1).div(n(challengeCompletions(this.layer,this.id)).add(1).pow(0.15))
   return eff
     },
     unlocked(){return hasUpgrade('r',17)},
     onEnter() {layers.r.clickables[11].onClick()},
     completionLimit(){
   return n(5)},
     canComplete: function() {
   return player.c.power.gte(n("1e500").mul(n(1e50).pow(n(challengeCompletions(this.layer,this.id)))))},
     },
   12: {
     name: "RC2 力量减弱",
     challengeDescription(){
   return "Cytus力量基于累计消耗的Rot点数的减益，Rot点数数量÷2<br>注意：你需要在进入挑战后选定Rot升级树，并且在挑战中不能修改！<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"},
     goalDescription(){
      let a="1e850"
      let b="1"
      if(challengeCompletions('r',12)==1) {a="1e400"
      b="0.4"}
      if(challengeCompletions('r',12)==2) {a="1e235"
      b="0.25"}
      if(challengeCompletions('r',12)==3) {a="1e185"
      b="0.165"}
      if(challengeCompletions('r',12)==4) {a="1e105"
      b="0.1"}
      if(challengeCompletions('r',12)==5) {a="NaNeInfinity"
      b="114514"}
      return "在削弱指数至多为^"+b+"的情况下，达到 "+a+" Cytus力量"
     },
     rewardDescription(){return "全局时间速率×"+format(challengeEffect(this.layer,this.id))},
     rewardEffect() {
     eff=n(challengeCompletions(this.layer,this.id)).add(1).pow(2).sub(3).max(0).add(1).pow(0.6)
   return eff
     },
     unlocked(){return hasUpgrade('r',27)},
     onEnter() {
      setClickableState('r',12,0)
      layers.r.clickables[11].onClick()
      player.devSpeed=n(0)
     },
     style: {'height':'350px'},
     completionLimit(){
   return n(5)},
     canComplete: function() {
   if(challengeCompletions('r',12)==0) return player.c.power.gte("1e850")
      if(challengeCompletions('r',12)==1) return player.c.power.gte("1e400")&&tmp.r.chal2Cal.lte(0.4)
      if(challengeCompletions('r',12)==2) return player.c.power.gte("1e235")&&tmp.r.chal2Cal.lte(0.25)
      if(challengeCompletions('r',12)==3) return player.c.power.gte("1e185")&&tmp.r.chal2Cal.lte(0.165)
      if(challengeCompletions('r',12)==4) return player.c.power.gte("1e105")&&tmp.r.chal2Cal.lte(0.1)
      if(challengeCompletions('r',12)==5) return true
     },
    },
   13: {
     name: "RC3 无尽之雨",
     challengeDescription(){
   return "Rot升级树被禁用，Notes获取量上限为Milthm数量<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"},
     goalDescription(){return "1e"+n(1000).add(n(challengeCompletions(this.layer,this.id)).mul(100))+" Cytus力量"},
     rewardDescription(){return "基于Cytus力量增益Milthm维度的倍率，随着挑战完成次数加强<br>效果：×"+format(challengeEffect(this.layer,this.id))+"<br>每次完成都会解锁一个Rotaeno升级！"},
     rewardEffect() {eff=player.c.power.max(10).log(n(10).div(n(challengeCompletions(this.layer,this.id)).max(1))).mul(n(challengeCompletions(this.layer,this.id)).pow(3))
   return eff.max(1)
     },
     style: {'height':'350px'},
     unlocked(){return hasUpgrade('mi',27)},
     onEnter() {layers.r.clickables[11].onClick()},
     completionLimit(){
   return n(5)},
     canComplete: function() {
   return player.c.power.gte(n("1e1000").mul(n(1e100).pow(n(challengeCompletions(this.layer,this.id)))))},
   },
   14: {
     name: "RC4 方向盘炸了",
     challengeDescription(){
   return "所有非静态层级资源和Notes获取量变为原来的log10，全局速率锁定为1，别忘了重新购买Rot升级树中的升级<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"},
     goalDescription(){return this.a().add(n(challengeCompletions(this.layer,this.id)).mul(60000))+" Notes每秒"},
    a() {
     if(challengeCompletions(this.layer,this.id)==0) return n(1800000)
     if(challengeCompletions(this.layer,this.id)==1) return n(1795000)
     if(challengeCompletions(this.layer,this.id)>1) return n(1930000)
    },
     rewardDescription(){return "前两次完成分别解锁3个曲包升级<br>后三次完成基于完成次数和判定线增益旋律获取量，当前效果：×"+format(challengeEffect(this.layer,this.id))},
     rewardEffect() {
      let a=n(1)
      if(challengeCompletions(this.layer,this.id)>2) a=n(n(challengeCompletions(this.layer,this.id)).sub(2).mul(player.j.points.max(1))).pow(0.2)
      return a.max(1)
     },
     style: {'height':'350px'},
     unlocked(){return hasUpgrade('j',17)},
     onEnter() {layers.r.clickables[11].onClick()},
     completionLimit(){
   return n(5)},
     canComplete: function() {
   return getPointGen().gte(this.a().add(n(challengeCompletions(this.layer,this.id)).mul(60000)))},
   }, 
   },
})//Rotaeno
addLayer("mi", {
  infoboxes: {
introBox: {
  title: "层级10--Milthm",
  body(){return "欢迎来到第十层！这个层级和其他的层级不一样，不能直接进行重置，你需要通过Milthm维度获取Milthm（这也导致Milthm在一段时间内没有用）不过Milthm是一款全新的国产非商业音游，大家可以去体验哦！"},
        },
dimBox: {
  title: "Milthm维度",
  body(){return "😅😅又是反物质维度改版了，这个主题真的永远做不完<br>在这里，每一个维度会生产对应的上一个维度，而维度1会生产Milthm，同时每次购买维度会使生产倍率翻倍。注意：这里的维度目前不受全局速率影响！<br>灵感来源：经典增量游戏“反物质维度”（https://ivark.github.io/AntimatterDimensions/）"},
        },
upgBox: {
  title: "Milthm升级",
  body(){return "这些升级主要是为了提升Milthm和维度的获取量，当然也会基于Milthm提供一些加成，并且解锁一些新东西。"},
     },
},
    name: "Milthm",
    symbol: "Mi",
    position: 2,
    startData() { return {
        unlocked() { return hasUpgrade('r',37)||hasAchievement('A',111)},
points: n(1),
total: n(1),
dim1:n(0),
dim2:n(0),
dim3:n(0),
dim4:n(0),
dim5:n(0),
dim6:n(0),
dim7:n(0),
dim8:n(0),
dim9:n(0),
buyBoost:n(2),//购买维度倍率
    }},
     color: "#bcf2ff",
    requires: n(1), 
    resource: "Milthm",
    type: "custom", 
    branches(){return ['ch','c']},
    getResetGain() {
    return n(0)
    },
    getNextAt() {return n(0)},
    row: 4, 
    layerShown(){ return hasUpgrade('r',37)||hasAchievement('A',111)},
    update(diff) {
     if(player.devSpeed.gt(0)) {
      if(tmp.mi.buyables[21].effect.gt(0)) player.mi.points=player.mi.points.add(tmp.mi.buyables[21].effect.mul(player.mi.dim1).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[21].effect.gt(0)) player.mi.total=player.mi.total.add(tmp.mi.buyables[21].effect.mul(player.mi.dim1).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[31].effect.gt(0)) player.mi.dim1=player.mi.dim1.add(tmp.mi.buyables[31].effect.mul(player.mi.dim2).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[41].effect.gt(0)) player.mi.dim2=player.mi.dim2.add(tmp.mi.buyables[41].effect.mul(player.mi.dim3).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[51].effect.gt(0)) player.mi.dim3=player.mi.dim3.add(tmp.mi.buyables[51].effect.mul(player.mi.dim4).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[61].effect.gt(0)) player.mi.dim4=player.mi.dim4.add(tmp.mi.buyables[61].effect.mul(player.mi.dim5).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[71].effect.gt(0)) player.mi.dim5=player.mi.dim5.add(tmp.mi.buyables[71].effect.mul(player.mi.dim6).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[81].effect.gt(0)) player.mi.dim6=player.mi.dim6.add(tmp.mi.buyables[81].effect.mul(player.mi.dim7).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[91].effect.gt(0)) player.mi.dim7=player.mi.dim7.add(tmp.mi.buyables[91].effect.mul(player.mi.dim8).mul(diff).div(player.devSpeed))
      if(tmp.mi.buyables[101].effect.gt(0)) player.mi.dim8=player.mi.dim8.add(tmp.mi.buyables[101].effect.mul(player.mi.dim9).mul(diff).div(player.devSpeed))
     }
     if(hasUpgrade('mi',21)) {
      if (layers.mi.buyables[21].canAfford()) layers.mi.buyables[21].buy();
      if (layers.mi.buyables[31].canAfford()) layers.mi.buyables[31].buy();
      if (layers.mi.buyables[41].canAfford()) layers.mi.buyables[41].buy();
      if (layers.mi.buyables[51].canAfford()) layers.mi.buyables[51].buy();
      if (layers.mi.buyables[61].canAfford()) layers.mi.buyables[61].buy();
      if (layers.mi.buyables[71].canAfford()) layers.mi.buyables[71].buy();
     }
     if(hasUpgrade('mi',22)) {
      if (layers.mi.buyables[11].canAfford()) layers.mi.buyables[11].buy();
      if (layers.mi.buyables[81].canAfford()) layers.mi.buyables[81].buy();
      if (layers.mi.buyables[91].canAfford()) layers.mi.buyables[91].buy();
     if (layers.mi.buyables[101].canAfford()&&layers.mi.buyables[101].unlocked()) layers.mi.buyables[101].buy();
     }
     
     player.mi.buyBoost=tmp.mi.buyBoost
    },
    dimBoost() {
     let a=n(1)
     a = a.mul(tmp.mi.buyables[11].effect)
    if(hasUpgrade('mi',11)) a=a.times(upgradeEffect('mi',11))
    if(hasUpgrade('mi',14)) a=a.times(upgradeEffect('mi',14))
    if(hasUpgrade('mi',15)) a=a.times(upgradeEffect('mi',15))
    if(hasUpgrade('mi',17)) a=a.times(upgradeEffect('mi',17))
    if(hasUpgrade('m',15)) a=a.times(upgradeEffect('m',15))
    if(hasUpgrade('r',47)) a=a.times(10)
    if(hasChallenge('r',13)) a=a.times(challengeEffect('r',13))
    if(gcs("r",141)==1) a = a.times(clickableEffect("r", 141))
    if(gcs("r",142)==1) a = a.times(clickableEffect("r", 142))
    if(gcs("r",143)==1) a = a.times(clickableEffect("r", 143))
    if(tmp.ri.mil1.gte(1)) a=a.times(tmp.ri.mil1)
     return a
    },//计算维度的其他倍率
    buyBoost() {
     let a=n(2)
     if(hasUpgrade('mi',13)) a=n(2.1)
     if(hasUpgrade('mi',23)) a=a.add(upgradeEffect('mi',23))
     if(tmp.ri.mil2.gte(0)) a=a.add(tmp.ri.mil2)
     return a
    },//计算购买维度的倍率
    tabFormat: {
    "Milestones": {
        content: [ ["infobox","introBox"],
    "main-display",
    "milestones",
     ],},
    "Dimensions": {
        content: [ ["infobox","dimBox"],
    "main-display","blank",
      ["display-text",
      function() {return '你正在获得 '+ format(tmp.mi.buyables[21].effect.mul(player.mi.dim1)) +' Milthm每秒<br>你累计有 ' + format(player.mi.total) + " Milthm"},
    {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
      ["display-text",
      function() {if(player.mi.total.gte("1.80e308")) return '在1.80e308 Milthm以后，Milthm维度和计数频率价格提升速度加快！'},
    {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
      ["display-text",
      function() { return '当前维度的倍率是'+format(tmp.mi.dimBoost)+'<br>每次购买维度的倍率是'+format(tmp.mi.buyBoost,3)},
    {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
					["row", [["buyable", 11],["buyable",12],["buyable", 13]]],
					["row", [["buyable", 21],["buyable",31],["buyable", 41]]],
						["row", [["buyable", 51],["buyable",61],["buyable", 71]]],
						["row", [["buyable", 81],["buyable",91],["buyable", 101]]],
     ],
     unlocked(){return hasMilestone('mi',0)}
   },
    "Upgrades": {
        content: [ ["infobox","upgBox"],
        "main-display","blank",
    "upgrades",
],
unlocked(){return hasMilestone('mi',2)}
    },
},
doReset(resettingLayer) {
     if (layers[resettingLayer].row > layers[this.layer].row) {
      let kept = ["unlocked", "auto"]
      if (resettingLayer == "t") {
     kept.push("milestones","upgrades","points","total")
      }
      if (resettingLayer == "ri"||hasMilestone('e',0)) {
     if(hasMilestone('ri',1)) kept.push("milestones")
     if(hasMilestone('ri',2)) kept.push("upgrades")
    if(hasMilestone('ri',3)) kept.push("buyables","dim1","dim2","dim3","dim4","dim5","dim6","dim7","dim8","dim9")
     if(hasMilestone('ri',7)) kept.push("points")
      }
      layerDataReset(this.layer, kept)
     }
    },
    upgrades: {
    11:{ title: "介绍—天气预报",
    description:"全局速率以降低的倍率增益Milthm维度",
    cost: n(1e15),
    tooltip:"说真的，我和你们一样讨厌时间墙",
    effect() {return n(2).pow(player.devSpeed.max(1).log(10).pow(0.5)).max(1)},
    effectDisplay() { return "×"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasMilestone('mi',2)}, },
    12:{ title: "序章—雨的声音",
    description:"计数频率效果^5，Milthm增益Cyten获取量",
    cost: n(1e25),
    effect() {
     let eff=n(8).pow(player.mi.points.max(1).log(15))
     if(eff.log10().gte(50)) eff = n(10).pow(eff.log10().sub(50).pow(0.8).add(50))//sc
     return eff
    },
    effectDisplay() { return "×"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasUpgrade('mi',11)}, },
    13:{ title: "单曲—梦境旋律",
    description:"购买Milthm维度的乘数从×2变成×2.1",
    cost: n(1e35),
    unlocked() {return hasUpgrade('mi',12)}, },
    14:{ title: "这游戏总共就三个曲包你让我怎么命名升级",
    description:"累计旋律增益Milthm维度倍率",
    cost: n(1e42),
    tooltip:"你看我们音乐游戏树真的没有时间墙了",
    effect() {return player.r.total.max(1).log(10).pow(0.5).max(1)},
    effectDisplay() { return "×"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasUpgrade('mi',13)}, 
    },
    15:{ title: "",
    description:"基于Milthm增益旋律获取量",
    cost: n(1e60),
    effect() {return player.mi.points.max(10).log(10).pow(0.25)},
    effectDisplay() { return "×"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasUpgrade('mi',14)}, 
    },
    16:{ title: "",
    description:"Milthm维度1倍率^1.01，维度2倍率^1.02，维度3倍率^1.03…（对后面解锁的维度也生效）",
    cost: n(1e72),
    unlocked() {return hasUpgrade('mi',15)}, 
    },
    17:{ title: "",
    description:"解锁第12行升级树，Notes增益Milthm维度倍率",
    cost: n(1e75),
    effect() {return player.points.max(10).slog().max(1)},
    effectDisplay() { return "×"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasUpgrade('mi',16)}, 
    },
    21:{ title: "",
    description:"每tick自动购买Milthm维度1-6",
    cost: n(1e200),
    unlocked() {return hasMilestone('mi',3)}, 
    },
    22:{ title: "",
    description:"每tick自动购买Milthm维度7-9和计数频率",
    cost: n("1.80e308"),
    unlocked() {return hasUpgrade('mi',21)}, 
    },
    23:{ title: "",
    description:"购买维度倍率基于Milthm增加",
    cost: n("1e350"),
    effect() {return player.mi.points.max(1).log(10).pow(0.25).max(1).log(10).div(10)},
    effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasUpgrade('mi',22)}, 
    },
    24:{ title: "",
    description:"基于累计Rot点数指数增益计数频率效果",
    cost: n("1e380"),
    effect() {return player.r.rota.max(1).log(10).pow(0.3).max(1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasUpgrade('mi',23)}, 
    },
    25:{ title: "",
    description:"你可以用Milthm购买Rot点数",
    cost: n("1e400"),
    unlocked() {return hasUpgrade('mi',24)}, 
    },
    26:{ title: "",
    description:"Milthm维度1以极低的倍率增益Milthm维度9",
    cost: n("1e410"),
    effect() {return player.mi.dim1.max(1).pow(0.05).max(1)},
    effectDisplay() { return "×"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasUpgrade('mi',25)}, 
    },
    27:{ title: "",
    description:"解锁第三个Rotaeno挑战和第13行升级树",
    cost: n("1e432"),
    unlocked() {return hasUpgrade('mi',26)}, 
    },
    },
    milestones: {
   0: {
    requirementDescription: "解锁Milthm层级",
    effectDescription: "解锁3个Milthm维度，基于Milthm维度1自动获取Milthm",
    done() { return player.mi.unlocked() }
   },
   1: {
    requirementDescription: "1e10 Milthm",
    effectDescription: "解锁第4个Milthm维度，解锁计数频率，基于计数频率给每个Milthm维度时间速率加成",
    done() { return player.mi.points.gte(1e10) }
   },
   2: {
    requirementDescription: "1e15 Milthm",
    effectDescription: "解锁第5个Milthm维度，解锁Milthm升级",
    done() { return player.mi.points.gte(1e15) }
   },
   3: {
    requirementDescription: "1e100 Milthm",
    effectDescription: "解锁第6个Milthm维度，解锁第二行Milthm升级",
    done() { return player.mi.points.gte(1e100) }
   },
   4: {
    requirementDescription: "1e200 Milthm",
    effectDescription: "解锁第7个Milthm维度",
    done() { return player.mi.points.gte(1e200) }
   },
   5: {
    requirementDescription: "1.8e308 Milthm",
    effectDescription: "解锁第8个Milthm维度",
    done() { return player.mi.points.gte("1.8e308") }
   },
   6: {
    requirementDescription: "1e370 Milthm",
    effectDescription: "解锁第9个Milthm维度",
    done() { return player.mi.points.gte("1e370") }
   },
    },
    buyables:{ 
   11: {//ts
				title: "计数频率",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(100).pow(x.add(5))
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
				effect(x=player[this.layer].buyables[this.id]) {
				let a = n(1.025)
				eff = a.pow(x)
				if(hasUpgrade('mi',12)) eff=eff.pow(5)
				if(hasUpgrade('mi',24)) eff=eff.pow(upgradeEffect('mi',24))
				return eff.max(1)
				},
				purchaseLimit() {return n(500)},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你有 "+ format(gba(this.layer,this.id)) +" 个计数频率<br>计数频率使所有维度倍率×" + format(this.effect()))
      },
    unlocked() { return hasMilestone('mi',1)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.log(100).sub(5)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
   21: {//md1
				title: "Milthm维度1",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(10).pow(x)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.01)
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim1) + " 个Milthm维度1，生产" + format(this.effect().times(player.mi.dim1)) + " Milthm每秒")
      },
    unlocked() { return hasMilestone('mi',0)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim1=player.mi.dim1.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.log(10)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim1=player.mi.dim1.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
			31: {//md2
				title: "Milthm维度2",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(100).pow(x).mul(100)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.02)
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim2) + " 个Milthm维度2，生产" + format(this.effect().times(player.mi.dim2)) + " Milthm维度1每秒")
      },
    unlocked() { return hasMilestone('mi',0)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim2=player.mi.dim2.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.log(100)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim2=player.mi.dim2.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
			41: {//md3
				title: "Milthm维度3",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(1000).pow(x).mul(1e5)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.03)
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim3) + " 个Milthm维度3，生产" + format(this.effect().times(player.mi.dim3)) + " Milthm维度2每秒")
      },
    unlocked() { return hasMilestone('mi',0)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim3=player.mi.dim3.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.div(1e5).log(1000)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim3=player.mi.dim3.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
			51: {//md4
				title: "Milthm维度4",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(1e4).pow(x).mul(1e12)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.04)
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim4) + " 个Milthm维度4，生产" + format(this.effect().times(player.mi.dim4)) + " Milthm维度3每秒")
      },
    unlocked() { return hasMilestone('mi',1)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim4=player.mi.dim4.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.div(1e12).log(1e4)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim4=player.mi.dim4.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
			61: {//md5
				title: "Milthm维度5",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(1e5).pow(x).mul(1e15)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.05)
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim5) + " 个Milthm维度5，生产" + format(this.effect().times(player.mi.dim5)) + " Milthm维度4每秒")
      },
    unlocked() { return hasMilestone('mi',2)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim5=player.mi.dim5.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.div(1e15).log(1e5)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim5=player.mi.dim5.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
			71: {//md6
				title: "Milthm维度6",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(1e10).pow(x).mul(1e100)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.06)
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim6) + " 个Milthm维度6，生产" + format(this.effect().times(player.mi.dim6)) + " Milthm维度5每秒")
      },
    unlocked() { return hasMilestone('mi',3)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim6=player.mi.dim6.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.div(1e100).log(1e10)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim6=player.mi.dim6.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
			81: {//md7
				title: "Milthm维度7",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(1e15).pow(x).mul(1e200)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.07)
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim7) + " 个Milthm维度7，生产" + format(this.effect().times(player.mi.dim7)) + " Milthm维度6每秒")
      },
    unlocked() { return hasMilestone('mi',4)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim7=player.mi.dim7.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.div(1e200).log(1e15)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim7=player.mi.dim7.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
			91: {//md8
				title: "Milthm维度8",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(1e20).pow(x).mul(1e300)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.08)
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim8) + " 个Milthm维度8，生产" + format(this.effect().times(player.mi.dim8)) + " Milthm维度7每秒")
      },
    unlocked() { return hasMilestone('mi',5)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim8=player.mi.dim8.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.div(1e300).log(1e20)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim8=player.mi.dim8.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
			101: {//md9
				title: "Milthm维度9",
				cost(x=player[this.layer].buyables[this.id]) { 
     let cost = n(1e50).pow(x).mul(1e300)
     let cost1 = cost//软上限后cost
     if(cost.gte("1.8e308"))  cost1 = cost.pow(cost.log(10).div(308).pow(2))
     return cost1
     },
     purchaseLimit() {return n(500)},
				effect(x=player[this.layer].buyables[this.id]) {
				let a = player.mi.buyBoost
				eff = a.pow(x.sub(1))
				eff=eff.mul(layers.mi.dimBoost())
				if(hasUpgrade('mi',16)) eff=eff.pow(1.09)
				if(hasUpgrade('mi',26)) eff=eff.mul(upgradeEffect('mi',26))
				return eff.max(0)
				},
    display() { 
    let data = tmp[this.layer].buyables[this.id]
    return ("需要 " + format(data.cost) + " Milthm，你购买了 "+ format(gba(this.layer,this.id)) +"次<br>你有 " + format(player.mi.dim9) + " 个Milthm维度9，生产" + format(this.effect().times(player.mi.dim9)) + " Milthm维度8每秒")
      },
    unlocked() { return hasMilestone('mi',6)}, 
    canAfford() {
   return player.mi.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
     player.mi.points=player.mi.points.sub(tmp.mi.buyables[this.id].cost)
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
    player.mi.dim9=player.mi.dim9.add(1)
      },
    buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.mi.points.div(1e300).log(1e50)
					let target = tempBuy.plus(1).floor();
					if(hasUpgrade('A',114514)) {
					player.mi.dim9=player.mi.dim9.add(target.sub(gba(this.layer,this.id)))
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)}
				},
    style: {'height':'150px'},
			},
   },
})//Milthm
addLayer("j", {
  infoboxes: {
introBox: {
  title: "层级11--判定",
  body(){return "欢迎来到第11层，判定！你在本层级的目标是推进判定线和判定区间，提升谱面的难度和一些其他内容，同时，在本层会有很多对静态层级的增益。<br>解锁不了？把Rot升级树换成21-31-32-41-43-51-53-61-72-82-92-102-112-121-131-141-151-73-83-93-71-81-91再试试？(需要120Rot点数)"},
        },
judBox: {
  title: "判定区间",
  body(){return "判定区间类似一个可以自定义难度的挑战！通过不断降低判定区间，“挑战”的难度会提升，并且增加完成挑战的效果，到了特定值以后会解锁新的功能！到达1e3000000 Notes就可以通过这次判定区间的挑战！在判定区间挑战中将无法获得判定线，并且为避免挂机行为，判定区间挑战限时1000秒"},
        },
},
    name: "judgment",
    symbol: "J",
    position: 1,
    startData() { return {
        unlocked() { return hasUpgrade('r',47)||hasAchievement('A',111)},
points: n(0),
pdqj:n(500),
pdqj0:n(500),//用于在挑战中确认判定区间
pdqj00:n(500),//用于在挑战中确认判定区间，再次
pdqja:n(500),//最佳判定区间
pdqjr:n(500),//实际生效最佳判定区间
time:n(0),//挑战用时
theme:"default",
clickables: {[11]: 0},
    }},
     color: "#e786f0",
    requires: n(1250), 
    resource: "判定线",
    roundUpCost:true,
    baseResource: "谱面", 
    baseAmount() {return player.ch.points}, 
    type: "static", 
    branches(){return ['c','sp','ch']},
    exponent: 1, 
    gainMult() { //jgainmult
        mult = n(1)
        return mult
    },
    gainExp() { //jgainexp
      exp= n(0.99)
       return exp
    },
    directMult() { //jdirectmult
        mult = n(25)
        return mult
    },
    row: 4, 
    hotkeys: [
        {key: "j", description: "J： Reset for Judgment",onPress(){if(canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing() {return hasMilestone('ri',4)&&!gcs('j',11)==1},
    canReset() {return !gcs('j',11)==1&&player.ch.points.gte(tmp.j.nextAt)},
    canBuyMax(){return hasMilestone('ri',10)},
    autoPrestige() {return hasMilestone('ri',4)},
    layerShown(){ return hasUpgrade('r',47)||hasAchievement('A',111)},
    tabFormat: {
    "Milestones": {
        content: [ ["infobox","introBox"],
    "main-display",
        "prestige-button","blank",
    "milestones",
     ],},
    "Judgment": {
        content: [ ["infobox","judBox"],
    "main-display","prestige-button","blank",
    ["bar","pdqj"],"blank",
    ["bar","time"],"blank",
      ["display-text",function() {return '当前的判定区间是 ' + format(player.j.pdqj) + 'ms！'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",function() {if(gcs('j',11)==1) return '在挑战中修改判定区间没有作用！实际生效判定区间： '+format(player.j.pdqj0)+"ms"},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],"blank",
    "clickables",
      ["display-text",
      function() { return '判定区间挑战减益：<br>1. Notes^' + format(tmp.j.pdqj1,4)+ '<br>2. 课题力量^' + format(tmp.j.pdqj2,4) + '<br>3.Phidata^' + format(tmp.j.pdqj3,4) },
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],"blank",
      ["display-text",function() {return '你的最佳判定区间是 ' + format(player.j.pdqja) + 'ms！'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ["display-text",function() {if(player.j.pdqja.lte(299)) return '实际生效最佳判定区间: ' + format(player.j.pdqjr) + 'ms！'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('j',12)) return '最佳判定区间增益：<br>1. 旋律×' + format(tmp.j.pdqja1,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasMilestone('j',2)) return '2.诗篇×' + format(tmp.j.pdqja2,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('j',14)) return '3.魔王曲×' + format(tmp.j.pdqja3,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasMilestone('j',3)) return '4.课题力量×' + format(tmp.j.pdqja4)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('j',15)) return '5.曲包×' + format(tmp.j.pdqja5,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('ri',16)) return '6.谱面×' + format(tmp.j.pdqja6,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('ri',16)) return '7.曲包专精效果^' + format(tmp.j.pdqja7,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('ri',21)) return '8.填充Notes^' + format(tmp.j.pdqja8,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasMilestone('e',3)) return '9.Dot获取指数+' + format(tmp.j.pdqja9,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "upgrades",
     ],
     unlocked() {return hasMilestone('j',0)}
    },
},
bars: {
     pdqj: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: {'background-color' : "#cc9900"},
      display(){
   if(gcs('j',11)==0) return "当前不在挑战中！"
      return "当前Notes: " + format(player.points) + "，到1e3000000的进度:" + format(this.progress().mul(100)) + "%"
      },
      progress() {
      let a = player.points.log10().div(3e6)
      if(a.gt(1)) a = n(1)
      if(gcs('j',11)==0) a=n(0)
      return a
      },
     },
     time: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: {'background-color' : "#cc9900"},
      display(){
   if(gcs('j',11)==0) return "当前不在挑战中！"
      return "当前挑战用时: " + formatTime(player.j.time)
      },
      progress() {
      let a = player.j.time.div(1000)
      if(a.gt(1)) a = n(1)
      if(gcs('j',11)==0) a=n(0)
      return a
      },
     },
    },
pdqj1() {
 let a=n(player.j.pdqj0)
 let b=n(1).div(n(500).div(a.max(1)).pow(0.5))
if(a.lt(450)) b=b.pow(n(450).div(a.max(1))).div(n(10).div(a.add(50).div(5).pow(0.5)))
if(a.lt(250)) b=b.pow(n(250).div(a.max(1))).div(n(10).div(a.mul(2).div(5).pow(0.5).max(1)).pow(2))
if(hasUpgrade('ri',11)) b=b.mul(1.01)
 return b.min(1)
},
pdqj2() {
 let a=n(player.j.pdqj0)
 let b=n(n(1).div((n(500).sub(a)).pow(0.5).max(1))).pow(0.5)
 if(a.lt(400)) b=b.pow(n(400).div(a.max(1))).div(n(10).div(a.add(100).div(5).pow(0.5)))
 if(hasMilestone('ri',11)) b=b.pow(0.72)
 if(hasMilestone('e',1)) b=b.pow(0.72)
 return b
},
pdqj3() {
 let a=n(player.j.pdqj0)
 let b=n(1).sub((n(500).sub(a)).mul(0.002).max(0))
if(a.lt(400)) b=b.pow(n(400).div(a.max(1))).div(n(10).div(a.add(100).div(5).pow(0.5)))
b=b.pow(tmp.ri.phi2)
b=b.pow(clickableEffect('e',15))
 return b
},
pdqjr() {
 let a=player.j.pdqja
 if(a.lt(300)) a=n(300).sub(n(300).sub(a).pow(0.8))//sc
 if(a.lt(200)) a=n(200).sub(n(200).sub(a).pow(0.5))//sc
 if(clickableEffect('e',11).gt(0)) a=a.sub(clickableEffect('e',11))
 return a
},
pdqja1() {
 let a=player.j.pdqjr
 let b=n(1.5).pow((n(500).sub(a)).pow(0.3))
 if(!hasUpgrade('j',12)) b=n(1)
 return b.max(1)
},
pdqja2() {
 let a=player.j.pdqjr
 let b=n(1.6).pow((n(500).sub(a)).pow(0.2))
 if(!hasMilestone('j',2)) b=n(1)
 return b.max(1)
},
pdqja3() {
 let a=player.j.pdqjr
 let b=n(1.2).pow((n(500).sub(a)).pow(0.4))
 if(!hasUpgrade('j',14)) b=n(1)
 return b.max(1)
},
pdqja4() {
 let a=player.j.pdqjr
 let b=n(2).pow((n(500).sub(a)))
 if(!hasMilestone('j',3)) b=n(1)
 if(gcs('j',11)==1&&!hasMilestone('j',4)) b=n(1)
 if(gcs('j',11)==1&&hasMilestone('j',4)) {b=b.pow(0.2)
 if(hasUpgrade('ri',23)&&player.j.pdqj0.lt(350)) b=b.pow(1.5)}
 return b.max(1)
},
pdqja5() {
 let a=player.j.pdqjr
 let b=n(1.2).pow((n(500).sub(a)).pow(0.5))
 if(!hasUpgrade('j',15)) b=n(1)
 return b.max(1)
},
pdqja6() {
 let a=player.j.pdqjr
 let b=n(1.02).pow((n(500).sub(a)).pow(0.15))
 if(!hasUpgrade('ri',16)) b=n(1)
 return b.max(1)
},
pdqja7() {
 let a=player.j.pdqjr
 let b=n(1.125).pow((n(500).sub(a)).pow(0.2))
 if(!hasUpgrade('ri',16)) b=n(1)
 return b.max(1)
},
pdqja8() {
 let a=player.j.pdqjr
 let b=n(1.2).pow((n(500).sub(a)).pow(0.15))
 if(!hasUpgrade('ri',21)) b=n(1)
 return b.max(1)
},
pdqja9() {
 let a=player.j.pdqjr
 let b=n(1.1).pow((n(500).sub(a)).pow(0.1)).sub(1).div(10)
 if(!hasMilestone('e',3)) b=n(0)
 return b.max(0)
},
update(diff) {
if(gcs('j',11)==0) {
player.j.pdqj00=player.j.pdqj
player.j.theme=options.theme
}
player.j.pdqj0=player.j.pdqj00.add(tmp.e.effect[0])
if(gcs('j',11)==1&&!inChallenge('ri',11)) {player.j.time=player.j.time.add(n(diff).div(player.devSpeed.max(1)))}

if(player.j.time.gte(1000)) layers.j.clickables[11].onClick()
player.j.pdqjr=tmp.j.pdqjr
},
doReset(resettingLayer) {
     if (layers[resettingLayer].row > layers[this.layer].row) {
      let kept = ["unlocked", "auto"]
      if (resettingLayer == "t") {
     kept.push("milestones","upgrades","pdqja","points")
      }
      if (resettingLayer == "ri"||hasMilestone('e',0)) {
     if(hasMilestone('ri',1)) kept.push("milestones")
     if(hasMilestone('ri',2)) kept.push("upgrades")
     if(hasMilestone('ri',4)) kept.push("pdqja","pdqj")
      }
      layerDataReset(this.layer, kept)
     }
    },
   milestones: {
   0: {
    requirementDescription: "第一条判定线",
    effectDescription: "解锁判定区间",
    done() { return player.j.points.gte(1)}
   },
   1: {
    requirementDescription: "通过490ms判定区间挑战",
    effectDescription: "解锁判定升级",
    unlocked() {return hasMilestone('j',0)},
    done() { return player.j.pdqja.lte(490)},
   },
   2: {
    requirementDescription: "第2条判定线",
    effectDescription: "最佳判定区间可以增益诗篇获取量",
    unlocked() {return hasMilestone('j',1)},
    done() { return player.j.points.gte(2)},
   },
   3: {
    requirementDescription: "第3条判定线",
    effectDescription: "最佳判定区间可以增益课题力量获取量（仅在判定区间挑战外生效）",
    unlocked() {return hasMilestone('j',2)},
    done() { return player.j.points.gte(3)},
   },
   4: {
    requirementDescription: "第4条判定线",
    effectDescription: "上一个里程碑的效果在判定区间挑战内也以^0.2的效率生效",
    unlocked() {return hasMilestone('j',3)},
    done() { return player.j.points.gte(4)},
   },
   5: {
    requirementDescription: "通过450ms判定区间挑战",
    effectDescription: "移除Rot升级61的减益效果<br>提醒：在比450ms更严的判定区间挑战中，Notes获取量减少速度变快！",
    unlocked() {return hasMilestone('j',4)},
    done() { return player.j.pdqja.lte(450)},
   },
   6: {
    requirementDescription: "第5条判定线",
    effectDescription: "解锁第二行判定升级",
    unlocked() {return hasMilestone('j',5)},
    done() { return player.j.points.gte(5)},
   },
   7: {
    requirementDescription: "通过400ms判定区间挑战",
    effectDescription: "解锁一个额外的判定区间升级<br>提醒：在比400ms更严的判定区间挑战中，课题力量获取量和Phidata获取量减少速度变快！",
    unlocked() {return hasMilestone('j',6)},
    done() { return player.j.pdqja.lte(400)},
   },
   8: {
    requirementDescription: "通过300ms判定区间挑战",
    effectDescription: "Dot获取量×4<br>最佳判定区间在299ms以后受软上限影响！",
    unlocked() {return hasMilestone('j',7)},
    done() { return player.j.pdqja.lte(300)},
   },
   9: {
    requirementDescription: "通过250ms判定区间挑战",
    effectDescription: "在实际生效比250ms更严的判定区间挑战中，Notes获取量减少速度再次变快！",
    unlocked() {return hasMilestone('j',8)},
    done() { return player.j.pdqja.lte(250)},
   },
   10: {
    requirementDescription: "通过200ms判定区间挑战",
    effectDescription: "最佳判定区间在200ms以后受二重软上限影响",
    unlocked() {return hasMilestone('j',9)},
    done() { return player.j.pdqja.lte(200)},
   },
   },
   clickables:{    
    11: {
     title(){
   if(gcs('j',11)==0) return "开始"
   if(gcs('j',11)==1) {
    if(player.points.gte("1e3000000")) {return "完成"}
   else {return "退出"}
   }
     },
     display() {
   if(gcs('j',11)==0) return "开始判定区间挑战！"
   if(gcs('j',11)==1) {
   if(player.points.gte("1e3000000")) {return "完成判定区间挑战！"} 
   else {
    if(inChallenge('ri',11)) return "RiC1中不能退出判定区间挑战！"
    else return "退出判定区间挑战！"}
   }
     },
     canClick() {return !inChallenge('ri',11)},
     onClick() {
   player.j.time=n(0)
   if (gcs('j',11)==0) {
   setClickableState('j',11,1)
   options.theme=themes[2]
   }
   else {
    setClickableState('j',11,0) 
    options.theme=player.j.theme
    if(player.points.gte("1e3000000")) {player.j.pdqja=player.j.pdqj00.min(player.j.pdqja)}
   }
   doReset('j',true)
   changeTheme()
     },
     style() { return { 'background-color': gcs(this.layer,this.id)==0?"#e786f0":player.points.gte("1e3000000")?"#ffbf00":"#8693f0"}},
    },
    21: {
   title() {return "-100"},
   display() {return "判定区间-100ms"},
   onClick() {player.j.pdqj=player.j.pdqj.sub(100).max(100)},
   canClick() {return true},
    },
    22: {
   title() {return "-10"},
   display() {return "判定区间-10ms"},
   onClick() {player.j.pdqj=player.j.pdqj.sub(10).max(100)},
   canClick() {return true},
    },
    23: {
   title() {return "-1"},
   display() {return "判定区间-1ms"},
   onClick() {player.j.pdqj=player.j.pdqj.sub(1).max(100)},
   canClick() {return true},
    },
    24: {
   title() {return "+1"},
   display() {return "判定区间+1ms"},
   onClick() {player.j.pdqj=player.j.pdqj.add(1).min(500)},
   canClick() {return true},
    },
    25: {
   title() {return "+10"},
   display() {return "判定区间+10ms"},
   onClick() {player.j.pdqj=player.j.pdqj.add(10).min(500)},
   canClick() {return true},
    },
    26: {
   title() {return "+100"},
   display() {return "判定区间+100ms"},
   onClick() {player.j.pdqj=player.j.pdqj.add(100).min(500)},
   canClick() {return true},
    },
   },
   upgrades: {
    11:{ 
    fullDisplay() {return "沉默-_-微笑<br>课题模式中的谱面上限可以超过16级（最高20级），可用的Rot点数数量×1.1<br>需求：通过490ms判定区间挑战"},
    unlocked() {return hasMilestone('j',1)},
    tooltip:"本层级升级名来源于各路音游大神，升级名字不分先后，若有侵犯将删除，有好的建议也可以提供给我",
    canAfford() {return player.j.pdqja.lte(490)},
  },
    12:{ 
    fullDisplay() {return "RinFall<br>课题能量不再重置，最佳判定区间增益旋律<br>需求：通过485ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',11)},
    canAfford() {return player.j.pdqja.lte(485)},
  },
    13:{ 
    fullDisplay() {return "EK鲁比<br>Rot升级树133的效果不会低于5×，解锁第17行Rot升级树<br>需求：通过480ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',12)},
    canAfford() {return player.j.pdqja.lte(480)},
  },
    14:{ 
    fullDisplay() {return "零-零_五-<br>最佳判定区间可以增益魔王曲获取量<br>需求：通过470ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',13)},
    canAfford() {return player.j.pdqja.lte(470)},
  },
    15:{ 
    fullDisplay() {return "xinのhun<br>最佳判定区间可以增益曲包获取量<br>需求：通过465ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',14)},
    canAfford() {return player.j.pdqja.lte(465)},
  },
    16:{ 
    fullDisplay() {return "SkisK刺球<br>课题力量对Cytus力量的增益^1.5<br>需求：通过460ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',15)},
    canAfford() {return player.j.pdqja.lte(460)},
  },
    17:{ 
    fullDisplay() {return "“一只新手Up”<br>解锁第四个Rotaeno挑战，解锁Rotaeno曲包<br>需求：通过455ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',16)},
    canAfford() {return player.j.pdqja.lte(455)},
  },
    21:{ 
    fullDisplay() {return "未影人2004<br>Milthm增益Notes获取量（判定区间挑战内削弱）<br>当前效果: ×"+format(this.effect())+"<br>需求：通过445ms判定区间挑战"},
    unlocked() {return hasMilestone('j',6)},
    canAfford() {return player.j.pdqja.lte(445)},
    effect() {let m=player.mi.points.max(10)
     let a=m.pow(m.log(10))
     if(a.log10().gte(10000)) a = n(10).pow(a.log10().sub(10000).pow(0.8).add(9999))//sc
     if(gcs('j',11)==1&&a.log10().gte(1000)) a = n(10).pow(a.log10().sub(1000).pow(0.75).add(999))//sc
     return a
    }
  },
    22:{ 
    fullDisplay() {return "DJGunBuster<br>第二个魔王曲升级效果变成原来的100次方<br>需求：通过440ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',21)},
    canAfford() {return player.j.pdqja.lte(440)},
  },
    23:{ 
    fullDisplay() {return "Maintain7716<br>谱面×1.02<br>需求：通过435ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',22)},
    canAfford() {return player.j.pdqja.lte(435)},
  },
    24:{ 
    fullDisplay() {return "アルストロメリア<br>前三个PTT升级的效果变成原来的25次方<br>需求：通过430ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',23)},
    canAfford() {return player.j.pdqja.lte(430)},
  },
    25:{ 
    fullDisplay() {return "空游呀<br>基于超过e3800000的Notes增益Cytus力量<br>当前效果: ×"+format(this.effect())+"<br>需求：通过425ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',24)},
    canAfford() {return player.j.pdqja.lte(425)},
    effect() {
     let m=player.points.max("e3800000").log(10).sub(3799999)
    if(hasUpgrade('j',27)) m=player.points.max(10).log(10)
     return m.pow(30)
    }
  },
    26:{ 
    fullDisplay() {return "水銀_metalslime<br>解锁一个曲包升级，基于判定线增益谱面获取量<br>当前效果: ×"+format(this.effect(),3)+"<br>需求：通过420ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',25)},
    canAfford() {return player.j.pdqja.lte(420)},
    effect() {
     a=player.j.points.max(1)
     a=a.log(10).div(40).add(1).pow(2)
     return a
    }
  },
    27:{ 
    fullDisplay() {return "“QqQe308”<br>解锁曲包专精，自动最大购买Rotaeno曲包，升级“空游呀”不再有下限e3800000<br>需求：通过406ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',26)},
    tooltip:"曲包专精代替了原计划的Milthm曲包",
    canAfford() {return player.j.pdqja.lte(406)},
  },
    31:{ 
    fullDisplay() {return "AUTOPLAY<br>自动购买曲包专精和Rot点数的可购买，解锁下一个层级<br>需求：通过400ms判定区间挑战"},
    unlocked() {return hasMilestone('j',7)},
    tooltip:"本行升级不是真正意义上的音游大神，但是我想你们懂得",
    canAfford() {return player.j.pdqja.lte(400)},
  },
    32:{ 
    fullDisplay() {return "Record<br>基于超过e4200000的Notes增益旋律<br>当前效果: ×"+format(this.effect())+"<br>需求：通过395ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',31)},
    canAfford() {return player.j.pdqja.lte(395)},
    effect() {
     let m=player.points.max("e4200000").log(10).sub(4199990).log(10)
     if(hasUpgrade('j',34)) m=m.pow(upgradeEffect('j',34))
     return m.sqrt()
    }
  },
    33:{ 
    fullDisplay() {return "Combo<br>基于判定线增益Dot获取量<br>当前效果: ×"+format(this.effect())+"<br>需求：通过390ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',32)},
    canAfford() {return player.j.pdqja.lte(390)},
    effect() {
     let m=player.j.points.max(1).pow(0.3)
     if(hasUpgrade('j',34)) m=m.pow(upgradeEffect('j',34))
     return m.sqrt()
    }
  },
    34:{ 
    fullDisplay() {return "Ottoplay<br>增强前两个升级的效果，Rizline升级14“Skyscape”效果对Dot也生效<br>当前效果: 前两个升级效果^"+format(this.effect())+"<br>需求：通过385ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',33)},
    canAfford() {return player.j.pdqja.lte(385)},
    effect() {
     let m=player.j.points.max(2).log(2).pow(0.3)
     return m
    }
  },
    35:{ 
    fullDisplay() {return "All Perfect<br>每秒获得0.001%的Dot获取量(受全局速率影响)<br>需求：通过380ms判定区间挑战&&1000 Dot"},
    unlocked() {return hasUpgrade('j',34)},
    canAfford() {return player.j.pdqja.lte(380)&&player.ri.points.gte(1000)},
  },
    36:{ 
    fullDisplay() {return "Pure Memory<br>基于Dot数量和超过e4.6e6的Notes数量增益Cytus力量<br>当前效果: ×"+format(this.effect())+"<br>需求：通过375ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',35)},
    canAfford() {return player.j.pdqja.lte(375)},
    effect() {
     let a=player.points.max("e4.6e6").log(10).sub(4.6e6).sqrt().div(10)
     let eff=player.ri.points.max(1).pow(a.add(100))
     if(eff.log10().gte(500)) eff = n(10).pow(eff.log10().sub(500).pow(0.8).add(500))//sc
     return eff
    }
  },
    37:{ 
    fullDisplay() {return "Million Master<br>解锁一个Rizline升级，基于填充Notes增益Notes获取量<br>当前效果: ×"+format(this.effect())+"<br>需求：通过370ms判定区间挑战"},
    unlocked() {return hasUpgrade('j',36)},
    canAfford() {return player.j.pdqja.lte(370)},
    effect() {
     let a=player.r.notes.max(1)
     eff=a.pow(0.001)
     if(eff.log10().gte(10000)) eff = n(10).pow(eff.log10().sub(10000).pow(0.8).add(10000))//sc
     return eff
    }
  },
   }
})//Judgment

//Row 5
addLayer("ri", {
   infoboxes: {
introBox: {
  title: "层级12--Rizline",
  body(){return "欢迎来到第12层，Rizline！本层级属于第6行，意味着会重置之前的进度！不用担心，你会很快获得比原来更多的进展，本层内，你还会解锁一些独特的新功能！<br>点线交错，让音乐链接世界！Rizline是鸽游（Phigros制作团队）制作的第二款音乐游戏！<br>资源名称由来：Rizline游戏内货币：Dot"},
        },
colBox: {
  title: "联动",
  body(){return "解锁联动后，你可以和其他音游联动，给两个层级不同的增益，其中曲库是累计购买的Rizline升级数量，并且受联动效果影响。更多联动效果可以在“Collaboration Effects”（联动效果）标签页查看，不要忘记购买Rizline升级哦！"},
        },
},
    name: "Rizline",
    symbol: "Ri",
    position: 0,
    startData() { return {
    unlocked() { return hasUpgrade('j',31)||hasAchievement('A',111)},
	  	points: n(0),
	  	total: n(0),
	  	songs: n(0),//曲库，每个升级+1，联动效果影响
	  	songsGenerated: n(0),//生成的歌曲
	  	songsMax: n(1),//曲库生成上限
	  	theme:"default",
    }},
    color: "#eeffd1",
    requires: n(1e42), 
    resource: "Dot",
    baseResource: "旋律", 
    baseAmount() {return player.r.points}, 
    type: "normal", 
    exponent: 1, 
    passiveGeneration() {
     let a=n(0)
     if(hasUpgrade('j',35)) a=n(0.00001)
     return a
},
    gainMult() { //rigainmult
     mult = n(1)
     if(hasUpgrade('j',33)) mult=mult.mul(upgradeEffect('j',33))
     if(hasUpgrade('j',34)&&hasUpgrade('ri',14)) mult=mult.mul(upgradeEffect('ri',14))
     return mult
    },
    gainExp() { //rigainexp
   exp= n(0.2)
   exp=exp.add(tmp.j.pdqja9)
   if(challengeCompletions('ri',11)) exp=exp.mul(challengeEffect('ri',11))
    return exp
    },
    directMult() { //ridirectmult
     mult = n(1)
     mult=mult.mul(tmp.ri.riz1)
     if(hasUpgrade('ri',24)) mult=mult.mul(2)
     if(hasMilestone('j',8)) mult=mult.mul(4)
     mult=mult.mul(tmp.e.effect[1])
     return mult
    },
    branches(){return ['r','mi','j']},
    row: 5, 
    layerShown(){ return hasUpgrade('j',31)||hasAchievement('A',111)},
    riz1() {
     let a=n(1)
     let b=player.ri.songs
     if(gba('ri',11).gte(1)) a=a.mul(b.pow(gba('ri',11).pow(0.3).div(3)))
     return a.max(1)
    },
    riz2() {
     let a=n(1)
     let b=player.ri.songs
     if(gba('ri',12).gte(1)) a=a.add(b.div(400))
     return a.max(1)
    },
    phi1() {
     let a=n(16.3)
     let b=player.ri.songs
     if(gba('ri',11).gte(1)) a=a.add(b.mul(gba('ri',11)).div(20))
     if(gba('ri',11).gte(5)) a=n(1.79e308)
     return a.max(16.3)
    },
    phi2() {
     let a=n(1)
     let b=player.ri.songs
     if(gba('ri',11).gte(2)) a=a.div(b.mul(gba('ri',11)).div(50).add(1))
     return a.min(1)
    },
    phi3() {
     let a=n(10)
     let b=player.ri.songs
     if(gba('ri',11).gte(4)) a=a.pow(b.mul(gba('ri',11).pow(2)).div(5))
     return a.max(1)
    },
    la1() {
     let a=n(1)
     let b=player.ri.songs
     if(gba('ri',12).gte(1)) a=b.pow(0.8).mul(gba('ri',12).pow(0.5)).div(200).add(1)
     return a.max(1)
    },
    la2() {
     let a=n(2)
     let b=player.ri.songs
     if(gba('ri',12).gte(3)) a=a.pow(b.mul(gba('ri',12)))
     if(a.log10().gte(40)) a = n(10).pow(a.log10().sub(40).pow(0.5).add(40))//sc
     return a.max(1)
    },
    mil1() {
     let a=n(3)
     let b=player.ri.songs
     if(gba('ri',13).gte(1)) a=a.pow(b.mul(gba('ri',13))).max(1).log(10)
     return a.max(1)
    },
    mil2() {
     let a=n(0)
     let b=player.ri.songs
     if(gba('ri',13).gte(3)) a=b.pow(0.5).mul(gba('ri',13).pow(0.5)).div(200)
     return a.max(0)
    },
    cy1() {
     let a=n(1)
     let b=player.ri.songs
     if(gba('ri',14).gte(1)) a=b.pow(0.3).mul(gba('ri',14).pow(0.6)).sub(1).div(100).add(1)
     return a.max(1)
    },
    arc1() {
     let a=n(13)
     let b=player.ri.songs
     if(gba('ri',15).gte(1)) a=a.add(b.mul(gba('ri',15)).div(100))
     if(gba('ri',15).gte(5)) a=n(1.79e308)
     return a.max(13)
    },
    ric1() {
     let a=challengeCompletions('ri',11)
     if(a==0) return n(300)
     if(a==1) return n(200)
     if(a==2) return n(120)
     if(a==3) return n(40)
     else return n(0)
    },
    hotkeys: [
     {key: "i", description: "I: Reset for Rizline", onPress(){if(canReset(this.layer)) doReset(this.layer)}},
    ],
    onReset() {
    // if(gcs('j',11)) layers.j.clickables[11].onClick()
    },
    doReset(resettingLayer) {
     if (layers[resettingLayer].row > layers[this.layer].row) {
      let kept = ["unlocked", "auto"]
      if (resettingLayer == "t") {
     kept.push("milestones","upgrades","points")
      }
      layerDataReset(this.layer, kept)
     }
    },
    songs() {
     let songs=n(player.ri.upgrades.length).add(buyableEffect('ri',11)).add(buyableEffect('ri',12)).add(buyableEffect('ri',13)).add(buyableEffect('ri',14)).add(buyableEffect('ri',15))
     songs=songs.add(player.ri.songsGenerated)
     if(hasUpgrade('e',23)) songs=songs.mul(upgradeEffect('e',23))
     return songs
    },
    songsMax() {
     let max=buyableEffect('ri',22)
     return max
    },
    update(diff) {
     player.ri.songs=tmp.ri.songs
     if(player.ri.songsGenerated.lt(player.ri.songsMax)) player.ri.songsGenerated=player.ri.songsGenerated.add(buyableEffect('ri',21).mul(diff).div(player.devSpeed.max(1))).min(player.ri.songsMax)
     player.ri.songsMax=tmp.ri.songsMax
    },
    tabFormat: {
    "Milestones": {
        content: [ ["infobox","introBox"],
    "main-display",
    "prestige-button","blank",
    "resource-display","blank",
    ["display-text", function() {if(player.devSpeed.gt(1)&&tmp.ri.passiveGeneration.gt(0)) return '算上全局速率，你正在获得 ' + format(n(tmp.ri.resetGain).mul(tmp.ri.passiveGeneration).mul(player.devSpeed))+' Dot每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
    "milestones",
     ],},
    "Upgrades": {
        content: [// ["infobox","upgBox"],
        "main-display",
        "prestige-button","blank",
        "resource-display","blank",
        ["display-text", function() {if(player.devSpeed.gt(1)&&tmp.ri.passiveGeneration.gt(0)) return '算上全局速率，你正在获得 ' + format(n(tmp.ri.resetGain).mul(tmp.ri.passiveGeneration).mul(player.devSpeed))+' Dot每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
    "upgrades",
],
unlocked(){return true}
    },
    "Collaborate": {
     content: [ ["infobox","colBox"],
     "main-display",
     "prestige-button","blank",
     "resource-display","blank",
     ["display-text", function() {if(player.devSpeed.gt(1)&&tmp.ri.passiveGeneration.gt(0)) return '算上全局速率，你正在获得 ' + format(n(tmp.ri.resetGain).mul(tmp.ri.passiveGeneration).mul(player.devSpeed))+' Dot每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
     ["display-text",
     function() {return '你的曲库中有 ' + format(player.ri.songs) + ' 首歌曲！'},
     {"color": "#ffffff", "font-size": "24px", "font-family": "Comic Sans MS"}],//曲库
     ["display-text",
     function() {if(hasUpgrade('ri',47)) return '你生成了 ' + format(player.ri.songsGenerated) + ' 首歌曲，上限是 '+format(player.ri.songsMax)+' ！'},
     {"color": "#ffffff", "font-size": "24px", "font-family": "Comic Sans MS"}],//曲库生成
     "buyables",
],
unlocked(){return hasUpgrade('ri',17)}
    },
    "Collaboration Effects": {
     content: [ ["infobox","ceBox"],
     "main-display",
     "prestige-button","blank",
     "resource-display","blank",
     ["display-text", function() {if(player.devSpeed.gt(1)&&tmp.ri.passiveGeneration.gt(0)) return '算上全局速率，你正在获得 ' + format(n(tmp.ri.resetGain).mul(tmp.ri.passiveGeneration).mul(player.devSpeed))+' Dot每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
     ["display-text",
     function() { return 'Rizline联动效果:'},
     {"color": "#ffffff", "font-size": "24px", "font-family": "Comic Sans MS"}],//riz
     ["display-text",
     function() {if(gba('ri',11).gte(1)) return '1.Dot获取量直接增益×'+format(tmp.ri.riz1)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//riz1
     ["display-text",
     function() {if(gba('ri',12).gte(1)) return '2.全局速率^'+format(tmp.ri.riz2,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//riz2
     "blank",["display-text",
     function() {if(gba('ri',11).gte(1)) return 'Phigros联动效果:'},
     {"color": "#ffffff", "font-size": "24px", "font-family": "Comic Sans MS"}],//phi
     ["display-text",
     function() {if(gba('ri',11).gte(1)) return '1.延后RKS上限至'+format(tmp.ri.phi1)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//phi1
     ["display-text",
     function() {if(gba('ri',11).gte(2)) return '2.弱化判定区间挑战的第3个减益(^'+format(tmp.ri.phi2,3)+')'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//phi2
     ["display-text",
     function() {if(gba('ri',11).gte(4)) return '3.Phidata额外乘数×'+format(tmp.ri.phi3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//phi3
     "blank",["display-text",
     function() {if(gba('ri',12).gte(1)) return 'Lanota联动效果:'},
     {"color": "#ffffff", "font-size": "24px", "font-family": "Comic Sans MS"}],//la
     ["display-text",
     function() {if(gba('ri',12).gte(1)) return '1.诗篇获取量×'+format(tmp.ri.la1,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//la1
     ["display-text",
     function() {if(gba('ri',12).gte(2)) return '2.诗篇升级“小潜力股”底数变为'+format(tmp.ri.la2)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//la2
     "blank",["display-text",
     function() {if(gba('ri',13).gte(1)) return 'Milthm联动效果:'},
     {"color": "#ffffff", "font-size": "24px", "font-family": "Comic Sans MS"}],//mil
     ["display-text",
     function() {if(gba('ri',13).gte(1)) return '1.Milthm维度×'+format(tmp.ri.mil1)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//mil1
     ["display-text",
     function() {if(gba('ri',13).gte(3)) return '2.Milthm维度购买倍率+'+format(tmp.ri.mil2,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//mil2
     "blank",["display-text",
     function() {if(gba('ri',14).gte(1)) return 'Cytus联动效果:'},
     {"color": "#ffffff", "font-size": "24px", "font-family": "Comic Sans MS"}],//cy
     ["display-text",
     function() {if(gba('ri',14).gte(1)) return '1.Cytus力量^'+format(tmp.ri.cy1,3)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//cy1
     "blank",["display-text",
     function() {if(gba('ri',15).gte(1)) return 'Arcaea联动效果:'},
     {"color": "#ffffff", "font-size": "24px", "font-family": "Comic Sans MS"}],//arc
     ["display-text",
     function() {if(gba('ri',15).gte(1)) return '1.延后PTT上限至'+format(tmp.ri.arc1)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],//arc1
    ],
unlocked(){return hasUpgrade('ri',17)}
    },
    "Challenges": {
     content: [ //["infobox","chalBox"],
     "main-display",
     "prestige-button","blank",
     "resource-display","blank",
     ["display-text", function() {if(player.devSpeed.gt(1)&&tmp.ri.passiveGeneration.gt(0)) return '算上全局速率，你正在获得 ' + format(n(tmp.ri.resetGain).mul(tmp.ri.passiveGeneration).mul(player.devSpeed))+' Dot每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
    "challenges",
],
  unlocked(){return hasUpgrade('ri',27)}
},
},
    milestones: {
    0: {
     requirementDescription: "累计 1 Dot",
     effectDescription: "保留所有Rotaeno里程碑和Rotaeno挑战完成次数",
     done() { return player.ri.total.gte(1) }
    },
    1: {
     requirementDescription: "累计 2 Dot",
     effectDescription: "保留所有Milthm和判定里程碑，解锁第三行判定升级",
     tooltip:"里程碑数值是斐波那契数列哦",
     done() { return player.ri.total.gte(2) }
    },
    2: {
     requirementDescription: "累计 3 Dot",
     effectDescription: "保留Rotaeno、Milthm和判定升级",
     done() { return player.ri.total.gte(3) }
    },
    3: {
     requirementDescription: "累计 5 Dot",
     effectDescription: "保留Rot升级树(它们不再消耗Rot点数)和Milthm维度",
     done() { return player.ri.total.gte(5) }
    },
    4: {
     requirementDescription: "累计 8 Dot",
     effectDescription: "自动获得判定线，它们什么也不重置（判定区间挑战内除外）",
     done() { return player.ri.total.gte(8) }
    },
    5: {
     requirementDescription: "累计 13 Dot",
     effectDescription: "自动填充Notes，保留最佳判定区间",
     done() { return player.ri.total.gte(13) }
    },
    6: {
     requirementDescription: "累计 21 Dot",
     effectDescription: "获得Rot点数不再消耗资源，自动购买最大Rot点数获得可购买",
     done() { return player.ri.total.gte(21) }
    },
    7: {
     requirementDescription: "累计 34 Dot",
     effectDescription: "保留Milthm数量",
     done() { return player.ri.total.gte(34) }
    },
    8: {
     requirementDescription: "累计 55 Dot",
     effectDescription: "保留Rot点数和Rot点数获得可购买",
     done() { return player.ri.total.gte(55) }
    },
    9: {
     requirementDescription: "累计 89 Dot",
     effectDescription: "Notes获取量×1e1000",
     done() { return player.ri.total.gte(89) }
    },
    10: {
     requirementDescription: "累计 144 Dot",
     effectDescription: "你可以购买最大判定线",
     done() { return player.ri.total.gte(144) }
    },
    11: {
     requirementDescription: "累计 6765 Dot",
     effectDescription: "减弱判定区间挑战的减益效果2",
     tooltip:"从1,1,2,3,5…算起，这是斐波那契数列的第20项！<br>效果^0.72",
     done() { return player.ri.total.gte(6765) }
    },
    },
    upgrades: {
    11:{ title: "Pastel Lines",
   description: "弱化判定区间挑战的第一个减益（指数×1.01，最大为1）",
    cost:n(1),
    tooltip:"本层级升级名来源于Rizline内Disc 1的曲目名称(按照游戏内解锁顺序排序)",
     },
    12:{ title: "Power Attack",
   description: "增强Rot升级树161的效果（旋律获取变快了）",
    cost:n(2),
    unlocked() {return hasUpgrade('ri',11)},
     },
    13:{ title: "Gleam",
   description: "填充Notes获取量^1.1",
    cost:n(10),
    unlocked() {return hasUpgrade('ri',12)},
     },
    14:{ title: "Skyscape",
   description() {
    let a="旋律获取量"
    if(hasUpgrade('j',34)) a="旋律和Dot获取量"
    return '基于Dot数量增益'+a
   },
    cost:n(30),
    effect() {
    let eff = player.ri.points.max(1).pow(0.3)
    if(eff.log10().gte(3)) eff = n(10).pow(eff.log10().sub(2).pow(0.5).add(2))//sc
    return eff
   },
   effectDisplay() { return format(this.effect())+"×" },
    unlocked() {return hasUpgrade('ri',13)},
     },
    15:{ title: "On And On!!",
   description: "基于Dot指数提升填充Notes",
    cost:n(100),
    effect() {
    let eff = player.ri.points.max(10).log(10).pow(0.3)
    if(eff.gte(2)) eff = eff.sub(2).div(2).add(2)//sc
    return eff
   },
   effectDisplay() { return "^"+format(this.effect(),3) },
    unlocked() {return hasUpgrade('ri',14)},
     },
    16:{ title: "Polygons",
   description: "解锁第6和第7个判定区间效果",
    cost:n(120),
    unlocked() {return hasUpgrade('ri',15)},
     },
    17:{ title: "Abgrund",
   description: "解锁Ri层级的新功能：联动！你可以和其他音游联动，给两个层级不同的增益！",
    cost:n(1e4),
    unlocked() {return hasUpgrade('j',37)},
     },
    21:{ title: "Journey To The Rainbows",
   description: "最佳判定区间可以指数提升填充Notes",
    cost:n(1e5),
    unlocked() {return hasUpgrade('ri',17)},
     },
    22:{ title: "Midnight Flux",
   description: "超过1e60的旋律增益课题力量获取量",
    cost:n(5e6),
    effect() {
    let eff = player.r.points.max(1e60).div(1e60).pow(5)
    if(eff.log10().gte(10)) eff = n(10).pow(eff.log10().sub(10).pow(0.8).add(10))//sc
    return eff
   },
   effectDisplay() { return format(this.effect())+"×" },
    unlocked() {return hasUpgrade('ri',21)},
     },
    23:{ title: "NO ONE YES MAN",
   description: "在350ms及更严的判定区间中，增强判定区间第4个效果",
    cost:n(5e7),
    unlocked() {return hasUpgrade('ri',22)},
     },
    24:{ title: "Clock Paradox",
   description: "解锁第二个联动对象，Lanota，Dot×2",
    cost:n(1e9),
    unlocked() {return hasUpgrade('ri',23)},
     },
    25:{ title: "F℟IEND",
   description: "基于曲库中歌曲数量增益曲包获取量(25后生效)",
    cost:n(1e11),
    effect() {
    eff = player.ri.songs.max(1).pow(0.5).log(5)
    return eff.max(1)
   },
   effectDisplay() { return format(this.effect(),3)+"×" },
    unlocked() {return hasUpgrade('ri',24)},
     },
    26:{ title: "Shattered",
   description: "当你在325ms及更严的判定区间挑战中时，课题力量乘以Dot数量",
    cost:n(5e11),
    effect() {
    let eff = n(1)
    if(gcs('j',11)==1&&player.j.pdqj0.lte(325)) eff=player.ri.points
    return eff.max(1)
   },
   effectDisplay() { return format(this.effect())+"×" },
    unlocked() {return hasUpgrade('ri',25)},
     },
    27:{ title: "Swing Sweet Twee Dance feat. ななきなな",
   description: "解锁Rizline挑战，基于此升级标题长度增益课题力量",
    cost:n(5e12),
    effect() { return n(44)},
   effectDisplay() { return format(this.effect())+"×" },
    unlocked() {return hasUpgrade('ri',26)},
     },
    31:{ title: "V!rtuaresort",
   description: "解锁第三个联动对象，Milthm",
    cost:n(2e14),
    unlocked() {return hasUpgrade('ri',27)},
     },
    32:{ title: "Dice 20",
   description: "减弱用Milthm购买Rot点数的价格",
    cost:n(4e14),
    unlocked() {return hasUpgrade('ri',31)},
     },
    33:{ title: "macro.wav",
   description: "RiC1的奖励效果对填充Notes的软上限也生效",
    cost:n(1.5e15),
    unlocked() {return hasUpgrade('ri',32)},
     },
    34:{ title: "The Next Arcady",
   description: "减弱用Notes购买Rot点数的价格",
    cost:n(4e15),
    unlocked() {return hasUpgrade('ri',33)},
     },
    35:{ title: "Sakura Fubuki",
   description: "计数频率效果以极低效率增益全局速率",
    cost:n(5e15),
   effect() {
    let a=buyableEffect('mi',11).max(1)
    return a.log(2).pow(0.3)
   },
   effectDisplay() { return format(this.effect())+"×" },
    unlocked() {return hasUpgrade('ri',34)},
     },
    36:{ title: "Tempest",
   description: "减弱用旋律购买Rot点数的价格",
    cost:n(2e16),
    unlocked() {return hasUpgrade('ri',35)},
     },
    37:{
    title: "Authentic (Game ver.)",
    description: "解锁下一个层级，经验",
    cost:n(1.5e17),
    unlocked() {return hasUpgrade('ri',36)},
     },
    41:{
    title: "Milk",
    description: "经验升级21不再有减益效果",
    cost:n(5e30),
    unlocked() {return hasMilestone('e',10)},
     },
    42:{
    title: "ILLEGAL LEGACY",
    description: "在经验分配页面解锁一个可购买，用来减弱经验分配升级22的减益",
    cost:n(1e31),
    unlocked() {return hasUpgrade('ri',41)},
     },
    43:{
    title: "竹",
    description: "在经验分配页面解锁一个可购买，用来减弱经验分配升级23的减益",
    cost:n(1.2e31),
    unlocked() {return hasUpgrade('ri',42)},
     },
    44:{
    title: "CANDYLAND",
    description: "经验升级24不再有减益效果",
    cost:n(4e31),
    unlocked() {return hasUpgrade('ri',43)},
     },
    45:{
    title: "Arcade ViruZ",
    description: "经验升级25不再有减益效果",
    cost:n(1e34),
    unlocked() {return hasUpgrade('ri',44)},
     },
    46:{
    title: "Vicious Mockery",
    description: "降低经验分配可购买11的价格增速(×2→×1.5)",
    cost:n(3.6e36),
    unlocked() {return n(challengeCompletions('ri',12)).gte(5)},
     },
    47:{
    title: "BRAVE: ROAD",
    description: "解锁曲库生成器和曲库延拓器(在“联动”界面)<br>需要:通过218ms判定区间挑战",
    cost:n(1e38),
    canAfford() {return player.j.pdqja.lte(218)},
    unlocked() {return hasUpgrade('ri',46)},
     },
    },
    buyables:{
 11: {
				title: "Phigros联动",
				cost(x=player[this.layer].buyables[this.id]) {
				 let cost=n(1e5).mul(n(10).pow(x))
				 if(x==0) cost=n(5e4)
				 if(x==4) cost=n(5e9)
				 if(x==5) cost=n(2e308)
    return cost
      },
				display() { // Everything else displayed in the buyable button after the title
    let data = tmp[this.layer].buyables[this.id]
    return "需要 " + format(data.cost) + " Dot"+"<br>联动次数: " + format(player[this.layer].buyables[this.id]) + "<br>你从Phigros获得了" +format(this.effect()) +"首歌曲！"
      },
   unlocked() { return hasUpgrade('ri',17)}, 
   effect(x=player[this.layer].buyables[this.id]) {
    let eff
    if(x==0) eff=0
    if(x==1) eff=1
    if(x==2) eff=3
    if(x==3) eff=5
    if(x==4) eff=8
    if(x==5) eff=10
    return eff
   },
   canAfford() {
   return player.ri.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
      },
     purchaseLimit() {return n(5)},
     style: {'height':'150px'},
			},
 12: {
				title: "Lanota联动",
				cost(x=player[this.layer].buyables[this.id]) {
				 let cost=n(2.5e10).mul(n(5).pow(x))
				 if(x==5) cost=n(2e308)
    return cost
      },
				display() { // Everything else displayed in the buyable button after the title
    let data = tmp[this.layer].buyables[this.id]
    return "需要 " + format(data.cost) + " Dot"+"<br>联动次数: " + format(player[this.layer].buyables[this.id]) + "<br>你从Lanota获得了" +format(this.effect()) +"首歌曲！"
      },
   unlocked() { return hasUpgrade('ri',24)}, 
   effect(x=player[this.layer].buyables[this.id]) {
    let eff
    if(x==0) eff=0
    if(x==1) eff=1
    if(x==2) eff=4
    if(x==3) eff=7
    if(x==4) eff=10
    if(x==5) eff=14
    return eff
   },
   canAfford() {
   return player.ri.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
      },
     purchaseLimit() {return n(5)},
     style: {'height':'150px'},
			},
 13: {
				title: "Milthm联动",
				cost(x=player[this.layer].buyables[this.id]) {
				 let cost=n(1.5e14).mul(n(5).pow(x))
				 if(x==5) cost=n(2e308)
    return cost
      },
				display() { // Everything else displayed in the buyable button after the title
    let data = tmp[this.layer].buyables[this.id]
    return "需要 " + format(data.cost) + " Dot"+"<br>联动次数: " + format(player[this.layer].buyables[this.id]) + "<br>你从Milthm获得了" +format(this.effect()) +"首歌曲！"
      },
   unlocked() { return hasUpgrade('ri',31)}, 
   tooltip:"本可购买对曲库的增益将在以后生效",
   effect(x=player[this.layer].buyables[this.id]) {
    let eff=n(0)
    if(hasMilestone('e',2)) eff=eff.add(milestoneEffect('e',2))
    return eff
   },
   canAfford() {
   return player.ri.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
      },
     purchaseLimit() {return n(5)},
     style: {'height':'150px'},
			},
 14: {
				title: "Cytus联动",
				cost(x=player[this.layer].buyables[this.id]) {
				 let cost=n(5e17).mul(n(5).pow(x))
				 if(x==5) cost=n(2e308)
    return cost
      },
				display() { // Everything else displayed in the buyable button after the title
    let data = tmp[this.layer].buyables[this.id]
    return "需要 " + format(data.cost) + " Dot"+"<br>联动次数: " + format(player[this.layer].buyables[this.id]) + "<br>你从Cytus获得了" +format(this.effect()) +"首歌曲！"
      },
   unlocked() { return hasUpgrade('e',12)}, 
   effect(x=player[this.layer].buyables[this.id]) {
    let eff
    if(x==0) eff=0
    if(x==1) eff=3
    if(x==2) eff=6
    if(x==3) eff=9
    if(x==4) eff=12
    if(x==5) eff=15
    return eff
   },
   canAfford() {
   return player.ri.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
      },
     purchaseLimit() {return n(5)},
     style: {'height':'150px'},
			},
 15: {
				title: "Arcaea联动",
				cost(x=player[this.layer].buyables[this.id]) {
				 let cost=n(1e21).mul(n(10).pow(x))
				 if(x==5) cost=n(2e308)
    return cost
      },
				display() { // Everything else displayed in the buyable button after the title
    let data = tmp[this.layer].buyables[this.id]
    return "需要 " + format(data.cost) + " Dot"+"<br>联动次数: " + format(player[this.layer].buyables[this.id]) + "<br>你从Arcaea获得了" +format(this.effect()) +"首歌曲！"
      },
   unlocked() { return hasUpgrade('e',15)}, 
   effect(x=player[this.layer].buyables[this.id]) {
    let eff
    if(x==0) eff=0
    if(x==1) eff=2
    if(x==2) eff=3
    if(x==3) eff=4
    if(x==4) eff=5
    if(x==5) eff=6
    return eff
   },
   canAfford() {
   return player.ri.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
      },
     purchaseLimit() {return n(5)},
     style: {'height':'150px'},
			},
 21: {
				title: "曲库生成器",
				cost(x=player[this.layer].buyables[this.id]) {
				 if(x.gte(20)) x=x.sub(19).pow(x.sub(18).pow(0.5)).add(19)
				 let cost=n(1e38).mul(n(2).pow(x))
				 if(x==100) cost=n(2e308)
    return cost
      },
				display() { // Everything else displayed in the buyable button after the title
    let data = tmp[this.layer].buyables[this.id]
    return "需要 " + format(data.cost) + " Dot"+"<br>购买次数: " + format(player[this.layer].buyables[this.id]) + "<br>曲库生成器每秒生成" +format(this.effect()) +"首歌曲！"
      },
   unlocked() { return hasUpgrade('ri',47)}, 
   effect(x=player[this.layer].buyables[this.id]) {
    let eff=x.pow(1.25).mul(0.01)
    return eff
   },
   canAfford() {
   return player.ri.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
      },
     purchaseLimit() {return n(100)},
     style: {'height':'150px'},
			},
 22: {
				title: "曲库延拓器",
				cost(x=player[this.layer].buyables[this.id]) {
				 if(x.gte(20)) x=x.sub(19).pow(x.sub(18)).add(19)
				 if(x.gte(5)) x=x.div(5).pow(3).mul(5)
				 if(x.gte(40)) x=x.sub(39).pow(2).add(39)
				 let cost=n("1e11111111").pow(x.add(1).pow(0.1).log(10).div(10).add(1))
				 if(x==100) cost=n(2e308)
    return cost
      },
				display() { // Everything else displayed in the buyable button after the title
    let data = tmp[this.layer].buyables[this.id]
    return "需要 " + format(data.cost) + " Notes"+"<br>购买次数: " + format(player[this.layer].buyables[this.id]) + "<br>曲库生成上限延迟至" +format(this.effect()) +"首歌曲！"
      },
   unlocked() { return hasUpgrade('ri',47)}, 
   effect(x=player[this.layer].buyables[this.id]) {
    let eff=x.add(1)
    if(hasMilestone('e',12)) eff=eff.mul(milestoneEffect('e',12))
    return eff
   },
   canAfford() {
   return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
    buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
      },
     purchaseLimit() {return n(100)},
     style: {'height':'150px'},
			},
    },
    challenges: {
     11: {
     name: "RiC1",
     challengeDescription(){
   return "你被困在"+format(tmp.ri.ric1)+"ms判定区间挑战中，旋律获取量^0.5<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"},
   req() {let a=challengeCompletions('ri',11)
    if(a==0) return n(5e40)
    if(a==1) return n(1e39)
    if(a==2) return n(5e37)
    if(a==3) return n(2e36)
    if(a==4) return n(6e36)
    else return n(2e308)
   },
     goalDescription(){return format(this.req())+" 旋律"},
     rewardDescription(){
      let rew="Dot获取量^"+format(challengeEffect(this.layer,this.id),3)
      if(hasUpgrade('ri',33)) rew=rew+"，填充Notes软上限效果^"+format(n(1).div(challengeEffect(this.layer,this.id).pow(2)),3)
      return rew
     },
     rewardEffect() {
      let eff=n(challengeCompletions(this.layer,this.id)).add(1).pow(0.1)
       return eff
     },
     onEnter() {
      player.ri.theme=options.theme
      player.j.pdqj0=tmp.ri.ric1
      player.j.pdqj00=tmp.ri.ric1
      layers.j.clickables[11].onClick()
     },
     onExit() {
      options.theme=player.ri.theme
      changeTheme()
     },
     unlocked(){return hasUpgrade('ri',27)},
     completionLimit(){
   return n(5)},
     canComplete: function() {
   return player.r.points.gte(this.req())},
     },
     12: {
     name: "RiC2",
     challengeDescription(){
      let a=""
      if(n(0.1).pow(clickableEffect('e',15)).gte(0.4)) a="(达到硬上限)"
   return "Notes获取指数^"+format(n(0.1).pow(clickableEffect('e',15)).min(0.4),4)+a+"<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"},
   req() {let a=challengeCompletions('ri',12)
    if(a==0) return n(1e100)
    if(a==1) return n(1e150)
    if(a==2) return n(1e180)
    if(a==3) return n(1e240)
    if(a==4) return n("1e530")
    else return n(2e308)
   },
     goalDescription(){return format(this.req())+" Notes"},
     rewardDescription(){
      return "经验获取量×"+format(this.rewardEffect(),3)
     },
     rewardEffect() {
      let eff=n(challengeCompletions('ri',12)).add(1).pow(0.1)
      return eff
     },
     unlocked(){return hasMilestone('e',8)},
     completionLimit(){
   return n(5)},
     canComplete: function() {
   return player.points.gte(this.req())},
     },
    },
})//Rizline
addLayer("e", {
    infoboxes: {
introBox: {
  title: "层级13--经验",
  body(){return "欢迎来到第13层，经验！本层级将解锁一系列有关音游经验的相关内容，同时会保留之前的进度！<br>经验获取基于“实力值”，即魔王曲×谱面×判定线×PTT×RKS的值"},
        },
asBox: {
  title: "经验分配",
  body(){return "分配经验可以让经验增益更多效果，但是会消耗你的经验！长按这些可点击来分配经验<br>解锁分配升级后，可以购买升级解锁更多的分配可点击，但是它们有利也有弊，所以可以随时返还，请找到最好的分配方式最大化收益吧！"},
        },
},
    name: "experience",
    symbol: "XP",
    position: 0,
    startData() { return {
     unlocked() { return hasUpgrade('ri',37)},
		points: n(0),
		bestOnce: n(0),//一次重置获得的最佳经验数量
		assigned: [n(0),n(0),n(0),n(0),n(0),n(0),n(0)],
    }},
     color: "#ff7700",
    requires: n(5e11), 
    resource: "经验",
    baseResource: "实力值", 
    baseAmount() {return tmp.e.baseCal}, 
    type: "normal", 
    branches(){return ['r','mi','j']},
    exponent:0.9,
    passiveGeneration() {
     let pass=n(0)
     if(hasMilestone('e',6)) pass=n(3e-7)
     return pass
    },
    effect() {
     let a = player.e.points.add(1).log(2).max(0)
     let b = player.e.points.pow(0.5).max(1)
     if(hasUpgrade('e',16)) a=player.e.points.pow(0.4)
     if(hasMilestone('e',4)) {a=a.pow(1.1);b=b.pow(1.1)}
     if(a.gte(15)) a=a.sub(15).div(10).add(15)
     if(hasUpgrade('e',25)&&a.gte(15)&&!hasUpgrade('ri',45)) a=a.sub(14).pow(0.5).add(14)
     if(b.gte(30)) b=b.sub(30).div(10).add(30)
     if(!hasUpgrade('e',14)) b=n(1)
     let eff=[a,b]
     return eff
    },
    effectDescription() {
     let a="使实际生效判定区间+<h2 style='color:#ff7700; text-shadow: 0 0 10px #c2b280'>" + format(tmp.e.effect[0]) + "</h2>ms"
     let b="，使Dot直接获取量×<h2 style='color:#ff7700; text-shadow: 0 0 10px #c2b280'>" + format(tmp.e.effect[1]) + "</h2>"
     if(!hasUpgrade('e',14)) b=""
     return a+b
    },
    baseCal() {
     let base = player.m.points.mul(player.ch.points.mul(player.j.points.mul(player.a.ptt.mul(player.p.rks))))
     if(clickableEffect('e',12).gt(0)&&player.j.pdqja.lt(250)) base=base.mul(n(n(250).sub(player.j.pdqja)).max(1).pow(clickableEffect('e',12)))
     return base
    },
    getResetGain() {
     let base=tmp.e.baseCal.div(5e11).pow(layers.e.exponent)
     base=base.mul(tmp.e.gainMult.pow(tmp.e.gainExp))
     if(!hasUpgrade('e',11)) base=base.floor()
     return base
    },
    getNextAt() {
     let base=tmp.e.getResetGain.floor().div(tmp.e.gainMult.pow(tmp.e.gainExp)).add(1).root(layers.e.exponent).mul(5e11)
     return base
    },
    gainMult() { //egainmult
     mult = n(1)
     if(hasUpgrade('e',21)) mult=mult.div(upgradeEffect('e',21))
     if(hasChallenge('ri',12)) mult=mult.mul(challengeEffect('ri',12))
     return mult
    },
    gainExp() { //egainexp
   exp = n(1)
    return exp
    },
    directMult() { //edirectmult
     mult = n(1)
     return mult
    },
    row: 5, 
    expAssign() { //自动分配经验数量
     let exp=tmp.e.getResetGain.mul(tmp.e.passiveGeneration)
     if(hasUpgrade('e',26)) exp=exp.mul(upgradeEffect('e',26))
     return exp
    },
    update(diff) {
     let exp=tmp.e.expAssign.mul(diff)
     if(hasMilestone('e',7)) player.e.bestOnce=tmp.e.getResetGain.max(player.e.bestOnce)
     if(hasMilestone('e',8)) {
      for(i=11;i<=17;i++) {
      if(tmp.e.clickables[i].unlocked&&player.e.assigned[i-11].lt(3e6)) player.e.assigned[i-11]=player.e.assigned[i-11].add(exp)
      }
     }
     player.e.points=player.e.points.min(2.5e5)
     player.ri.points=player.ri.points.min(2.5e46)
     player.ri.total=player.ri.total.min(2.5e46)
      for(i=0;i<=6;i++) {
      if(player.e.assigned[i].gte(3e6)) player.e.assigned[i]=n(3e6)
      }
    },
    hotkeys: [
     {key: "e", description: "E: Reset for Experiences", onPress(){if(canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return hasUpgrade('ri',37)},
    tabFormat: {
    "Milestones": {
        content: [ ["infobox","introBox"],
    "main-display","resource-display",
    ["display-text",function() {if(tmp.e.passiveGeneration.gt(0)&&player.devSpeed.gt(1)) return '算上全局速率，你正在获得 ' + format(n(tmp.e.getResetGain).mul(tmp.e.passiveGeneration).mul(player.devSpeed))+' 经验每秒'}],
    ["display-text",function() {if(hasUpgrade('e',11)) return "确切来说，重置后将获得"+format(tmp.e.getResetGain,10)+"经验！"}],
    ["display-text",function() {if(hasUpgrade('e',11)) return "你最佳一次获得了"+format(player.e.bestOnce,10)+"经验！"}],
    "prestige-button","blank",
    "milestones",
     ],},
    "Upgrades": {
        content: [// ["infobox","upgBox"],
        "main-display",
        "prestige-button","blank",
    ["upgrades",[1]],
],
unlocked(){return true}
    },
    "Assignment": {
        content: [ ["infobox","asBox"],
        "main-display",
        "prestige-button","blank",
        ["display-text",function() {if(hasMilestone('e',8)) return "你每秒自动分配"+format(tmp.e.expAssign.mul(player.devSpeed),3)+"经验！"}],"blank",
    ["clickables",[1]],"blank",
    ["upgrades",[2]],
    ["clickables",[2]],"blank",
    "buyables",
],
unlocked(){return hasUpgrade('e',17)}
    },
},
    upgrades: {
    11:{
     fullDisplay: "<h2>11</h2><br>你可以一次获得超过1的小数个经验<br>价格:10经验",
     cost:n(10),
     },
    12:{
     fullDisplay: "<h2>12</h2><br>解锁下一个Rizline联动对象<br>价格:30经验<br>需要:一次获得1.135经验",
     cost:n(30),
     unlocked() {return hasUpgrade('e',11)},
     canAfford() {return player.e.bestOnce.gte(1.135)},
     },
    13:{
     fullDisplay() {return  "<h2>13</h2><br>基于一次获得的最多经验数弱化填充Notes软上限<br>当前效果: ^"+format(this.effect(),3)+"<br>价格:40经验<br>需要:一次获得1.3经验"},
     cost:n(40),
     effect() {
      let eff=n(n(1).div(player.e.bestOnce)).pow(0.75)
      if(hasMilestone('e',5)) eff=eff.div(1.1)
      if(eff.lte(0.3)) eff = eff.div(0.3).pow(0.5).mul(0.3)//sc
      return eff
     },
     unlocked() {return hasUpgrade('e',12)},
     canAfford() {return player.e.bestOnce.gte(1.3)},
     },
    14:{
     fullDisplay: "<h2>14</h2><br>解锁经验的第二个效果<br>价格:50经验<br>需要:一次获得1.37经验",
     cost:n(50),
     unlocked() {return hasUpgrade('e',13)},
     canAfford() {return player.e.bestOnce.gte(1.37)},
     },
    15:{
     fullDisplay: "<h2>15</h2><br>解锁最后一个Rizline联动对象，Arcaea<br>价格:60经验<br>需要:一次获得1.7经验",
     cost:n(60),
     unlocked() {return hasUpgrade('e',14)},
     canAfford() {return player.e.bestOnce.gte(1.7)},
     },
    16:{
     fullDisplay: "<h2>16</h2><br>改变经验的第一个效果的公式(在约130经验以后变得更好)<br>价格:70经验<br>需要:一次获得2.25经验",
     cost:n(70),
     unlocked() {return hasUpgrade('e',15)},
     canAfford() {return player.e.bestOnce.gte(2.25)},
     },
    17:{
     fullDisplay() {return "<h2>17</h2><br>解锁经验分配<br>价格:300经验<br>需要:一次获得3.7经验"},
     cost() {return n(300)},
     unlocked() {return hasUpgrade('e',16)},
     canAfford() {return player.e.bestOnce.gte(3.7)},
     },
    21:{
     fullDisplay() {
      return "<h2>21</h2><br>进行一次经验重置，解锁下一个经验分配，但是经验获取量÷"+format(this.effect())+"<br>需要:无"},
     unlocked() {return hasMilestone('e',7)||player.e.assigned[2].gt(0)},
     effect() {
      let a=n(2)
      if(hasMilestone('e',9)) a=n(1.02)
      if(hasUpgrade('ri',41)) a=n(1)
      return a
     },
     onPurchase() {doReset('e',true)},
     canAfford() {return true},
     },
    22:{
     fullDisplay() {
      return "<h2>22</h2><br>进行一次经验重置，解锁下一个经验分配，但是课题力量对Cytus增益指数-"+format(this.effect())+"<br>需要:获得上一个升级并向“曲高和寡”投入1000经验"},
     unlocked() {return hasUpgrade('e',21)||player.e.assigned[3].gt(0)},
     effect() {
      let a=n(2.5)
      if(hasUpgrade('ri',42)) a=buyableEffect('e',11)
      return a
     },
     onPurchase() {doReset('e',true)},
     canAfford() {return hasUpgrade('e',21)&&player.e.assigned[2].gte(1000)},
     },
    23:{
     fullDisplay() {return "<h2>23</h2><br>进行一次经验重置，解锁下一个经验分配，但是曲库中歌曲数量×"+format(this.effect())+"<br>需要:获得上一个升级并向“严于律己”投入1500经验"},
     unlocked() {return hasUpgrade('e',22)||player.e.assigned[4].gt(0)},
     effect() {
      let a=n(0.9)
      if(hasUpgrade('ri',43)) a=buyableEffect('e',12)
      return a
     },
     onPurchase() {doReset('e',true)},
     canAfford() {return hasUpgrade('e',22)&&player.e.assigned[3].gte(1500)},
     },
    24:{
     fullDisplay() {
      let a="但是你将不"
      if(hasUpgrade('ri',44)) a="你仍然"
      return "<h2>24</h2><br>进行一次经验重置，解锁下一个经验分配，"+a+"能获得Phigros-Note<br>需要:获得上一个升级并向“战无不胜”投入1500经验"},
     unlocked() {return (hasUpgrade('e',23)||player.e.assigned[5].gt(0))&&hasMilestone('e',9)},
     onPurchase() {doReset('e',true)},
     canAfford() {return hasUpgrade('e',23)&&player.e.assigned[4].gte(1500)},
     },
    25:{
     fullDisplay() {
      let a="10"
      if(hasUpgrade('ri',45)) a=""
      return "<h2>25</h2><br>进行一次经验重置，解锁下一个经验分配，但是经验的第一个效果的软上限加强"+a+"0%<br>需要:获得上一个升级并通过231ms判定区间挑战"},
     unlocked() {return hasUpgrade('e',24)||player.e.assigned[6].gt(0)},
     onPurchase() {doReset('e',true)},
     canAfford() {return hasUpgrade('e',24)&&player.j.pdqja.lte(231)},
     },
    26:{
     fullDisplay() {return "<h2>26</h2><br>基于一次最佳经验增益自动分配经验数量<br>当前效果:"+format(this.effect())+"×<br>需要:通过226ms判定区间挑战"},
     unlocked() {return hasMilestone('e',10)},
     effect() {
      return player.e.bestOnce.max(1)
     },
     canAfford() {return player.j.pdqja.lte(226)},
     },
    27:{
     fullDisplay() {return "<h2>27</h2><br>解锁一个经验可购买，可以减弱Notes软上限指数<br>需要:通过220ms判定区间挑战"},
     unlocked() {return hasMilestone('e',10)},
     canAfford() {return player.j.pdqja.lte(220)},
     },
    },
    milestones: {
    0: {
     requirementDescription: "累计 1 经验",
     effectDescription: "Ri层保留相关里程碑全部应用于本层",
     done() { return player.e.points.gte(1) }
    },
    1: {
     requirementDescription: "一次重置获得超过1.11经验",
     effectDescription: "Ri层其他里程碑也再次应用(点击查看效果)",
     tooltip:"包括Notes获取量×1e1000和减弱判定区间挑战的减益效果2",
     unlocked() {return hasMilestone('e',0)},
     done() { return player.e.bestOnce.gte(1.11)}
    },
    2: {
     requirementDescription: "一次重置获得超过1.234经验",
     effect() {
      let eff=n(player.e.milestones.length)
      return eff
     },
     effectDescription() {return "每个经验里程碑使Milthm联动效果+1<br>当前效果: +"+format(this.effect())},
     tooltip:"由于代码bug，本应有的效果未生效，在此向大家道个歉",
     unlocked() {return hasMilestone('e',1)},
     done() { return player.e.bestOnce.gte(1.234)}
    },
    3: {
     requirementDescription: "一次重置获得超过1.6经验",
     effectDescription: "解锁第九个判定区间效果",
     unlocked() {return hasMilestone('e',2)},
     done() { return player.e.bestOnce.gte(1.6)}
    },
    4: {
     requirementDescription: "一次重置获得超过2.8经验",
     effectDescription: "经验效果变成原来的1.1次方",
     unlocked() {return hasMilestone('e',3)},
     done() { return player.e.bestOnce.gte(2.8)}
    },
    5: {
     requirementDescription: "一次重置获得超过3.65经验",
     effectDescription: "经验升级13的效果变得更好",
     unlocked() {return hasMilestone('e',4)},
     done() { return player.e.bestOnce.gte(3.65)}
    },
    6: {
     requirementDescription: "一次重置获得超过4经验",
     effectDescription() {return "每秒获得重置时可以获得的"+format(n(3e-5).mul(player.devSpeed))+"%经验"},
     tooltip:"已计入全局速率影响，效果为全局速率×3e-5",
     unlocked() {return hasMilestone('e',5)},
     done() { return player.e.bestOnce.gte(4)}
    },
    7: {
     requirementDescription: "一次重置获得超过5经验",
     effectDescription() {return "自动更新一次最佳经验，解锁经验分配升级"},
     unlocked() {return hasMilestone('e',6)},
     done() { return player.e.bestOnce.gte(5)}
    },
    8: {
     requirementDescription: "一次重置获得超过5.678经验",
     effectDescription() {return "向所有你解锁的经验分配可点击，每秒自动投入重置时所有被动获得的经验，而不消耗任何经验<br>解锁第二个Rizline挑战，即RiC2"},
     unlocked() {return hasMilestone('e',7)},
     done() { return player.e.bestOnce.gte(5.678)}
    },
    9: {
     requirementDescription: "一次重置获得超过6.6经验",
     effectDescription() {return "解锁更多经验分配内容，弱化经验升级21的减益效果 (÷2 → ÷1.02)"},
     unlocked() {return hasMilestone('e',8)},
     done() { return player.e.bestOnce.gte(6.6)}
    },
    10: {
     requirementDescription: "一次重置获得超过7.5经验",
     effectDescription() {return "解锁更多Rizline升级和两个经验分配升级"},
     unlocked() {return hasMilestone('e',9)},
     done() { return player.e.bestOnce.gte(7.5)}
    },
    11: {
     requirementDescription: "一次重置获得超过9.5经验",
     effectDescription() {return "购买经验分配可购买不再消耗经验"},
     unlocked() {return hasMilestone('e',10)},
     done() { return player.e.bestOnce.gte(9.5)}
    },
    12: {
     requirementDescription: "一次重置获得超过11.8经验",
     effectDescription() {return "曲库生成器提升曲库延拓器的效果<br>当前效果:"+format(this.effect(),3)+"×"},
     effect() {
      let eff = gba('ri',21).div(10).add(1)
      if(eff.gte(2)) eff=eff.div(2).pow(0.2).mul(2)
      return eff
     },
     unlocked() {return hasUpgrade('ri',47)},
     done() { return player.e.bestOnce.gte(11.8)}
    },
    13: {
     requirementDescription: "一次重置获得超过17经验 并且 通过200ms判定区间挑战",
     effectDescription() {return "恭喜通关！"},
     unlocked() {return hasMilestone('e',12)},
     done() { return player.e.bestOnce.gte(17)&&player.j.pdqja.lte(200)}
    },
    },
    clickables: {
     11:{
      title() {return "精益求精<br><span style='font-size: 10px'>你为此投入了"+format(player.e.assigned[0])+"经验，效果是:<br>-"+format(this.effect())+"ms生效最佳判定区间"
      },
      onHold() {
       player.e.assigned[0]=player.e.assigned[0].add(player.e.points.mul(0.25))
       player.e.points=player.e.points.mul(0.75)
      },
      effect() {
       let eff=player.e.assigned[0].add(1).log(5)
       return eff.max(0)
      },
      canClick() {return true},
     },
     12:{
      title() {return "厚积薄发<br><span style='font-size: 10px'>你为此投入了"+format(player.e.assigned[1])+"经验，效果是:<br>(250-最佳判定区间)^"+format(this.effect(),4)+"增益实力值"
      },
      onHold() {
       player.e.assigned[1]=player.e.assigned[1].add(player.e.points.mul(0.25))
       player.e.points=player.e.points.mul(0.75)
      },
      effect() {
       let eff=player.e.assigned[1].add(1).log(2).div(100)
       if(eff.gte(0.1)) eff=eff.sub(0.1).div(10).add(0.1)
       return eff.max(0)
      },
      tooltip() {
       return "当前效果:实力值×"+format(n(n(250).sub(player.j.pdqja)).max(1).pow(this.effect()),4)
      },
      canClick() {return true},
     },
     13:{
      title() {return "曲高和寡<br><span style='font-size: 10px'>你为此投入了"+format(player.e.assigned[2])+"经验，效果是:<br>曲包专精效果^"+format(this.effect(),4)+" (忽略软上限)"
      },
      onHold() {
       player.e.assigned[2]=player.e.assigned[2].add(player.e.points.mul(0.25))
       player.e.points=player.e.points.mul(0.75)
      },
      effect() {
       let eff=player.e.assigned[2].max(1).log(10).div(10).add(1)
       if(!this.unlocked()) eff=n(1)
       return eff.max(1)
      },
      unlocked() {return hasUpgrade('e',21)},
      canClick() {return true},
     },
     14:{
      title() {return "严于律己<br><span style='font-size: 10px'>你为此投入了"+format(player.e.assigned[3])+"经验，效果是:<br>课题力量×"+format(this.effect(),2)
      },
      onHold() {
       player.e.assigned[3]=player.e.assigned[3].add(player.e.points.mul(0.25))
       player.e.points=player.e.points.mul(0.75)
      },
      effect() {
       let eff=player.e.assigned[3].max(1).pow(15)
       if(!this.unlocked()) eff=n(1)
       return eff.max(1)
      },
      unlocked() {return hasUpgrade('e',22)},
      canClick() {return true},
     },
     15:{
      title() {return "战无不胜<br><span style='font-size: 10px'>你为此投入了"+format(player.e.assigned[4])+"经验，效果是:<br>RiC2和第3个判定区间减益^"+format(this.effect(),4)
      },
      onHold() {
       player.e.assigned[4]=player.e.assigned[4].add(player.e.points.mul(0.25))
       player.e.points=player.e.points.mul(0.75)
      },
      effect() {
       let eff=n(1).div(player.e.assigned[4].max(1).add(1).log(2).div(5))
       if(eff.lt(0.5)) eff=eff.div(0.5).pow(0.5).mul(0.5)
       if(!this.unlocked()) eff=n(1)
       return eff.min(1)
      },
      unlocked() {return hasUpgrade('e',23)},
      canClick() {return true},
     },
     16:{
      title() {return "难上加难<br><span style='font-size: 10px'>你为此投入了"+format(player.e.assigned[5])+"经验，效果是:<br>谱面的物量上限增加"+format(this.effect())
      },
      onHold() {
       player.e.assigned[5]=player.e.assigned[5].add(player.e.points.mul(0.25))
       player.e.points=player.e.points.mul(0.75)
      },
      effect() {
       let eff=player.e.assigned[5].pow(0.9).max(0)
       if(eff.gte(1e4)) eff = eff.div(1e4).pow(0.5).mul(1e4)//sc
       if(!this.unlocked()) eff=n(0)
       return eff.max(0)
      },
      unlocked() {return hasUpgrade('e',24)},
      canClick() {return true},
     },
     17:{
      title() {return "力大无穷<br><span style='font-size: 10px'>你为此投入了"+format(player.e.assigned[6])+"经验，效果是:<br>Phigros-Note中蓝键的效果^"+format(this.effect())
      },
      onHold() {
       player.e.assigned[6]=player.e.assigned[6].add(player.e.points.mul(0.25))
       player.e.points=player.e.points.mul(0.75)
      },
      effect() {
       let eff=player.e.assigned[6].max(10).log(10).pow(1.35)
       if(!this.unlocked()) eff=n(1)
       return eff.max(1)
      },
      unlocked() {return hasUpgrade('e',25)},
      canClick() {return true},
     },
     21:{
      title:"重置升级",
      display() {return "点击进行一次经验重置，并且重置经验升级21~"+Math.min(Math.max(player.e.upgrades[player.e.upgrades.length-1],21),25)+"，相关经验分配可点击的效果将被禁用"},
      onClick() {
       player.e.upgrades=player.e.upgrades.filter(a => !(a >= 21 && a <= 25))
       doReset('e',true)
      },
      canClick() {return hasUpgrade('e',21)},
      unlocked() {return layers.e.upgrades[21].unlocked()}
     },
    },
    buyables: {
     11: {
      base() { 
   let a=n(2)
   if(hasUpgrade('ri',46)) a=n(1.5)
   return a},
   cost() {
   let b=gba(this.layer, this.id)
   cost=this.base().pow(b)
      return cost
      },
      title(){return "减益弱化-22"},
      display() { return "经验升级22的效果被弱化为-"+format(this.effect())+"<br>价格："+format(this.cost())+" 经验<br>数量："+format(gba(this.layer, this.id))+"/25"},
      canAfford() { return player[this.layer].points.gte(this.cost()) },
      effect() {
       let eff=n(2.5).sub(gba(this.layer,this.id).mul(0.1))
       return eff
      },
      buy() {
      if(!hasMilestone('e',11)) player[this.layer].points = player[this.layer].points.sub(this.cost())
      setBuyableAmount(this.layer,this.id,gba(this.layer,this.id).add(1))
      },
      buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.e.points.log(this.base())
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)
				},
      unlocked() {return hasUpgrade('ri',42)},
      purchaseLimit() {return n(25)},
      style: {'height':'150px'},
     },
     12: {
      base() { 
   let a=n(3)
   return a},
   cost() {
   let b=gba(this.layer, this.id)
   cost=this.base().pow(b)
   if(b==n(4)) cost=n(2e308)
      return cost
      },
      title(){return "减益弱化-23"},
      display() { return "经验升级23的效果被弱化为×"+format(this.effect())+"<br>价格："+format(this.cost())+" 经验<br>数量："+format(gba(this.layer, this.id))+"/10"},
      canAfford() { return player[this.layer].points.gte(this.cost()) },
      effect() {
       let eff=n(0.9).add(gba(this.layer,this.id).mul(0.01))
       return eff
      },
      buy() {
      if(!hasMilestone('e',11)) player[this.layer].points = player[this.layer].points.sub(this.cost())
      setBuyableAmount(this.layer,this.id,gba(this.layer,this.id).add(1))
      },
      buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.e.points.log(this.base())
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)
				},
      unlocked() {return hasUpgrade('ri',43)},
      style: {'height':'150px'},
      purchaseLimit() {return n(10)},
     },
     13: {
      base() { 
   let a=n(4)
   return a},
   cost() {
   let b=gba(this.layer, this.id)
   cost=this.base().pow(b).mul(1e3)
      return cost
      },
      title(){return "减益弱化-Notes"},
      display() { return "Notes软上限的指数被弱化为^"+format(this.effect(),3)+"<br>价格："+format(this.cost())+" 经验<br>数量："+format(gba(this.layer, this.id))+"/5"},
      canAfford() { return player[this.layer].points.gte(this.cost()) },
      effect() {
       let eff=n(0.25).add(gba(this.layer,this.id).mul(0.025))
       return eff
      },
      buy() {
      if(!hasMilestone('e',11)) player[this.layer].points = player[this.layer].points.sub(this.cost())
      setBuyableAmount(this.layer,this.id,gba(this.layer,this.id).add(1))
      },
      buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.e.points.div(1e3).log(this.base())
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target)
				},
      unlocked() {return hasUpgrade('e',27)},
      style: {'height':'150px'},
      purchaseLimit() {return n(5)},
     },
    },
})//Experiences
