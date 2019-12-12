import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {api} from '../utils/api'

export function UpdateMovie(props) {
    const [update, setUpdate] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    })
    const [starHandle, setStarHandle] = useState('')

    useEffect(() => {
        api().get(`movies/${props.match.params.id}`)
            .then(res => {
                setUpdate(res.data)
            })
            .catch(err => console.log(err))

    }, [props.match.params.id])

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            api().put(`/movies/${update.id}`, update)
            props.history.push('/')
        }}>
            <input
                name='title'
                placeholder='Title'
                value={update.title}
                onChange={(e) => {
                    setUpdate({...update, [e.target.name]: e.target.value})
                }}
            />
            <input
                name='director'
                placeholder='Director'
                value={update.director}
                onChange={(e) => {
                    setUpdate({...update, [e.target.name]: e.target.value})
                }}
            />
            <input
                name='metascore'
                placeholder='Meta Score'
                value={update.metascore}
                onChange={(e) => {
                    setUpdate({...update, [e.target.name]: e.target.value})
                }}
            />
            <input
                name='stars'
                placeholder='Stars'
                value={starHandle}
                onChange={(e) => {
                    setStarHandle(e.target.value)
                }}
            />
            <h5>Stars</h5>
            <button onClick={(e) => {
                e.preventDefault()
                setUpdate({...update, stars: [...update.stars, starHandle]})
                setStarHandle('')
            }}>Add Stars</button>
            {update.stars.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
            <button type='submit'>Update Movie</button>
        </form>
    )
}
