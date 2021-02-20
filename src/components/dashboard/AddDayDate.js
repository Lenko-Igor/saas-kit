import React from 'react'
import PropTypes from 'prop-types'

function AddDayDate({week, toSelect}){

  return(
    <li onClick={() => toSelect(week)}>
      <p className="day">{week.day.slice(0,3)}</p>
      <div style={{backgroundColor: week.selected && '#109CF1'}}>
        <p className="date"  style={{color: week.selected && '#ffff'}}>{week.dayDate}</p> 
      </div>
    </li>
  )
}

AddDayDate.propTypes = {
  week: PropTypes.object.isRequired,
  toSelect: PropTypes.func,
}

export default AddDayDate