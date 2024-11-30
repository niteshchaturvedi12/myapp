import React from 'react'
import Profile from '../profile/profile.js';

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