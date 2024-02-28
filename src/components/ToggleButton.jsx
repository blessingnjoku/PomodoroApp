import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const ToggleButton = ({ pomodoro, setPomodoro }) => {
  function togglePausePlay() {
    setPomodoro((prevPomodoro) => {
      return {
        ...prevPomodoro,
        isPaused: !prevPomodoro.isPaused,
      };
    });
  }

  return (
    <button
      onClick={togglePausePlay}
      className="text-base uppercase tracking-[0.5rem]">
      {pomodoro.isPaused ? <FaPlay size={50} />:<FaPause  size={50}/>}
    </button>
  );
};

export default ToggleButton;
