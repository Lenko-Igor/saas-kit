import React, {useState} from 'react'
import '../styles/panel.css'
import Context from '../context'
import Profile from './Profile'
import MenuSidebar from './MenuSidebar'
import settings from '../img/settings.svg'
import toggle from '../img/toggle.svg'
import dashboard from '../img/dashboard.svg'
import tasks from '../img/tasks.svg'
import email from '../img/email.svg'
import contacts from '../img/contacts.svg'
import chat from '../img/chat.svg'
import deals from '../img/deals.svg'


function Panel(){
  const [tools, setTools] = useState([
    {title:'Dachboard', img: dashboard, active:true},
    {title:'Tasks', img: tasks, active:false, options:[
      {title: 'Active', color:'#FFB946'},
      {title: 'Completed', color:'#2ED47A'},
      {title: 'Ended', color:'#F7685B'},
    ]},
    {title:'Email', img: email, active:false, options:[
      {title: 'Draft', color:'#FFB946'},
      {title: 'Scheduled', color:'#885AF8'},
      {title: 'Sent', color:'#2ED47A'},
      {title: 'Archived', color:'#F7685B'},
    ]},
    {title:'Contacts', img: contacts, active:false},
    {title:'Chat', img: chat, active:false},
    {title:'Deals', img: deals, active:false, options:[
      {title: 'Low', color:'#FFB946'},
      {title: 'High', color:'#2ED47A'},
      {title: 'Urgent', color:'#F7685B'},
    ]},
  ])
  const [setting, setSetting] = useState([
    {title:'Settings', img: settings, active:false},
    {title:'Toggle sidebar', img: toggle, active:false},
  ])

  function toActive(title){
    setTools(tools.map(e=> {
      e.title === title ? e.active = true : e.active=false
      return e
    }))
    setSetting(setting.map(e=> {
      e.title === title ? e.active = true : e.active=false
      return e
    }))

  }

  return (
    <Context.Provider value={{toActive}}>
      <div className="panel">
        <div className="title">
          <h1>SaaS Kit</h1>
        </div>
        <Profile/>
        <div className="menu_sidebar">
          <MenuSidebar tools={tools}/>
        </div>
        <div className="setting">
          <MenuSidebar tools={setting}/>
        </div>
      </div>
    </Context.Provider>
  )
}

export default Panel