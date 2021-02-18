import React from 'react'
import '../styles/search.css'

function Search_bar(){
  return(
    <div className="search_bar">
      <form>
        <input className="submit" type="submit" value=""/> 
        <input className="search" type="search" name="" id="" placeholder="Search for a contact"/>
      </form>
      <div className="notification">
        <div className="ellips on"/>
      </div>
    </div>
  )
}

export default Search_bar