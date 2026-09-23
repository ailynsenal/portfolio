import { motion } from "motion/react";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

const FadeIn = ({ className, children }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeIn" },
      }}
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
