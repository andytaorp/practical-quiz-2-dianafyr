import React, {useState} from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
function Habit ({habit, onToggleHabit, onDeleteHabit}) {
    const [completed, setCompleted] = useState(habit.completed)

    const handleToggle = () => {
        setCompleted ((prev) => !prev);
        onToggleHabit(habit.id)
    };

    return (
        <div>
            <input type= "checkbox" checked={completed} onChange={handleToggle} />
            <span style={{textDecoration: completed ? "line-through" : "none"}}>{habit.name}</span>
            <button onClick={() => onDeleteHabit(habit.id)}>❌</button>
        </div>
    )
}
export default function Habit() {}
