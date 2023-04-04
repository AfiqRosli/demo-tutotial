import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const tasks = useSelector((state) => state);

  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
    toast.success("Task Deleted!!!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn btn-outline-dark">
            Add Task
          </Link>
        </div>
        <div className="col-md-12 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Task Name </th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {tasks.map((task, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{task.name}</td>
                  <td>{task.taskName}</td>
                  <td>{task.isChecked}</td>
                  <td>
                    <Link
                      to={`/update/${task.id}`}
                      className="btn btn-small btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Update
                    </Link>

                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      className="btn btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
