import React from 'react'
import ProfileImage from './ProfileImage'
import './imageProfile.css'

export default function ImageProfile() {
  return (
    <div className='container image-profile'>
        <ProfileImage person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
        }} size={100}/>
        <ProfileImage person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
        }} size={80}/>
        <ProfileImage person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
        }} size={50}/>
    </div>
  )
}
