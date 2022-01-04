import React, { useState } from 'react';

import './Timer.css';
import Form from '../Form';
import StopWatch from '../StopWatch';

const Timer = (props) => {
  let toBeEditedTimerList = [...props.timerList];

  const [title, setTitle] = useState(props.title);
  const [project, setProject] = useState(props.project);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const changeEditMode = () => {
    props.setTimerList(
      toBeEditedTimerList.map((timer, index) =>
        props.id === index
          ? { ...timer, editMode: !props.timerList[props.id].editMode }
          : timer
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTimerList(
      toBeEditedTimerList.map((timer, index) =>
        props.id === index
          ? { ...timer, title: title, project: project, editMode: false }
          : timer
      )
    );
  };

  return (
    <>
      {props.editMode ? (
        <Form
          handleSubmit={handleSubmit}
          title={title}
          project={project}
          handleProject={handleProject}
          handleTitle={handleTitle}
          changeEditMode={changeEditMode}
        />
      ) : (
        <StopWatch
          title={props.title}
          project={props.project}
          changeEditMode={changeEditMode}
          id={props.id}
        />
      )}
    </>
  );
};

export default Timer;
