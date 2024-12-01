import React from 'react'
import './profile.css'
export default function Profile(props) {

  return (
    <div className='profile'>
        <img
        src={props.imageUrl} 
        alt='Katherine Johnson'/>
    </div>
  )
}