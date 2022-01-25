import './App.css';
import React from 'react';
import TimerDashboard from './TimerDashboard/TimerDashboard';
import { TimerContextProvider } from './TimerContext';

function App() {
  return (
    <div className='App'>
      <div className='app__header'>Timers</div>
      <TimerContextProvider>
        <TimerDashboard />
      </TimerContextProvider>
    </div>
  );
}

export default App;
