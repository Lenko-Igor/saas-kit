import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import UnderTools from './UnderTools'

function ToolsSidebar({tools}){
  const {changeColor, toCloseOpenPanel, panelFlag} = useContext(Context)
  const classes = `${tools.active && 'active'}`

  return(
    <li className="tools">
      <a 
        href="!#" 
        className={classes} 
        onClick={(event)=> {
          event.preventDefault()

          if(tools.title === 'Toggle sidebar'){ 
            toCloseOpenPanel() 
            panelFlag? tools.active = true : tools.active = false
          } else {
            changeColor(tools.title)
          }
        }}
      >
        <div 
          className="icon" 
          style={{background: `url(${tools.img}) no-repeat`,}}
        />
        <p>{panelFlag && tools.title}</p>
      </a>
        <UnderTools tools={tools} panelFlag={panelFlag}/>
    </li>
  )
}

ToolsSidebar.propTypes = {
  tools: PropTypes.object.isRequired,
  changeColor: PropTypes.func,
  toCloseOpenPanel: PropTypes.func,
  panelFlag: PropTypes.bool,
}

export default ToolsSidebar

