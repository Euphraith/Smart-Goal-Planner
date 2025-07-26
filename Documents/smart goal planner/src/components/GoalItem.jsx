import React from "react";

function GoalItem({ goal, onDelete }) {
  function handleDelete() {
    onDelete(goal.id);
  }

  return (
    <li>
      {goal.title}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default GoalItem;
