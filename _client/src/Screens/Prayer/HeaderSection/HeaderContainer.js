import React, { useEffect, useMemo, useState } from 'react'
import  Temp  from '../../../components/Temp/Temp'
import  Date  from '../../../components/Date/Date'
import { Clock } from '../../../components/Clock/Time'
import "./style.css"
import { useSearchParams } from 'react-router-dom'

export const HeaderContainer = ({counter , counter5 , counter180}) => {
 
  return (
    <div className='HeaderContainer'>
        <Temp counter180={counter180}/>
        <Date counter={counter5}/>
        <Clock counter={counter}/>
    </div>
  )
}
