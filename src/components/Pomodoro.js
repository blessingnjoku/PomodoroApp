import React from 'react'
import Labels from "../components/Labels";
import TimeDisplay from "../components/TimeDisplay";
import ToggleButton from "../components/ToggleButton";
import Modal from "../components/Modal";
import useTimer from "../hooks/useTimer";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import useCalculateTime from "../hooks/useCalculateTime";
import { controllers } from "../constants/constants";
import { CiSettings } from "react-icons/ci";
import Task from './Task';

const Pomodoro = () => {
    const { pomodoro, selectedControl, setPomodoro, setSelectedControl, resetTimerValues, getRemainingTimePercentage } = useTimer();
    const { minutes, seconds } = useCalculateTime({ pomodoro, selectedControl });
    const [isSettingsOn, setIsSettingsOn] = useState(false);
  
    document.title = `${controllers[selectedControl].label} - ${minutes < 9 ? "0" : ""}${minutes}:${seconds < 9 ? "0" : ""}${seconds}`;
  return (
    <div className="relative flex flex-col justify-center items-center">
    <Labels
      resetTimerValues={resetTimerValues}
      selectedControl={selectedControl}
      setSelectedControl={setSelectedControl}
      setPomodoro={setPomodoro}
    />
    <div className="tw-timer-container">
      <div className="tw-timer">
        <div className="flex flex-col justify-center items-center font-semibold relative">
          <CircularProgressbarWithChildren
            strokeWidth={2}
            trailColor="transparent"
            value={getRemainingTimePercentage()}
            styles={buildStyles({
              trailColor: "transparent",
              pathColor: "#f87070",
            })}>
            <TimeDisplay
              pomodoro={pomodoro}
              selectedControl={selectedControl}
            />
            <ToggleButton
              pomodoro={pomodoro}
              setPomodoro={setPomodoro}
            />
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
   
    <button onClick={() => setIsSettingsOn(true)} style={{marginTop:'50px', display:'flex', alignItems:'center'}}>
    <CiSettings size={50}/><span>Settings</span>
    </button>
    
    <Modal
      isSettingsOn={isSettingsOn}
      setIsSettingsOn={setIsSettingsOn}
      setPomodoro={setPomodoro}
    />
  </div>
  )
}

export default Pomodoro