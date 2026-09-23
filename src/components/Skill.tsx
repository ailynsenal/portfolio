import type { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  img?: string;
  label: string;
};

const Skill = ({ icon, img, label }: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-36 rounded-lg border border-rose-100/15 py-2 px-3 hover:scale-110 hover:border-rose-500">
      <div>
        {img ? (
          <img
            loading="lazy"
            src={img}
            alt={label}
            className="w-20 h-18 rounded-lg"
          />
        ) : (
          <>{icon}</>
        )}
      </div>
      <p className="text-center">{label}</p>
    </div>
  );
};

export default Skill;
