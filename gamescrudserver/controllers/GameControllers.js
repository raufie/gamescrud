/*
crud
read-with pagination
get total page count
*/
const Game = require("../models/Game")
const addGame = async (req, res, next) => {
    try {
        const game = await Game.create(req.body)
        res.status(200).send(game)
    } catch {
        res.status(400).send({
            error: "could not create game"
        })
    }
    next();
}

const deleteGame = async (req, res, next) => {
    try {
        const game = await Game.deleteOne({ _id: req.params.id })
        res.status(200).send(game)
    } catch {
        res.status(400).send({
            error: "could not delete game"
        })
    }
    next();
}

const getAllGames = async (req, res, next) => {
    try {
        const games = await Game.find();
        res.status(200).send(games)
    } catch {
        res.status(400).send({
            error: "could not find games"
        })
    }
    next();
}
const getGame = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const game = await Game.findById(req.params.id)
        if (!game) {
            res.status(404).send({
                error: "game not found"
            })
        } else {
            res.status(200).send(game)
        }
    } catch (e) {
        res.status(400).json({
            error: "error getting game with specific id"
        })
    }
    next();
}
const updateGame = async (req, res, next) => {
    try {
        const info = await Game.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "updated succesfully" })
    } catch {
        res.status(400).send({
            error: "could not update game"
        })
    }
    next();
}

// 
const getGamesOnPage = async (req, res, next) => {
    const games = await Game.find()
        .skip((req.params.page - 1) * 10)
        .limit(10);
    const gamesCount = await Game.count()
    const pages = parseInt(Math.ceil(gamesCount / 10));
    res.status(200).json({
        games,
        pages
    })
}

exports.getGamesOnPage = getGamesOnPage
exports.getGame = getGame
exports.updateGame = updateGame
exports.getAllGames = getAllGames
exports.deleteGame = deleteGame
exports.addGame = addGame