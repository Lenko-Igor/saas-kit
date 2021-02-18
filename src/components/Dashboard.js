import React from 'react'
import '../styles/dashboard.css'
import img from '../img/dashboard.svg'

function Dashboard(){
  return(
    <div className="wrapper">
      <div className="tasks">
      </div>
      <div className="wrap">
        <div className="deals"></div>
        <div className="task_chart"></div>
      </div>
    </div>
  )
}

export default Dashboard