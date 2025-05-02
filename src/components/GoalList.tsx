import Goal from "./Goal";
import { type Goals } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type GoalListProps = {
  goals: Goals[];
  onDeleteGoal: (id: number) => void;
};

function GoalList({ goals, onDeleteGoal }: GoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint"> You have no goals yet</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Too Many Goals. Don't put too much on your plate
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GoalList;
