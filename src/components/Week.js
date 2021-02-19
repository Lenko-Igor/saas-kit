import React from 'react'
import '../styles/week.css'
import UpdateWeek from './UpdateWeek'

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

  const weeks = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
function Week({date}){
 
  return(
    <div className="week">
      <h2>{date.getDate()} {months[date.getMonth()]}, {weeks[date.getDay()]}</h2>
      <ul className="title_week">
        {weeks.map((e,i) => {
          return <UpdateWeek week={e.slice(0,3)} key={i}/>
        })}
      </ul>
      <ul className="date_week">
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
      </ul>
    </div>
  )
}

export default Week