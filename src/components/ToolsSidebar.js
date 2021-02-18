import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import UnderTools from './UnderTools'

function ToolsSidebar({tools}){
  const {changeColor} = useContext(Context)
  const classes = `${tools.active && 'active'}`

  return(
    <li className="tools">
      <a 
        href="!#" 
        className={classes} 
        onClick={()=> {changeColor(tools.title)}}
      >
        <div 
          className="icon" 
          style={{background: `url(${tools.img}) no-repeat`,}}
        />
        <p>{tools.title}</p>
      </a>
        <UnderTools tools={tools}/>
    </li>
  )
}

ToolsSidebar.propTypes = {
  tools: PropTypes.object.isRequired,
  changeColor: PropTypes.func,
}

export default ToolsSidebar

