import React, { useState, useContext } from 'react';
import TimerList from '../TimerList/TimerList';
import { TimerContext } from '../TimerContext';
import Form from '../Form';


const TimerDashboard = () => {
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
      <TimerList />

      {showForm && (
        <Form
          creation={true}
          closeForm={() => {
            setShowForm(false);
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
          setShowForm(true);
        }}>
        +
      </div>
    </div>
  );
};

export default TimerDashboard;
