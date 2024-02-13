import React from 'react';
import Style from './Home.module.css'

const TaskModal = ({setModal}) => {
    const hideModal = () => {
        setModal(false)
    }
    const addTask = () => {
        setModal(false)
    }
  return (
    <div className={Style.overlay}>
        <div className={Style.modal}>
        <h1>Add New Block</h1>
        <input type="text" placeholder='Enter new Title' />
        <select name="" id="">
            <option value="Task">Task</option>
            <option value="Group">Grouped Task</option>
        </select>
        <div className={Style.buttons}>
            
        <button  onClick={addTask}>Save</button>
        <button onClick={hideModal}>Cancel</button>
        </div>
        </div>
    </div>
  )
}

export default TaskModal