import React from 'react';

const Form = (props) => {
  return (
    <div className='timer'>
      <form className='timer__form' onSubmit={props.handleSubmit}>
        <div className='timerInput_One'>
          <div className='timerInput__label'>Title</div>
          <input
            className='timerInput'
            type='text'
            value={props.title}
            onChange={props.handleTitle}
          />
        </div>
        <div className='timerInput_One'>
          <div className='timerInput__label'>Project</div>
          <input
            className='timerInput'
            type='text'
            value={props.project}
            onChange={props.handleProject}
          />
        </div>
      </form>
      <div className='timerEdit__buttonGroup'>
        <div
          className='timer'
          className='timerEdit__update'
          type='submit'
          onClick={props.handleSubmit}>
          {props.creation ? 'Create' : 'Update'}
        </div>
        <div className='timerEdit__cancel' onClick={props.changeEditMode}>
          Cancel
        </div>
      </div>
    </div>
  );
};

export default Form;
