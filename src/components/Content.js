import React from 'react'
import Search_bar from './Search_bar'
import Dashboard from './Dashboard'

function Content(){
  return(
    <div className="content">
      <Search_bar/>
      <Dashboard/>
    </div>
  )
}

export default Content