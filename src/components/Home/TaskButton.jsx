import React from 'react';
import Style from './Home.module.css'

const TaskButton = ({setModal}) => {
const showModal = () => {
    setModal(true);
}
  return (
    <div className={Style.buttons}>
        <button onClick={showModal}>Add Task</button>
        <button>Save</button>
    </div>
  )
}

export default TaskButton