import React, {useState} from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
function Habit ({habit, onToggleHabit, onDeleteHabit}) {
 
    return (
        <div>
            <input type= "checkbox" checked={habit.completed} onChange={() => onToggleHabit(habit.id)} />
            <span style={{textDecoration: completed ? "line-through" : "none"}}>{habit.name}</span>
            <button onClick={() => onDeleteHabit(habit.id)}>❌</button>
        </div>
    )
}
export default function Habit() {}
