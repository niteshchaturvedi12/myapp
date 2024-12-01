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
            <Profile imageUrl='https://i.imgur.com/MK3eW3Am.jpg'/>
            <Profile imageUrl='https://i.imgur.com/jUuCc6d.jpeg'/>
            <Profile imageUrl='https://i.imgur.com/XoITT88.jpeg'/>
            <Profile imageUrl='https://i.imgur.com/vltbbqw.jpeg'/>
            <Profile imageUrl='https://i.imgur.com/PXLLote.jpeg'/>
          </div>
        </section>
    </div>
  )
}