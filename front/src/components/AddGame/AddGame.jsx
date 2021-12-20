import React, { Component, useState, useEffect } from 'react';
import { Input, Typography, Button, Paper, TextField } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Dropdown from './Dropdown'
import './addGame.css'
import { apiUrl } from '../../config/restUrl';
const AddGame = (props) => {
    // use same for edit using props.isForEdit = true
    //input, add/edit button with different ajax calls
    const [gameData, setGameData] = useState({});
    const [disable, setDisable] = useState(false);
    const [initialPlatformOption, setInitialPlaformOption] = useState(null);
    const [initalGenreOption, setInitialGenreOption] = useState(null);

    const [requestMessage, setRequestMessage] = useState("");

    const { id } = useParams()

    const addGame = (e) => {
        if (isFormComplete()) {
            setDisable(true)
            axios.post(`${apiUrl}/`, gameData).then(res => {
                setRequestMessage("Game Added Successfully")
                setDisable(false)

            }
            ).catch(e => {
                setRequestMessage("Error Adding game")
                setDisable(false)
            })

        } else {
            alert('Form is incomplete');
        }

        // setDisable(true)
    }
    const editGame = () => {
        if (isFormComplete()) {
            setDisable(true)
            axios.put(`${apiUrl}/${gameData._id}`, gameData).then(res => {
                setRequestMessage("Game Edited Successfully")
                setDisable(false)

            }
            ).catch(e => {
                setRequestMessage("Error editing game")
                setDisable(false)

            })
        } else {
            alert('Form is incomplete');
        }
    }

    const onTextChange = (e) => {
        setGameData({ ...gameData, [e.target.getAttribute('name')]: e.target.value });
    }
    const isFormComplete = () => {
        if (gameData.name && gameData.description && gameData.genre && gameData.platform) {
            return true;
        } else {
            return false;
        }
    }
    useEffect(() => {

        if (props.isForEdit) {
            setRequestMessage("Loading...")

            axios.get(`${apiUrl}/${id}`).then(res => {
                setGameData(res.data);
                setInitialPlaformOption(res.data.platform);
                setInitialGenreOption(res.data.genre);
                setRequestMessage("")

            }).catch(err => {
                console.log("couldn't load up")
                setRequestMessage("404 Not Found")
            })
        }
    }, [])
    if (props.isForEdit && !gameData._id) {
        return <div>
            <h1>{requestMessage || "Loading"}</h1>
        </div>
    } else {
        return (
            <div className="addGame">
                <Paper display="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                    <TextField
                        onChange={onTextChange}
                        value={gameData.name}
                        label={"Name"}
                        name={"name"}
                    />
                    <TextField
                        onChange={onTextChange}
                        value={gameData.description}
                        label={"Description"}
                        name={"description"}
                    />
                    <Dropdown gameData={gameData} setGameData={setGameData} label={"Platform"} options={{ name: "platform", options: ['PC', 'Mac', "Linux", "PS4", "PS5", "XboxOne", "XboxSeriesX"] }} initalOption={initialPlatformOption} />
                    <Dropdown gameData={gameData} setGameData={setGameData} label={"Genre"} options={{ name: "genre", options: ['FPS', 'RPG', "Strategy", "Board"] }} initalOption={initalGenreOption} />

                    {props.isForEdit ? <Button onClick={editGame} disabled={disable}

                        style={disable ? {} : { backgroundColor: "rgba(0, 129, 11, 0.876)", color: "white" }} >

                        Save Edit
                    </Button> : <Button variant="contained" color="primary"
                        style={disable ? {} : {
                            backgroundColor: 'rgba(0, 113, 241, 0.91)'
                        }}
                        onClick={addGame}
                        disabled={disable}
                    > Add Game</Button>}
                    <Typography variant="h6" style={{ color: "red" }}>{requestMessage}</Typography>
                </Paper>
            </div >
        )
    }

}
export default AddGame;