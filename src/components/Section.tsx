import type { PropsWithChildren } from "react";
import type { SectionKey } from "../types";

type Props = PropsWithChildren<{
  id: SectionKey;
  title: string;
}>;

const Section = ({ id, title, children }: Props) => {
  return (
    <section id={id} className="flex flex-col gap-12 py-24">
      <h2 className="text-4xl">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
