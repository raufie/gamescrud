import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
    return (

        <AppBar position="static">
            <Toolbar >
                <Typography variant="title" color="inherit">
                    <NavLink className="navlink" to="/" exact >Home</NavLink>
                </Typography>
                <Typography variant="title" color="inherit">
                    <NavLink className="navlink" to="/games/1" exact >All Games</NavLink>
                </Typography>
                <Typography variant="title" color="inherit">
                    <NavLink className="navlink" to="/add" exact >Add Game</NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;