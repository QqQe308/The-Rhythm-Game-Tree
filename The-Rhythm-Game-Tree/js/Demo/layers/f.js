// This layer is mostly minimal but it uses a custom prestige type and a clickable
addLayer("f", {
    infoboxes:{
        coolInfo: {
            title: "Lore",
            titleStyle: {'color': '#FE0000'},
            body: "DEEP LORE!",
            bodyStyle: {'background-color': "#0000EE"}
        }
    },

    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        boop: false,
        clickables: {[11]: "Start"}, // Optional default Clickable state
    }},
    color: "#FE0102",
    requires() {return new Decimal(10)}, 
    resource: "farm points", 
    baseResource: "points", 
    baseAmount() {return player.points},
    type: "static",
    exponent: 0.5,
    base: 3,
    roundUpCost: true,
    canBuyMax() {return false},
    //directMult() {return new Decimal(player.c.otherThingy)},

    row: 1,
    layerShown() {return true}, 
    branches: ["c"], // When this layer appears, a branch will appear from this layer to any layers here. Each entry can be a pair consisting of a layer id and a color.

    tooltipLocked() { // Optional, tooltip displays when the layer is locked
        return ("This weird farmer dinosaur will only see you if you have at least " + this.requires() + " points. You only have " + formatWhole(player.points))
    },
    midsection: [
        "blank", ['display-image', 'https://images.beano.com/store/24ab3094eb95e5373bca1ccd6f330d4406db8d1f517fc4170b32e146f80d?auto=compress%2Cformat&dpr=1&w=390'],
        ["display-text", "Bork bork!"]
    ],
    // The following are only currently used for "custom" Prestige type:
    prestigeButtonText() { //Is secretly HTML
        if (!this.canBuyMax()) return "Hi! I'm a <u>weird dinosaur</u> and I'll give you a Farm Point in exchange for all of your points and lollipops! (At least " + formatWhole(tmp[this.layer].nextAt) + " points)"
        if (this.canBuyMax()) return "Hi! I'm a <u>weird dinosaur</u> and I'll give you <b>" + formatWhole(tmp[this.layer].resetGain) + "</b> Farm Points in exchange for all of your points and lollipops! (You'll get another one at " + formatWhole(tmp[this.layer].nextAtDisp) + " points)"
    },
    getResetGain() {
        return getResetGain(this.layer, useType = "static")
    },
    getNextAt(canMax=false) { //  
        return getNextAt(this.layer, canMax, useType = "static")
    },
    canReset() {
        return tmp[this.layer].baseAmount.gte(tmp[this.layer].nextAt)
    },
    // This is also non minimal, a Clickable!
    clickables: {

        masterButtonPress() {
            if (getClickableState(this.layer, 11) == "Borkened...")
                player[this.layer].clickables[11] = "Start"
        },
        masterButtonText() {return (getClickableState(this.layer, 11) == "Borkened...") ? "Fix the clickable!" : "Does nothing"}, // Text on Respec button, optional
        11: {
            title: "Clicky clicky!", // Optional, displayed at the top in a larger font
            display() { // Everything else displayed in the buyable button after the title
                let data = getClickableState(this.layer, this.id)
                return "Current state:<br>" + data
            },
            unlocked() { return player[this.layer].unlocked }, 
            canClick() {
                return getClickableState(this.layer, this.id) !== "Borkened..."},
            onClick() { 
                switch(getClickableState(this.layer, this.id)){
                    case "Start":
                        player[this.layer].clickables[this.id] = "A new state!"
                        break;
                    case "A new state!":
                        player[this.layer].clickables[this.id] = "Keep going!"
                        break;
                    case "Keep going!":
                        player[this.layer].clickables[this.id] = "Maybe that's a bit too far..."
                        break;                        
                    case "Maybe that's a bit too far...":
                        makeParticles(coolParticle, 4)
                        player[this.layer].clickables[this.id] = "Borkened..."
                        break;
                    default:
                        player[this.layer].clickables[this.id] = "Start"
                        break;
                }
            },
            onHold(){
                console.log("Clickkkkk...")
            },
            style() {
                switch(getClickableState(this.layer, this.id)){
                    case "Start":
                        return {'background-color': 'green'}
                        break;
                    case "A new state!":
                        return {'background-color': 'yellow'}
                        break;
                    case "Keep going!":
                        return {'background-color': 'orange'}
                        break;                        
                    case "Maybe that's a bit too far...":
                        return {'background-color': 'red'}
                        break;
                    default:
                        return {}
                        break;
            }},
        },
    },

}, 
)

const coolParticle = {
    image:"options_wheel.png",
    spread: 20,
    gravity: 2,
    time: 3,
    rotation (id) {
        return 20 * (id - 1.5) + (Math.random() - 0.5) * 10
    },
    dir() {
        return (Math.random() - 0.5) * 10
    },
    speed() {
        return (Math.random() + 1.2) * 8 
    },
    onClick() {
        console.log("yay")
    },
    onMouseOver() {
        console.log("hi")
    },
    onMouseLeave() {
        console.log("bye")
    },
    update() {
        //this.width += 1
        //setDir(this, 135)
    },
    layer: 'f',
}