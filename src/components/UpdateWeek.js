import React from 'react'
import PropTypes from 'prop-types'

function UpdateWeek({week}){
  return(
    <li>
     {week}
    </li>
  )
}

UpdateWeek.propTypes = {
  week: PropTypes.string.isRequired,
}

export default UpdateWeek