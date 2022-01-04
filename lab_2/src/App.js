import './App.css';
import React, { useState, useContext } from 'react';
import { TimerContext } from './TimerContext';
import Form from './Form';
import TimerList from './TimerList/TimerList';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [timerList, setTimerList] = useContext(TimerContext);

  let newList = [...timerList];

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newList.push({
      title: title,
      project: project,
      editMode: false,
      timer: '00:00:00',
      hour: 0,
      min: 0,
      sec: 0,
    });
    setTitle('');
    setProject('');
    setTimerList(newList);
    setShowForm(false);
  };

  return (
    <div className='App'>
      <div className='app__header'>Timers</div>
      <TimerList />
      {showForm && (
        <Form
          creation={true}
          changeEditMode={() => {
            setShowForm(!showForm);
          }}
          handleSubmit={handleSubmit}
          title={title}
          project={project}
          handleProject={handleProject}
          handleTitle={handleTitle}
        />
      )}
      <div
        className='showForm__button'
        onClick={() => {
          setShowForm(!showForm);
        }}>
        +
      </div>
    </div>
  );
}

export default App;
