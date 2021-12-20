const router = require("express").Router();
const GameController = require("../controllers/GameControllers")
router.get("/", GameController.getAllGames) //✅
router.get("/:id", GameController.getGame) //✅
router.get("/page/:page", GameController.getGamesOnPage) //✅
router.post("/", GameController.addGame) //✅
router.put("/:id", GameController.updateGame)//✅
router.delete("/:id", GameController.deleteGame)//✅
module.exports = router;