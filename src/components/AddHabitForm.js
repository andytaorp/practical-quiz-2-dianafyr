import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
  };
  const newHabit = {
    id: Date.now(),
    habitName, 
    completed: false
  }
  onAddHabit(newHabit);

  setHabitName("");

  return (
    //TODO: add a form to add a new habit
    <form onSubmit={handleSubmit}>
      <h3>Enter Habit name</h3>
      <input type={text} placeholder="Habit name..." value={habitName} onChange={(e)=>setHabitName(e.target.value)}/>
    </form>
    
  );
}
