import React from 'react'
import Profile from '../profile/profile.js';

export default function Gallery() {
  return (
    <section className='gallery'>
        <h2>Amazing Scientists</h2>
        <Profile />
        <Profile />
        <Profile />
    </section>
  )
}