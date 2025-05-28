import type { WorkItem } from "../types";

type Props = {
  work: WorkItem;
  index: number;
};

const Work = ({ work, index }: Props) => {
  const { logo, company, position, duration, description } = work;

  return (
    <div className="flex flex-col gap-6">
      <div
        className={`absolute left-0 z-30 rounded-full border-8 border-rose-500 hidden sm:left-[49.5%] sm:block`}
      ></div>
      <div
        className={`flex border border-rose-100/15 rounded-lg p-3 w-full ${
          index % 2 == 0 ? "place-self-start" : "place-self-end"
        } sm:w-[45%] hover:scale-110 hover:border-rose-500`}
      >
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt={company}
            className="rounded-full h-16 w-16 sm:h-20 sm:w-20"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">{position}</h1>
            <div>
              <p className="text-tertiary font-normal">{company}</p>
              <p className="text-tertiary">{duration}</p>
            </div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
