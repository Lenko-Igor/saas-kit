import React from 'react'
import StatusTools from './StatusTools'
import PropTypes from 'prop-types'

function UnderTools({tools, panelFlag}){
  if(tools.options && tools.active && panelFlag){
    return(
      <ul>
        {tools.options.map((e,i) => {
         return <StatusTools options={e} key={i}/>
        })}
      </ul>
    )
  } else {
    return(
      <ul></ul>
    )
  }
}

UnderTools.propTypes = {
  tools: PropTypes.object,
  panelFlag: PropTypes.bool,
}

export default UnderTools