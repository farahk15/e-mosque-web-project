import React from 'react'

export const Media = ({Text , icon}) => {
  return (
    <div style={{display:"flex" , gap : "1.5vw" }}>
    
    <div style={{width:"3vw", height:"3vw"}}>
    <img style={{width:"100%",  margin:"25px 0px 0px 10px"}} src={icon} alt='' />
    </div>
    <p style={{fontSize : "2.5vw" , fontWeight: "bold", margin:"25px 0px 0px 10px"}}>{Text}</p>
    </div>
  )
}
