import React, { useState, useEffect, useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TimerContext } from './TimerContext';

const StopWatch = (props) => {
  const [stoptime, setStoptime] = useState(true);
  const [triggerAfterSecond, setTriggerAfterSecond] = useState(true);
  const [timerList, setTimerList] = useContext(TimerContext);

  let toBeEditedTimerList = [...timerList];

  const startTimer = () => {
    setStoptime(!stoptime);
  };
  function stopTimer() {
    setStoptime(!stoptime);
  }

  useEffect(() => {
    if (!stoptime) {
      console.log('timer is running');
      timerCycle();
      setTimeout(function () {
        setTriggerAfterSecond(!triggerAfterSecond);
      }, 1000);
    } else {
      console.log('timer is stopped');
    }
  }, [stoptime, triggerAfterSecond]);

  const timerCycle = () => {
    if (stoptime === false) {
      setTimerList(
        toBeEditedTimerList.map((timer, index) =>
          props.id === index
            ? {
                ...timer,
                hour:
                  toBeEditedTimerList[props.id].min === 59
                    ? toBeEditedTimerList[props.id].hour + 1
                    : toBeEditedTimerList[props.id].hour,
                min:
                  toBeEditedTimerList[props.id].min === 59
                    ? 0
                    : toBeEditedTimerList[props.id].sec === 59
                    ? toBeEditedTimerList[props.id].min + 1
                    : toBeEditedTimerList[props.id].min,
                sec:
                  toBeEditedTimerList[props.id].sec === 59 ||
                  toBeEditedTimerList[props.id].min === 59
                    ? 0
                    : toBeEditedTimerList[props.id].sec + 1,
              }
            : timer
        )
      );

      console.log(timerList[props.id]);
    }
  };

  const deleteTimer = () => {
    setTimerList(
      toBeEditedTimerList.filter((timer, index) => props.id !== index)
    );
  };

  return (
    <div className='timer'>
      <div className='timer__rowOne'>
        <div className='timer__title'>{props.title}</div>
        <div className='timer__project'>{props.project}</div>
      </div>
      <div className='timer__rowTwo'>
        <div className='timer__timer'>
          {timerList[props.id].hour < 10 ? (
            <span>0{timerList[props.id].hour}</span>
          ) : (
            <span>{timerList[props.id].hour}</span>
          )}
          :
          {timerList[props.id].min < 10 ? (
            <span>0{timerList[props.id].min}</span>
          ) : (
            <span>{timerList[props.id].min}</span>
          )}
          :
          {timerList[props.id].sec < 10 ? (
            <span>0{timerList[props.id].sec}</span>
          ) : (
            <span>{timerList[props.id].sec}</span>
          )}
        </div>
      </div>
      <div className='timer__rowThree'>
        <div
          style={{ marginRight: '0.2em', cursor: 'pointer' }}
          onClick={deleteTimer}>
          <DeleteIcon />
        </div>
        <div style={{ cursor: 'pointer' }} onClick={props.changeEditMode}>
          <EditIcon />
        </div>
      </div>
      {stoptime && (
        <div className='timer__button' onClick={startTimer}>
          Start
        </div>
      )}
      {!stoptime && (
        <div className='timer__buttonRed' onClick={stopTimer}>
          Stop
        </div>
      )}
    </div>
  );
};

export default StopWatch;
