import type { ExperienceJob } from "../types";

type Props = {
  job: ExperienceJob;
};

const ExperienceCard = ({ job }: Props) => {
  const { company, position, start, end, description } = job;
  const isCurrent = !end;

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg border border-line/15 p-4 transition hover:border-accent sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold">{position}</h3>
        {isCurrent && (
          <span className="w-fit rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-primary">
            Current
          </span>
        )}
      </div>
      <div>
        <p className="text-tertiary font-normal">{company}</p>
        <p className="text-tertiary text-sm">
          {start} - {end ?? "Present"}
        </p>
      </div>
      <ul className="flex list-outside list-disc flex-col gap-1 pl-4 text-sm text-tertiary">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
