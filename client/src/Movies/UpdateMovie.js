import React, { useState } from 'react'

export function UpdateMovie(props) {
    const [update, setUpdate] = useState({
        id: props.match.params.id,
        title: '',
        director: '',
        metascore: '',
        stars: []
    })
    const [starHandle, setStarHandle] = useState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(update)
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
            {update.stars.map((item) => {
                return <p>{item}</p>
            })}
            <button type='submit'>Update Movie</button>
        </form>
    )
}