import React from 'react'
import './ToDo.css'

export default function ToDo() {
  return (
    <div className='container todo'>
        <h1>Hedy Lamarr's Todos</h1>
        <img src='https://i.imgur.com/yXOvdOSs.jpg' alt='Hedy Lamarr' className='photo'/>
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
    </div>
  )
}
