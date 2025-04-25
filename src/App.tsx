import { useState } from "react";
import Header from "./components/Header";
import imageHeader from "./assets/goals.jpg";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

export type Goals = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<Goals[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: Goals = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: imageHeader, alt: "image of header goals" }}>
        <h1>Daily Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
