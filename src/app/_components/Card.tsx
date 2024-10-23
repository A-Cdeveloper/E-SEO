"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type CardPropsType = {
  children?: React.ReactNode;
  href?: string;
  bgcolor?: string;
  headlineColor?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animate?: any;
  delay: number;
};

const Card = ({
  children,
  href,
  bgcolor,
  headlineColor,
  className,
  style,
  animate,
  delay,
}: CardPropsType) => {
  console.log(style);
  return (
    <motion.div
      initial={style}
      animate={animate}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 * delay }}
      className={`flex justify-center items-center ${bgcolor} ${className} 
      aspect-w-1 aspect-h-1 w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[250px] xl:h-[350px]
      `}
    >
      <Link
        href={href ? href : "#"}
        className="flex justify-center items-center card no-underline w-full h-full"
      >
        <h2 className={`text-5xl ${headlineColor}`}>{children}</h2>
      </Link>
    </motion.div>
  );
};

export default Card;
