import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (habitName.trim() ==="")return;
    onAddHabit(habitName.trim());
  };
  
  return (
    //TODO: add a form to add a new habit
    <form onSubmit={handleSubmit}>
      <h3>Enter Habit name</h3>
      <input type={text} placeholder="Habit name..." value={habitName} onChange={(e)=>setHabitName(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
    
  );
}
