import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercises = props => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeDescription = e => setDescription(e.target.value);
  const onChangeDuration = e => setDuration(e.target.value);
  const onChangeDate = e => setDate(e);

  const getUsers = () => axios.get("http://localhost:5000/api/users");
  const createExercise = state =>
    axios.post("http://localhost:5000/api/exercise/addExercise", state);

  const onsubmit = e => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date
    };

    createExercise(exercise).then(res => console.log(res.data));

    window.location = "/";
  };

  useEffect(() => {
    getUsers().then(response => {
      if (response.data.results > 0) {
        setUsers(response.data.users.map(user => user.username));
        setUsername(response.data.users[0].username);
      }
    });
  }, []);

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label>Username : </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map(user => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="type"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercises;
