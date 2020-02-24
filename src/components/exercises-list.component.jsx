import React, { useEffect, useState } from "react";
import axios from "axios";
import Exercise from "./exercise.component";

const ExercisesList = props => {
  const [exercises, setExercises] = useState([]);

  const getExercises = () => axios.get("http://localhost:5000/api/exercise");
  const deleteExerciseAxios = id =>
    axios.delete("http://localhost:5000/api/exercise/" + id);

  useEffect(() => {
    getExercises()
      .then(response => {
        setExercises(response.data.exercises);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteExercise = id => {
    deleteExerciseAxios(id).then(res => console.log(res.data));

    setExercises(exercises.filter(el => el._id !== id));
  };
  const exercisesList = () => {
    return exercises.map(exercise => {
      return (
        <Exercise
          username={exercise.username}
          deleteExercise={deleteExercise}
          key={exercise._id}
          id={exercises._id}
          description={exercise.description}
          duration={exercise.duration}
          date={exercise.date.substring(0, 10)}
          to={"edit/" + exercise._id}
          onClick={() => {
            deleteExercise(exercise._id);
          }}
        />
      );
    });
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exercisesList()}</tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
