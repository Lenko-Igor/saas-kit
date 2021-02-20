import React, {useContext} from 'react'
import './week.css'
import AddDayDate from './AddDayDate'
import Context from '../context'


function Week(){
  const {date, weeks, toSelect, months} = useContext(Context)


  let dayDate = ''
  let dayWeek = ''

  weeks.forEach(e => {
    if(e.selected){
      dayDate = e.dayDate
      dayWeek = e.day
    }
  })

  return(
    <div className="week">
      <h2>{dayDate} {months[date.getMonth()]}, {dayWeek}</h2>
      <ul>
        {weeks.map((e,i) => {
          return <AddDayDate week={e} toSelect={toSelect} key={i}/>
        })}
      </ul>
    </div>
  )
}

export default Week