import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import UnderTools from './UnderTools'

function ToolsSidebar({tools}){
  const {toActive} = useContext(Context)
  const classes = `tools ${tools.active && 'active'}`

  return(
    <li className={classes} 
        onClick={()=> {toActive(tools.title)}}
    >
        <div 
          className="icon" 
          style={{background: `url(${tools.img}) no-repeat`,}}
        />
        <p>{tools.title}</p>
        <UnderTools options={tools.options}/>
    </li>
  )
}

ToolsSidebar.propTypes = {
  tools: PropTypes.object.isRequired,
  toActive: PropTypes.func,
}

export default ToolsSidebar

