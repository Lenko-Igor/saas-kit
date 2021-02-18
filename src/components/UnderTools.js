import React from 'react'
import StatusTools from './StatusTools'

function UnderTools({options}){

  if(options){
    return(
      <ul>
        {options.map((e,i) => {
         return <StatusTools options={e} key={i}/>
        })}
      </ul>
    )
  } else {
    return(
      <ul></ul>
    )
  }
}

export default UnderTools