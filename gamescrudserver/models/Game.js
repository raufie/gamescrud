const mongoose = require("mongoose")
const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    platform: {
        type: String,
        enum: ['PC', 'Mac', "Linux", "PS4", "PS5", "XboxOne", "XboxSeriesX"],
        required: true
    },
    genre: {
        type: String,
        enum: ['FPS', 'RPG', "Strategy", "Board"],
        required: true
    }
})

const Game = mongoose.model("game", GameSchema);
module.exports = Game