//create

//provider

//usage

import { createContext, useState } from 'react';

export const TimerContext = createContext();

export const TimerContextProvider = (props) => {
  const [timerList, setTimerList] = useState([
    {
      title: 'Mow lawn',
      project: 'House Chores',
      hour: 0,
      min: 0,
      sec: 0,
      editMode: false,
    },
  ]);
  return (
    <TimerContext.Provider value={[timerList, setTimerList]}>
      {props.children}
    </TimerContext.Provider>
  );
};
