import Goal from "./Goal";
import { type Goals } from "../App";

type GoalListProps = {
  goals: Goals[];
  onDeleteGoal: (id: number) => void;
};

function GoalList({ goals, onDeleteGoal }: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
}

export default GoalList;
