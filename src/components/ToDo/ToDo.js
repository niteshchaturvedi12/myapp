import React from 'react'
import './ToDo.css'

const today = new Date()

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long'}
  ).format(date);
}
export default function ToDo() {
  const name = "Hedy Lamarr";
  return (
    <div className='container todo'>
        <h1>{name}'s Todos for {formatDate(today)}</h1>
        <img src='https://i.imgur.com/yXOvdOSs.jpg' alt={name} className='photo'/>
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
    </div>
  )
}
