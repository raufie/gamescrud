import React, { Component, useState, useEffect } from 'react';
import { Paper } from '@material-ui/core'
import { useParams, Link } from 'react-router-dom'
import _ from 'lodash'
import Card from './Card'
import './pagination.css'
import axios from 'axios'
import { apiUrl } from '../../config/restUrl'

//create a card component that uses material ui
const AllGames = (props) => {
    const [games, setGames] = useState([{
        name: "test",
        description: "test",
        genre: "test",
        platform: "test",
    }, {
        name: "test",
        description: "test",
        genre: "test",
        platform: "test",
    }, {
        name: "test",
        description: "test",
        genre: "test",
        platform: "test",
    }]);
    const { page } = useParams();
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        axios.get(`${apiUrl}/page/${page}`).then(res => {

            setGames(res.data.games)
            setPageCount(res.data.pages)

        })
    }, [page])
    return (
        <div>
            {games.map((game, index) => {
                return <Card
                    name={game.name}
                    description={game.description}
                    genre={game.genre}
                    platform={game.platform}
                    _id={game._id}

                />
            })}
            <div className="pagination_div">
                <h1>Page</h1>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="pagenumber">
                        {page == 1 ? <button>&lt;
                        </button>
                            : <Link to={`/games/${parseInt(page) - 1}`}>
                                <button>&lt;
                                </button>
                            </Link>}
                    </div>
                    {
                        _.range(pageCount).map((index) => {
                            return <div className="pagenumber" style={page == (index + 1) ? { border: 'solid' } : {}}>
                                <Link to={"/games/" + (parseInt(index) + 1)}>
                                    {index + 1}
                                </Link>
                            </div>
                        })

                    }
                    <div className="pagenumber">
                        {page == pageCount ? <button>&gt;
                        </button>
                            : <Link to={`/games/${parseInt(page) + 1}`}>
                                <button>&gt;
                                </button>
                            </Link>}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default AllGames;