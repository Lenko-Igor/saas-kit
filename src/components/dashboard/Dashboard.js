import React, {useState} from 'react'
import './dashboard.css'
import Calendar from './Calendar'
import Context from '../context'
import BlockTask from './BlockTask'
import Search_bar from '../Search_bar'


const date = new Date()
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June	',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December']


const weeksArr = [
  { day: 'Sunday', selected: false},
  { day: 'Monday', selected: false},
  { day: 'Tuesday', selected: false},
  { day: 'Wednesday', selected: false},
  { day: 'Thursday', selected: false},
  { day: 'Friday', selected: false},
  { day: 'Saturday', selected: false},
].map((e,i) =>{
  e.dayDate = (date.getDate()-date.getDay()) + i
  e.selected = (e.dayDate === date.getDate())
  return e
})


function Dashboard(){
  const [weeks, setWeeks] = useState(weeksArr)

  function toSelect(week){
    setWeeks(
      weeks.map(e => {
        e.selected = (week.day === e.day)
        return e
      })
    )
  }

  return(
    <Context.Provider value={{date, weeks, toSelect, months}}>
      <div>
        <Search_bar placeholder={'Global search'}/>
        <div className="wrapper">
          <div className="tasks">
            <Calendar/>
            <div className="blocks_tasks">
              <BlockTask/>
              <BlockTask/>
              <BlockTask/>
              <button>Show more</button>
            </div>
          </div>
          <div className="wrap">
            <div className="deals"></div>
            <div className="task_chart"></div>
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}

export default Dashboard