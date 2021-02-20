import React from 'react'
import './blocktask.css'

function BlockTask(){
  return(
    <div className="task_block">
      <ul className="left_block">
        <li>
          <h2>Send benefit review by Sunday</h2>
        </li>
        <li>
          <p className="date"><span>Due date:</span>December 23, 2018</p>
        </li>
        <li className="avatar">
          <div className="icon"></div>
          <p className="name">George Fields</p>
        </li>
      </ul>
      <ul className="right_block">
        <li>Reminder</li>
        <li>
          <div className="status status_completed">
            <p>Completed</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default BlockTask