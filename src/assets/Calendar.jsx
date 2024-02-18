import Navbar from '../components/Navbar'
import React from 'react'
import Taskbar from '../components/Taskbar'

const Calendar = () => {
  return (
    <div><Navbar active='calendar'/>
    <Taskbar/>
    </div>
  
  )
}

export default Calendar