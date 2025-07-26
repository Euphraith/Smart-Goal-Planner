import { useState } from 'react';

function GoalForm({ onAddGoal }) {
  const [goal, setGoal] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // prevent the page from reloading

    if (!goal.trim()) return; // ignore empty input

    onAddGoal({  title: goal, done: false });
    setGoal(''); // clear the input
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input your goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
