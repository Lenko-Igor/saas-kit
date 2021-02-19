import React, {useContext} from 'react'
import '../styles/profile.css'
import Context from '../context'
import PropTypes from 'prop-types'

function Profile(){
  const {panelFlag} = useContext(Context)

  return(
    <div className="profile" style={{margin: panelFlag || '0px'}}>
      <div className="avatar" style={{margin: panelFlag || '0px'}}></div>  
      <ul style={{display: panelFlag || 'none'}}>
        <li className="name">Sierra Ferguson</li>
        <li className="email">s.ferguson@gmail.com</li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  panelFlag: PropTypes.bool,
}

export default Profile