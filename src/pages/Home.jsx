import React from 'react'
import { Link } from 'react-router-dom'
import pomoLogo from '../assets/pomoLogo.png'
const Home = () => {
  return (
    <div >
        <div style={{display:'flex', alignItems:'center' }}>
        <img src={pomoLogo} alt="" style={{borderRadius:'50%',width:'30px', height:'30px', objectFit:'cover'}}/>
        <h1 style={{fontSize:'50px'}}>Pomodoro</h1>

        </div>
    
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <p>Get Productive</p>
        <Link to='pomodoro' style={{padding:'10px 20px', backgroundColor:'#000', marginLeft:'10px'}}><button>Set  Your Focus Timer</button></Link>
        </div>


    </div>
  )
}

export default Home