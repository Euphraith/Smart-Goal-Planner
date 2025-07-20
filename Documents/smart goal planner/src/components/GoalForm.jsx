// adding goal 

import { useState } from 'react';

function GoalForm({ onAddGoal }) {
  const [goal, setGoal] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // prevent the page from loading 

  }

  if (!goal.trim()) return;
    onAddGoal({ id: Date.now(), title: goal, done: false });
    setGoal('');

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="input your goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;