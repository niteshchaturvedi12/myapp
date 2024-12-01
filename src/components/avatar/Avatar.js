import React from 'react'
import './avatar.css'

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
  return (
    <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img src={avatar} alt={description} style={{borderRadius: '100%'}}/>
        <ul>
            <li>Improve the videophone</li>
            <li>prepare aeronautics lectures</li>
            <li>work on the alcohol fueled engine</li>
        </ul>
    </div>
  )
}
