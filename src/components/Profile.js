import React from 'react'
import '../styles/profile.css'

function Profile(){
  return(
    <div className="profile">
      <div className="avatar"></div>  
      <ul>
        <li className="name">Sierra Ferguson</li>
        <li className="email">s.ferguson@gmail.com</li>
      </ul>
    </div>
  )
}

export default Profile