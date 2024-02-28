import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div >
        <h1 style={{fontSize:'50px'}}>Pomodoro</h1>
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <p>Get Productive</p>
        <Link to='pomodoro' style={{padding:'10px 20px', backgroundColor:'#000'}}><button>Set  Timer</button></Link>
        </div>


    </div>
  )
}

export default Home