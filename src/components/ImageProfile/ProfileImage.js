import React from 'react'
import { getImageUrl } from "../../utils/MyUtil";
import './profileImage.css'

export default function ProfileImage({person, size}) {
  console.log(size);
  return (
    <div className='profile-image'>
      <img src={getImageUrl(person)} alt={person.name} width={size} height={size}/>
    </div>
  )
}
