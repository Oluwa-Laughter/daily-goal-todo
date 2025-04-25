import { type PropsWithChildren } from "react";

// interface GoalProps {
//   title: string;
//   children: ReactNode;
// }

type GoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

function Goal({ title, id, children, onDelete }: GoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
}

export default Goal;

// const Goal: FC<GoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// };
// export default Goal;
