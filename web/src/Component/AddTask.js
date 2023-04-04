import React, { useState } from "react";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function AddTask() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState("false");
  const [taskName, setTaskName] = useState("");

  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: tasks[tasks.length - 1].id + 1,
      name,
      isChecked: isChecked ? "Active" : "Inactive",
      taskName,
    };
    dispatch({ type: "ADD_TASK", payload: data });
    toast.success("Task Added Successfully");
    history.push("/");
  };

  return (
    <div className="container">
      <h2 className="display-3 my-5 text-center">Add Task</h2>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="User Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Task Name"
                className="form-control"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Status: </label>
              {isChecked ? " Active" : " Inactive"}
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Add Task"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
