import type { SkillItem } from "../types";

type Props = {
  skill: SkillItem;
};

const SkillBadge = ({ skill }: Props) => {
  const { icon, img, label } = skill;

  return (
    <div className="flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1.5 text-sm transition hover:bg-muted">
      {(img || icon) && (
        <div className="flex h-5 w-5 shrink-0 items-center justify-center [&>svg]:h-5 [&>svg]:w-5">
          {img ? (
            <img
              loading="lazy"
              src={img}
              alt=""
              className="h-5 w-5 rounded-sm object-contain"
            />
          ) : (
            icon
          )}
        </div>
      )}
      <span>{label}</span>
    </div>
  );
};

export default SkillBadge;
