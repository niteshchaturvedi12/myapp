import React from 'react'
import Profile from '../profile/profile.js';
import './Gallery.css'

export default function Gallery() {
  return (
    <div className='container gallery'>
        <h1>My Gallery Component</h1>
        <h2>Amazing Scientists</h2>
        <section >
          <div className='profile-row'>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
        </section>
    </div>
  )
}