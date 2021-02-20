import React from 'react'
import './calendar.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Week from './Week'


function Calendar(){

  return(
    <div className="calendar">
      <div className="table_progress">
        <div>
          <p>8 task completed out of 10</p>
          <div className="select">
            <select name="" id="">
              <option value="1">This week</option>
              <option value="2">Next week</option>
              <option value="3">Last week</option>
            </select>
          </div>
        </div>
        <ProgressBar variant="success" now={80} />
      </div>
        <Week/>
    </div>
  )
}

export default Calendar