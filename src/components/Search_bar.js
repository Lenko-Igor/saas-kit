import React from 'react'
import '../styles/search.css'
import PropTypes from 'prop-types'

function Search_bar({placeholder}){

  return(
    <div className="search_bar">
      <form>
        <input className="submit" type="submit" value=""/> 
        <input className="search" type="search" name="" id="" placeholder={placeholder}/>
      </form>
      <div className="notification">
        <div className="ellips on"/>
      </div>
    </div>
  )
}

Search_bar.propTypes = {
  placeholder: PropTypes.string,
}

export default Search_bar