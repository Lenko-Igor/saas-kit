import React from 'react'
import '../styles/dashboard.css'
import Calendar from './Calendar'


function Dashboard(){
  return(
    <div className="wrapper">
      <div className="tasks">
        <Calendar/>
      </div>
      <div className="wrap">
        <div className="deals"></div>
        <div className="task_chart"></div>
      </div>
    </div>
  )
}

export default Dashboard