import React from 'react'
import '../styles/calendar.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Week from './Week'

function Calendar(){
  const date = new Date()


  return(
    <div className="calendar">
      <div className="table_progress">
        <div>
          <p>8 task completed out of 10</p>
          <div className="select">
            <select name="" id="">
              <option value="1">Last week</option>
              <option value="2">This week</option>
              <option value="3">Next week</option>
            </select>
          </div>
        </div>
        <ProgressBar variant="success" now={80} />
      </div>
        <Week date={date}/>
    </div>
  )
}

export default Calendar