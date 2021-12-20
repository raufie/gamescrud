import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../../config/restUrl'
const Card = (props) => {
    const navigate = useNavigate();
    const goToEdit = () => {
        navigate("/edit/" + props._id, { state: props.api })
    }
    const deleteGame = () => {
        axios.delete(`${apiUrl}/${props._id}`).then(res => {
            window.location.reload();
        }).catch(e => {
            alert("Error deleting game")
        })
    }
    return <Paper className="card" display="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div>
            <div className="card-header" style={{ margin: 'auto 2.5%' }}>
                <h3>{props.name}</h3>
            </div>
            <div className="card-body" style={{ margin: 'auto 3.5%' }}>
                <p>{props.description}</p>
                <p>{props.genre}</p>
                <p>{props.platform}</p>
            </div>
        </div>
        <div display="grid" style={{
            display: "grid",
            gridTemplateRows: "repeat(2,1fr)",
            width: "50%",
            height: "50%",
            marginTop: "4%"

        }}>
            <Button onClick={goToEdit} className="button" color="primary" variant="contained"
                style={{ marginTop: "5%" }}
            >Edit</Button>
            <Button variant="contained"
                className="button" onClick={deleteGame}
                style={{
                    backgroundColor: "rgba(219, 26, 0, 0.87)", color: "white"
                    , marginTop: "5%"
                }}

            >Delete</Button>
        </div>
    </Paper>
}
export default Card;
