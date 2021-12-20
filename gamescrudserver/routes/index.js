const router = require("express").Router();
const Game = require("../models/Game")

router.get("/", (req, res) => {
    res.render("index")
})
router.get("/addgame", (req, res) => {
    res.render("addgame.ejs", {
        platforms: ['PC', 'Mac', "Linux", "PS4", "PS5", "XboxOne", "XboxSeriesX"],
        genres: ['FPS', 'RPG', "Strategy", "Board"]
    })
})
router.get("/allgames", async (req, res) => {
    const games = await Game.find({})
    res.render("games", { games })

})
module.exports = router;