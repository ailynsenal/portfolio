import type { PropsWithChildren } from "react";
import type { ExperienceEntry } from "../types";

type Props = PropsWithChildren<{
  isLast: boolean;
  variant?: ExperienceEntry["type"];
}>;

const TimelineItem = ({ isLast, variant = "job", children }: Props) => {
  const isJob = variant === "job";

  return (
    <div className="relative flex gap-4 pb-10">
      {!isLast && (
        <div className="absolute left-4 top-0 h-full w-px bg-line/20" />
      )}
      <div
        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-neutral-800 ${
          isJob ? "border-accent" : "border-line/20"
        }`}
      >
        <span
          className={`rounded-full ${
            isJob ? "h-2 w-2 bg-accent" : "h-1.5 w-1.5 bg-line/40"
          }`}
        />
      </div>
      {children}
    </div>
  );
};

export default TimelineItem;
