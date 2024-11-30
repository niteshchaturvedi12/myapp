import React from 'react'
// import Profile from '../profile/profile.js';

function Profile() {
  return (
    <div className='profile'>
        <img 
        src='https://i.imgur.com/MK3eW3Am.jpg' 
        alt='Katherine Johnson'/>
    </div>
  )
}

export default function Gallery() {
  return (
    <>
      <h2>Amazing Scientists</h2>
      <section className='gallery'>
          <Profile />
          <Profile />
          <Profile />
      </section>
    </>
  )
}