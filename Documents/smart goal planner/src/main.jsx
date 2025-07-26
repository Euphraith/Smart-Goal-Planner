import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import './Goal.css';

function NewApp() {
  const [goals, setGoals] = useState([]);

  // GET all goals on mount
  useEffect(() => {
  fetch('http://localhost:3000/goals')
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched goals:", data); //  Correct for GET
      setGoals(data);
    })
    .catch((error) => console.error("Fetching goals failed", error));
}, []);


  // POST new goal
  function handleNewGoal(newGoal) {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals([...goals, data]))
      .catch((error) => console.error("Adding a new goal failed", error));
  }

  // DELETE goal
  function handleDelete(goalId) {
    fetch(`http://localhost:3000/goals/${goalId}`, {
      method: "DELETE",
    })
      .then(() => setGoals(goals.filter(goal => goal.id !== goalId)))
      .catch((error) => console.error("Deleting the goal failed", error));
  }

  return (
    <div>
      <h1>Hello, Welcome to Smart Goal Planner</h1>
      <GoalForm onAddGoal={handleNewGoal} />
      <GoalList goals={goals} onDelete={handleDelete} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewApp />
  </StrictMode>
);

export default NewApp;
