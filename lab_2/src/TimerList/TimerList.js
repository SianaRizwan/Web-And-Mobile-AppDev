import React, { useContext } from 'react';
import Timer from '../Timer/Timer';
import { TimerContext } from '../TimerContext';
import './TimerList.css';

const TimerList = () => {
  const [timerList, setTimerList] = useContext(TimerContext);
  return (
    <div>
      {timerList.map((timer, index) => (
        <Timer
          key={index}
          id={index}
          title={timer.title}
          project={timer.project}
          timer={timer.timer}
          editMode={timer.editMode}
          timerList={timerList}
          setTimerList={setTimerList}
        />
      ))}
    </div>
  );
};

export default TimerList;
