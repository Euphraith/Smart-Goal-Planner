// lists the goal 
import { useState } from "react";

function GoalItem ({goal, onDelete}) {
    function handleDealete () {
        onDelete (goal.id)
    }
    return (
        <li>
            {goal.title}
            <button onClick={handleDelete(goal.id)}>Delete</button>
        </li>
    );
}

export default GoalItem;
