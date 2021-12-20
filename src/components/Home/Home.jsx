import React, { Component } from 'react';
import { Box, Item, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './home.css'
const Home = () => {
    const navigate = useNavigate();
    const moveToAdd = (e) => {
        navigate(`/add`)
    }
    const moveToGames = (e) => {
        navigate(`/games/1`)

    }
    return (
        <div>
            <h1 display="flex" className="homeh1">Welcome to Games Crud</h1>
            <Box display="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <div className="home-card">
                    <h1>
                        Add Games
                    </h1>
                    <Button variant="contained" color="primary" onClick={moveToAdd}>
                        Add Game
                    </Button>
                </div>
                <div className="home-card">
                    <h1>
                        View All Games
                    </h1>
                    <Button variant="contained" color="primary" onClick={moveToGames} >
                        All Games
                    </Button>
                </div>
            </Box>
        </div>
    );
}
export default Home;