import React, { useState } from "react";
import InputForm from "./InputForm";
import TaskButton from "./TaskButton";
import Style from "./Home.module.css";
import TaskModal from "./TaskModal";

const Home = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="container">
      <h1>Task List</h1>
      <div className={Style.input_area}>
        <InputForm />
        <TaskButton setModal={setModal} />
      </div>
      {modal && <TaskModal setModal={setModal} />}
    </div>
  );
};

export default Home;
