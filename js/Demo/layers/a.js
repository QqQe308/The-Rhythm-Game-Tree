
// A side layer with achievements, with no prestige
addLayer("a", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "achievement power", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievementPopups: true,
    achievements: {
        11: {
            image: "discord.png",
            name: "Get me!",
            done() {return true}, // This one is a freebie
            goalTooltip: "How did this happen?", // Shows when achievement is not completed
            doneTooltip: "You did it!", // Showed when the achievement is completed
        },
        12: {
            name: "Impossible!",
            done() {return false},
            goalTooltip: "Mwahahaha!", // Shows when achievement is not completed
            doneTooltip: "HOW????", // Showed when the achievement is completed
            textStyle: {'color': '#04e050'},
        },
        13: {
            name: "EIEIO",
            done() {return player.f.points.gte(1)},
            tooltip: "Get a farm point.\n\nReward: The dinosaur is now your friend (you can max Farm Points).", // Showed when the achievement is completed
            onComplete() {console.log("Bork bork bork!")}
        },
    },
    midsection: ["grid", "blank"],
    grid: {
        maxRows: 3,
        rows: 2,
        cols: 2,
        getStartData(id) {
            return id
        },
        getUnlocked(id) { // Default
            return true
        },
        getCanClick(data, id) {
            return player.points.eq(10)
        },
        getStyle(data, id) {
            return {'background-color': '#'+ (data*1234%999999)}
        },
        onClick(data, id) { // Don't forget onHold
            player[this.layer].grid[id]++
        },
        getTitle(data, id) {
            return "Gridable #" + id
        },
        getDisplay(data, id) {
            return data
        },
    },
},
)