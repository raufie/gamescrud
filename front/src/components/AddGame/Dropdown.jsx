import React, { Component, useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import './dropdown.css'

const Dropdown = (props) => {
    const [value, setValue] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value)
        props.setGameData({ ...props.gameData, [props.options.name]: e.target.value });
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value || props.initalOption}
                label={props.label}
                onChange={handleChange}
            >
                {props.options.options.map((option, index) => {
                    return <MenuItem value={option}>{option}</MenuItem>

                })}

            </Select>
        </FormControl>
    )
}

export default Dropdown;