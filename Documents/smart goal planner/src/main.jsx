import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react';

import GoalItem from './GoalItem';
import GoalList from './GoalList';

function NewApp () {
  const [goals, setGoals]= useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/goals') // get all goals
    .then((res) => res.json())
    .then((data) => setGoals(data))
    .catch((error) => console.error("deleting the goal, failed)", error));
  }, []);


    function handleNewGoal(newGoal) {
      setGoals([...goals, newGoal]);
      fetch( "http://localhost:3000/goals", { // NEW GOAL
      method:"post",
      headers:{"content-Type": "application/json"},
      body: JSON.stringify(newGoal),
    })
    .then((res) => res.json())
    .then((data) => setGoals([...goals, data]))
      .catch((error) => console.error("Adding a new goal failed", error));

    };
    
    function handleDelete (goalId) {
        fetch(` http://localhost:3000/goals/${goal.id}`, { //deleting the goal
            method: "delete",
        })
        .then(() => onDelete (goal.id))
        .catch((error) => console.error("deleting the goal, failed)", error));
    }
    return (
       <div>
      <h1> Welcome to Smart goal planner </h1>
      <GoalForm onAddGoal={handleNewGoal} />
      <GoalList goals={goals} onDelete={handleDeleteGoal}/>
      <NewApp />
    </div>
    );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewApp />
  </StrictMode>
);

export default NewApp;