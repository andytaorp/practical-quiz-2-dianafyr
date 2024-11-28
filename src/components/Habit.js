import React, {useState} from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
const Habit = ({ habit, onToggleHabit, onDeleteHabit }) => {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={habit.completed}
            onChange={() => onToggleHabit(habit.id)}
          />
          <span
            style={{
              textDecoration: habit.completed ? "line-through" : "none",
            }}
          >
            {habit.name}
          </span>
        </label>
        <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
      </li>
    );
  };
   
  export default Habit;