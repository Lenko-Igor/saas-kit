import React from 'react'
import ToolsSidebar from './ToolsSidebar'
import PropTypes from 'prop-types'



function MenuSidebar({tools}){

  return(
    <ul>
        {tools.map((e, i) =>{
          return <ToolsSidebar tools={e} key={i} />
        })}
    </ul>
  )
}

export default MenuSidebar

MenuSidebar.propTypes = {
  tools : PropTypes.arrayOf(PropTypes.object).isRequired,
}