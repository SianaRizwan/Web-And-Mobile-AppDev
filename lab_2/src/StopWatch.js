import React, { useState, useEffect, useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TimerContext } from './TimerContext';

const StopWatch = (props) => {
  const [stoptime, setStoptime] = useState(true);
  const [triggerAfterSecond, setTriggerAfterSecond] = useState(true);
  const [timerList, setTimerList] = useContext(TimerContext);

  let toBeEditedTimerList = [...timerList];

  function startTimer() {
    setStoptime(!stoptime);
  };
  function stopTimer() {
    setStoptime(!stoptime);
  }


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

      //console.log(timerList[props.id]);
    }
  };

  const deleteTimer = () => {
    setTimerList(
      toBeEditedTimerList.filter((timer, index) => props.id !== index)
    );
  };

  useEffect(() => {
    if (!stoptime) {
      timerCycle();
      setTimeout(function () {
        setTriggerAfterSecond(!triggerAfterSecond);
      }, 900);
    } else {
      console.log('Stopped');
    }
  }, [stoptime, triggerAfterSecond]);

  return (
    <div className='timer'>
      <div className='rowOne'>
        <div className='title'>{props.title}</div>
        <div className='project'>{props.project}</div>
      </div>
      <div className='rowTwo'>
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
      <div className='rowThree'>
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
        <div className='button1' onClick={startTimer}>
          Start
        </div>
      )}
      {!stoptime && (
        <div className='button2' onClick={stopTimer}>
          Stop
        </div>
      )}
    </div>
  );
};

export default StopWatch;
