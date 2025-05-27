import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
};

const Skill = ({ icon, label }: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center min-w-36 rounded-lg border border-rose-100/15 py-2 px-3 hover:scale-110">
      <div className="">{icon}</div>
      <p>{label}</p>
    </div>
  );
};

export default Skill;
