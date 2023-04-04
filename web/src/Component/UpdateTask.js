import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";

function UpdateTask() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [taskName, setTaskName] = useState("");

  const { id } = useParams();
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentTask = tasks.find((task) => task.id === parseInt(id));

  useEffect(() => {
    if (currentTask) {
      setName(currentTask.name);
      setTaskName(currentTask.taskName);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: parseInt(id),
      name,
      isChecked: isChecked ? "Active" : "Inactive",
      taskName,
    };
    dispatch({ type: "UPDATE_TASK", payload: data });
    toast.success("Task Updated Successfully");
    history.push("/");
  };
  return (
    <div className="container">
      {currentTask ? (
        <>
          <h2 className="display-3 my-5 text-center">Update Task {id}</h2>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
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

                <div className="form-group"></div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Task"
                    className="btn btn-info"
                  />
                  <Link to="/" className="btn btn-warning ml-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">Task Not Found{id}</h1>
      )}
    </div>
  );
}

export default UpdateTask;
