import React, { Fragment, useState } from "react";
type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}
function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    console.log(tasks);
    setNewTask("");
  };
  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>

      {tasks.map((task: ITask, index: number) => (
        <h1 key={index}>{task.name}</h1>
      ))}
    </Fragment>
  );
}

export default App;
