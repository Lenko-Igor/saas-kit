import React from 'react'
import PropTypes from 'prop-types'

function StatusTools({options}){
  const styles = {
    li: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '35px',
      height: '20px',
      marginBottom: '8px',
      cursor: 'pointer',
    },
    div: {
      width: '8px',
      height: '8px',
      border: `2px solid ${options.color}`,    
      borderRadius: '4px 4px' 
    },
    p: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '13px',
      lineHeight: '19px',
      letterSpacing: '0.01em',
      color: '#334D6E',
      marginLeft: '8px'
    }
  }

  return(
    <li style={styles.li}>
      <div style={styles.div}></div>
      <p style={styles.p}>{options.title}</p>
    </li>
  )
} 

StatusTools.propTypes ={
  options: PropTypes.object.isRequired,
}

export default StatusTools