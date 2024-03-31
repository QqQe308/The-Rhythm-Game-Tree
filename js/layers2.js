//2024.02.02:layers.js已经五千多行了，太卡了。启用layers2.js。以后每5000行（对应层级结束后）就另开一个layers.js

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
    //color: "#00ddff",
    color() {return getUndulatingColor(period = Math.sqrt(20.24))},
    requires: n(1e100), 
    resource: "旋律",
    baseResource: "Cyten", 
    baseAmount() {return player.c.points}, 
    type: "normal", 
    exponent: 0.025, 
    gainMult() { //rgainmult
        mult = n(1)
        if (gcs("r",42)==1) mult = mult.times(clickableEffect("r", 42))
        if (gcs("r",52)==1) mult = mult.times(clickableEffect("r", 52))
        if(hasUpgrade('sp',31)) mult = mult.times(upgradeEffect('sp',31))
        if(hasUpgrade('sp',32)) mult = mult.times(upgradeEffect('sp',32))
        if(hasUpgrade('sp',33)) mult = mult.times(upgradeEffect('sp',33))
        if(hasUpgrade('sp',34)) mult = mult.times(upgradeEffect('sp',34))
        if(hasUpgrade('sp',35)) mult = mult.times(upgradeEffect('sp',35))
        if(hasUpgrade('sp',36)) mult = mult.times(upgradeEffect('sp',36))
        if(hasUpgrade('sp',37)) mult = mult.times(upgradeEffect('sp',37))
        if(hasUpgrade('m',15)) mult = mult.times(upgradeEffect('m',15))
        if (gcs("r",111)==1) mult = mult.times(clickableEffect("r", 111))
        if(hasUpgrade('mi',15)) mult = mult.times(upgradeEffect('mi',15))
        if (gcs("r",131)==1) mult = mult.times(clickableEffect("r", 131))
        if (gcs("r",132)==1) mult = mult.times(clickableEffect("r", 132))
        if (gcs("r",133)==1) mult = mult.times(clickableEffect("r", 133))
        if (gcs("r",153)==1) mult = mult.times(clickableEffect("r", 153))
        return mult
    },
    gainExp() { //rgainexp
      exp= n(1)
       return exp
    },
    directMult() { //rdirectmult
        mult = n(1)
        return mult
    },
    passiveGeneration() {return n(0)},
    row: 4, 
    hotkeys: [
        {key: "r", description: "R： Reset for Rotaeno", onPress(){if(canReset(this.layer)&&hasMilestone('r',0)) doReset(this.layer)}},
    ],
    layerShown(){ return hasUpgrade('sp',27)||player.r.total.gte(1)},
    rotCal() {
     let rot=player.r.rota
     if(inChallenge('r',11)) rot=rot.div(2.4)
     if(inChallenge('r',12)&&!hasUpgrade('r',31)) rot=rot.div(2)
     rot=rot.sub(player.r.upgCost)
     return rot
    },
    branches(){return ['c','ch','sp']},
    update(diff) {
     player.r.rot=layers.r.rotCal()
			player.r.rota=gba('r',11).add(gba('r',12)).add(gba('r',13))
			if(player.devSpeed.neq(0)) {
			player.r.resettime=player.r.resettime.add(diff)
			if(player.r.points.lt(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed).mul(100))&&hasUpgrade('r',44)) player.r.points=player.r.points.add(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(diff).mul(10))
			if(player.r.points.lt(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed).mul(clickableEffect('r',161)))&&gcs('r',161)==1) player.r.points=player.r.points.add(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(diff).mul(clickableEffect('r',161)).div(10))
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
  	doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
               kept.push("milestones","upgrades","buyables","challenges","points","total")
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
     {"color": "#2edde2", "font-size": "16px", "font-family": "Comic Sans MS"}],"blank",
    ["display-text", function() {if(player.devSpeed.gt(1)) return '算上全局速率，你正在获得 ' + format(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed))+' 旋律每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
    ["display-text", function() {if(gcs('r',161)==1){
     if(player.r.points.lt(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed).mul(clickableEffect('r',161)))) return '算上升级效果，你正在获得 ' + format(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed).mul(clickableEffect('r',161)).div(10))+' 旋律每秒<br>你需要'+format(player.r.points.div(clickableEffect('r',161)))+'旋律每秒以获得升级的效果'
     else return '算上升级效果，你正在获得 ' + format(n(tmp.r.resetGain).mul(tmp.r.passiveGeneration).mul(player.devSpeed))+' 旋律每秒<br>你需要'+format(player.r.points.div(clickableEffect('r',161)))+'旋律每秒以获得升级的效果'
    }},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
     ["display-text",function() {if(inChallenge('r',12)) return '当前对Cytus力量的减益：^' + format(tmp.r.chal2Cal)+'<br>确切来说，^'+tmp.r.chal2Cal},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"}],"blank",
    ["display-text",function() {if(hasUpgrade('r',41)) return '你最大填充了 ' + format(player.r.notes) + ' Notes'},
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
  unlocked(){return hasUpgrade('r',17)}
},
},
   buyables: {
        11: {
            cost() { 
             let a=n(2)
             let b=gba(this.layer, this.id)
             cost=a.pow(b)
            return cost
            },
            title(){return "Rot点数 I"},
            display() { return "你可以用旋律购买Rot点数购买“升级”<br>价格："+format(this.cost())+"旋律<br>数量："+format(gba(this.layer, this.id))},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                 player[this.layer].points = player[this.layer].points.sub(this.cost())
                
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
            },
            unlocked() {return hasMilestone('r',0)},
            style: {'height':'100px'},
        },
        12: {
            cost() { return n("1e1200000").mul(n("1e50000").pow(gba(this.layer, this.id).pow(1.25))) },
            title(){return "Rot点数 II"},
            display() { return "你可以用Note购买Rot点数购买“升级”<br>价格："+format(this.cost())+" Notes<br>数量："+format(gba(this.layer, this.id))},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                 player.points = player.points.sub(this.cost())
                
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade('r',13)},
            style: {'height':'100px'},
        },
        13: {
            cost() { return n(10).pow(gba(this.layer,this.id).div(2).add(20).pow(2)) },
            title(){return "Rot点数 III"},
            display() { return "你可以用Milthm购买Rot点数购买“升级”<br>价格："+format(this.cost())+" Milthm<br>数量："+format(gba(this.layer, this.id))},
            canAfford() { return player.mi.points.gte(this.cost()) },
            buy() {
                 player.mi.points = player.mi.points.sub(this.cost())
                
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
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
            setClickableState("r",21,0)
            setClickableState("r",31,0)
            setClickableState("r",32,0)
            setClickableState("r",41,0)
            setClickableState("r",42,0)
            setClickableState("r",43,0)
            setClickableState("r",51,0)
            setClickableState("r",52,0)
            setClickableState("r",53,0)
            setClickableState("r",61,0)
            setClickableState("r",71,0)
            setClickableState("r",72,0)
            setClickableState("r",73,0)
            setClickableState("r",81,0)
            setClickableState("r",82,0)
            setClickableState("r",83,0)
            setClickableState("r",91,0)
            setClickableState("r",92,0)
            setClickableState("r",93,0)
            setClickableState("r",101,0)
            setClickableState("r",102,0)
            setClickableState("r",103,0)
            setClickableState("r",111,0)
            setClickableState("r",112,0)
            setClickableState("r",121,0)
            setClickableState("r",131,0)
            setClickableState("r",132,0)
            setClickableState("r",133,0)
            setClickableState("r",141,0)
            setClickableState("r",142,0)
            setClickableState("r",143,0)
            setClickableState("r",151,0)
            setClickableState("r",152,0)
            setClickableState("r",153,0)
            setClickableState("r",161,0)
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
            player.r.notes=player.points.max(player.r.notes)
           },
           onHold() {
            player.r.notes=player.points.max(player.r.notes)
           },
            unlocked(){return hasUpgrade('r',41)},
    },
    21: {//Rot21
           title(){return "21" },
           display() {return "累计旋律数量增益Note获取量<br>价格: 1 Rot点数<br>效果: ×"+format(this.effect())},
           effect() {
            let a=player.r.total.max(10)
            if(a.gte(1e15)) a = n(10).pow(a.log10().sub(15).pow(0.5).add(15))//sc
           eff=n("1e1000").pow(a.pow(0.8))
           if(a.gte(1.14e114)) return a.pow(3000)//sc5
            if(eff.log10().gte(10000)) eff = n(10).pow(eff.log10().sub(10000).pow(0.8).add(10000))//sc
         if (gcs("r",53)==1) eff = eff.pow(clickableEffect("r", 53))
         if(!hasUpgrade('r',16)) eff=eff.min("1e100000")
         if(eff.log10().gte(100000)) eff = n(10).pow(eff.log10().sub(100000).pow(0.8).add(99999))//sc2
         if(eff.log10().gte(250000)) eff = n(10).pow(eff.log10().sub(250000).pow(0.5).add(250000))//sc3
         if(eff.log10().gte(300000)) eff = n(10).pow(eff.log10().sub(300000).pow(0.1).add(300000))//sc4，最后一次，别再炸了
         if (gcs("r",53)==1&&hasUpgrade('r',24)) eff = eff.pow(clickableEffect("r", 53).pow(0.25))
            return eff.max(1)
           },
           tooltip() {
            if(hasUpgrade('r',16)&&player.r.total.gte("1e10000")) return "购买要求: 无<br>软上限1：1e10000，软上限2：1e100000，软上限3：1e250000，软上限4：1e300000，最终软上限：约1e10000旋律"
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
            player.r.upgCost=player.r.upgCost.add(1)
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
            player.r.upgCost=player.r.upgCost.add(1)
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
            player.r.upgCost=player.r.upgCost.add(1)
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
            player.r.upgCost=player.r.upgCost.add(2)
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
            player.r.upgCost=player.r.upgCost.add(3)
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
            player.r.upgCost=player.r.upgCost.add(2)
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
            player.r.upgCost=player.r.upgCost.add(3)
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
            player.r.upgCost=player.r.upgCost.add(2)
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
            player.r.upgCost=player.r.upgCost.add(3)
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
       if(player.r.points.div(1000).gte(a)) eff=eff.div(player.r.points.div(n(a).max(1)).div(1000).pow(5).max(1))
        return eff.max(0)
           },
           tooltip() {
            return "购买要求:51|52|53<br>注意：为避免过度挂机影响游戏平衡，当旋律数量多于每秒获取数量的1000倍时，获取速度将大幅降低！" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
            if(inChallenge('r',12)&&gcs('r',12)==1) return false
            return (gcs(this.layer,51)==1|| gcs(this.layer,52)==1|| gcs(this.layer,53)==1)&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            player.r.upgCost=player.r.upgCost.add(10)
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
           tooltip() {
            return "购买要求:61,!72,!73<br>这人终于会用directMult了" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           if(gcs(this.layer,61)==1&&gcs(this.layer,121)==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1) return true
           return gcs(this.layer,61)==1&&gcs(this.layer,72)!==1&&gcs(this.layer,73)!==1&&player.r.rot.gte(2)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            player.r.upgCost=player.r.upgCost.add(2)
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
           tooltip() {
            return "购买要求:61,!71,!73" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           if(gcs(this.layer,61)==1&&gcs(this.layer,121)==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1) return true
           return gcs(this.layer,61)==1&&gcs(this.layer,71)!==1&&gcs(this.layer,73)!==1&&player.r.rot.gte(1)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            player.r.upgCost=player.r.upgCost.add(1)
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
            return "购买要求:61,!71,!72" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
            if(inChallenge('r',12)&&gcs('r',12)==1) return false
            if(gcs(this.layer,61)==1&&gcs(this.layer,121)==1&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1) return true
            return gcs(this.layer,61)==1&&gcs(this.layer,71)!==1&&gcs(this.layer,72)!==1&&player.r.rot.gte(3)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
            player.r.upgCost=player.r.upgCost.add(3)
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
            player.r.upgCost=player.r.upgCost.add(5)
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
            player.r.upgCost=player.r.upgCost.add(9)
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
            player.r.upgCost=player.r.upgCost.add(7)
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
            player.r.upgCost=player.r.upgCost.add(9)
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
            player.r.upgCost=player.r.upgCost.add(8)
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
            player.r.upgCost=player.r.upgCost.add(8)
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
            player.r.upgCost=player.r.upgCost.add(9)
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
            player.r.upgCost=player.r.upgCost.add(8)
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
            player.r.upgCost=player.r.upgCost.add(10)
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
            player.r.upgCost=player.r.upgCost.add(6)
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
            player.r.upgCost=player.r.upgCost.add(6)
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
            player.r.upgCost=player.r.upgCost.add(10)
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
           tooltip() {
            return "购买要求:121,!132,!133" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,121)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1&&(!gcs(this.layer,132)==1&&!gcs(this.layer,133)==1)
          },
           onClick() {setClickableState(this.layer, this.id,1)
            player.r.upgCost=player.r.upgCost.add(10)
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
           tooltip() {
            return "购买要求:121,!131,!133" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,121)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1&&(!gcs(this.layer,131)==1&&!gcs(this.layer,133)==1)
          },
           onClick() {setClickableState(this.layer, this.id,1)
            player.r.upgCost=player.r.upgCost.add(10)
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
eff=a.mul(3.2).root(3.5)
if(player.devSpeed.eq(0)) eff=n(1)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:121,!131,!132<br>不计入全局速率的影响，如果重置时间没有变化，请再次重置一次R层" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,121)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1&&(!gcs(this.layer,131)==1&&!gcs(this.layer,132)==1)
          },
           onClick() {setClickableState(this.layer, this.id,1)
            player.r.upgCost=player.r.upgCost.add(10)
           },
            unlocked(){return hasUpgrade('mi',27)},
            branches(){return ["121"]},
    },
    141: {//Rot141
        title(){return "141 活跃" },
       display() {return "基于最高Notes数量增益Milthm维度（你需要先填充Notes）<br>价格: 8 Rot点数<br>效果: ×"+format(this.effect())},
        effect() { 
      let eff=n(10).pow(player.r.notes.max(10).log(2)).pow(0.3).log(10).pow(0.3)
        return eff.max(1)
           },
           tooltip() {
            return "购买要求:131<br>你需要用Rot升级13来填充Notes" },
   style() { return { 'background-color': gcs(this.layer,this.id)==1?"#77BF5F":layers.r.clickables[this.id].canClick()?"#00ddff":"#BF8F8F"}},
          canClick() {
           if(inChallenge('r',12)&&gcs('r',12)==1) return false
           return gcs(this.layer,131)==1&&player.r.rot.gte(8)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       player.r.upgCost=player.r.upgCost.add(8)
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
           return gcs(this.layer,132)==1&&player.r.rot.gte(7)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       player.r.upgCost=player.r.upgCost.add(8)
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
       player.r.upgCost=player.r.upgCost.add(8)
           },
            unlocked(){return hasUpgrade('r',41)},
            branches(){return ["133"]},
    },
    151: {//Rot151
        title(){return "151 活跃" },
       display() {return "基于最高Notes数量增益课题力量<br>价格: 12 Rot点数<br>效果: ×"+format(this.effect())},
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
       player.r.upgCost=player.r.upgCost.add(12)
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
       player.r.upgCost=player.r.upgCost.add(12)
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
           return gcs(this.layer,143)==1&&player.r.rot.gte(10)&&gcs(this.layer,this.id)!==1
          },
           onClick() {setClickableState(this.layer, this.id,1)
       player.r.upgCost=player.r.upgCost.add(1)
           },
            unlocked(){return hasUpgrade('r',45)},
            branches(){return ["143"]},
    },
    161: {//Rot161
        title(){return "161" },
       display() {return "如果当前旋律数量小于每秒获取量的"+format(this.effect())+"倍，则旋律获取量×"+format(this.effect().div(10))+"<br>价格: 10 Rot点数"},
        effect() {
        eff=player.r.rota.pow(0.9).mul(10)
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
            player.r.upgCost=player.r.upgCost.add(10)
           },
            unlocked(){return hasUpgrade('r',46)},
            branches(){return ["151","152","153"]},
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
      description: "你可以同时购买升级41和43，你可以使用Note购买Rot点数",
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
       cost: n(1e10),
       unlocked() {return challengeCompletions('r',12)>4},
    },
    33:{ title: "曲包助推 III",
      description: "R层重置不再重置曲包数量",
       cost: n(5e10),
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
      description: "😧😧😧😨😨😨😂😂😂，并且谱面额外乘数×1.0025，Milthm维度×10",
       cost: n(1e27),
       unlocked() {return challengeCompletions('r',13)>4},
    },
       },
   challenges: {
      11: {
        name: "RC1 Note消逝",
        challengeDescription(){
          return "Note获取量^0.1，Rot点数数量÷2.4<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"},
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
         if(challengeCompletions('r',12)==3) {a="1e165"
         b="0.16"}
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
         if(challengeCompletions('r',12)==3) return player.c.power.gte("1e165")&&tmp.r.chal2Cal.lte(0.16)
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
        unlocked() { return hasUpgrade('r',37)},
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
    //color: "#bcf2ff",
    color() {return getUndulatingColor(period = Math.sqrt(20.24))},
    requires: n(1), 
    resource: "Milthm",
    type: "custom", 
    branches(){return ['c','ch','sp']},
    getResetGain() {
    return n(0)
    },
    getNextAt() {return n(0)},
    row: 4, 
    layerShown(){ return hasUpgrade('r',37)},
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
     return a
    },//计算维度的其他倍率
    buyBoost() {
     let a=n(2)
     if(hasUpgrade('mi',13)) a=n(2.1)
     if(hasUpgrade('mi',23)) a=a.add(upgradeEffect('mi',23))
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
      function() {return '你正在获得 '+ format(tmp.mi.buyables[21].effect.times(player.mi.dim1)) +' Milthm每秒<br>你累计有 ' + format(player.mi.total) + " Milthm"},
    {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],"blank",
      ["display-text",
      function() {if(player.mi.total.gte("1.80e308")) return '在1.80e308 Milthm以后，Milthm维度和计数频率价格提升速度加快！'},
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
     let eff=n(8).pow(player.mi.points.log(15))
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
    effect() {return player.mi.points.max(1).log(10).pow(0.25)},
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
    challenges: {
     
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
  body(){return "欢迎来到第11层，判定！你在本层级的目标是推进判定线和判定区间，提升谱面的难度和一些其他内容，同时，在本层会有很多对静态层级的增益。"},
        },
judBox: {
  title: "判定区间",
  body(){return "判定区间类似一个可以自定义难度的挑战！通过不断降低判定区间，“挑战”的难度会提升，并且增加完成挑战的效果，到了特定值以后会解锁新的功能！到达1e3000000 Notes就可以通过这次判定区间的挑战！"},
        },
},
    name: "judgment",
    symbol: "J",
    position: 1,
    startData() { return {
        unlocked() { return hasUpgrade('r',47)},
points: n(0),
pdqj:n(0),
pdqj0:n(500),//用于在挑战中确认判定区间
pdqja:n(501),//最佳判定区间
theme:"default",
clickables: {[11]: 0},
    }},
    //color: "#e786f0",
    color() {return getUndulatingColor(period = Math.sqrt(20.24))},
    requires: n(1250), 
    resource: "判定线",
    baseResource: "谱面", 
    baseAmount() {return player.ch.points}, 
    type: "static", 
    branches(){return ['c','ch','sp']},
    exponent: 1, 
    gainMult() { 
        mult = n(1)
        return mult
    },
    gainExp() { 
      exp= n(0.99)
       return exp
    },
    directMult() { 
        mult = n(25)
        return mult
    },
    row: 4, 
    hotkeys: [
        {key: "j", description: "J： Reset for Judgment",onPress(){if(canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return false },
    // hasUpgrade('r',47)},
    tabFormat: {
    "Milestones": {
        content: [ ["infobox","introBox"],
    "main-display",
    "milestones",
     ],},
    "Judgment": {
        content: [ ["infobox","judBox"],
    "main-display",
         ["display-text",function() {return '当前的判定区间是 ' + format(player.j.pdqj) + 'ms！'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
         ["display-text",function() {if(gcs('j',11)==1) return '在挑战中修改判定区间没有作用！实际生效判定区间： '+format(player.j.pdqj0)+"ms"},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["slider",["pdqj",100,500]],
    "clickables",
         ["display-text",function() { return '判定区间挑战减益：<br>1. Notes^' + format(tmp.j.pdqj1)+ '<br>2. 课题力量^' + format(tmp.j.pdqj2) + '<br>3.Phidata^' + format(tmp.j.pdqj3) },
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
        ["display-text",function() {return '你的最佳判定区间是 ' + format(player.j.pdqja) + 'ms！'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ],
     unlocked() {return hasMilestone('j',0)}
    },
},
pdqj1() {
 let a=n(player.j.pdqj0)
 let b=n(1).div(n(500).div(a.max(1)).pow(0.5))
 //if(a<…)以后再说
 return b
},
pdqj2() {
 let a=n(player.j.pdqj0)
 let b=n(n(1).div((n(500).sub(a)).pow(0.5).max(1))).pow(0.5)
 //if(a<…)以后再说
 return b
},
pdqj3() {
 let a=n(player.j.pdqj0)
 let b=n(1).sub((n(500).sub(a)).mul(0.002).max(0))
 //if(a<…)以后再说
 return b
},
update(diff) {
if(gcs('j',11)==0) {
player.j.pdqj0=player.j.pdqj;
player.j.theme=options.theme
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
    effectDescription: "解锁判定区间升级，解锁判定升级",
    done() { return player.j.pdqja.lte(490)}
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
      else {return "退出判定区间挑战！"}
      }
     },
     canClick() {return true},
     onClick() {
      if(gcs('j',11)==0) {setClickableState('j',11,1)
      options.theme=themes[2]
      }
      else {setClickableState('j',11,0) 
       options.theme=player.j.theme
       if(player.points.gte("1e3000000")) {player.pdqja=player.pdqj0.max(player.pdqja)}
      }
       changeTheme()
      doReset('j',true)
     },
     style() { return { 'background-color': gcs(this.layer,this.id)==0?"#e786f0":player.points.gte("1e3000000")?"#ffffff":"#8693f0"}},
    },
   },
   upgrades: {
    
   }
})//judgment