import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    setHabits([...habits,newHabits]);
  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    setHabits(
      habits.map((item) =>
      item.id === id ? {...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    setHabits(habits.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      <Form onAddItem={handleAddHabit} />
      {/*TODO: add a list of habits*/}
      <HabitList items={habits} onDeleteHabit={handleDeleteHabit} onToggleHabit={handleToggleHabit} />
    </div>
  );
}

export default App;
