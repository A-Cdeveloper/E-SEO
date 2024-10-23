import Link from "next/link";

type CardPropsType = {
  children?: React.ReactNode;
  href?: string;
  bgcolor?: string;
  headlineColor?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Card = ({
  children,
  href,
  bgcolor,
  headlineColor,
  // width = "full",
  // height = "350px",
  className,
}: CardPropsType) => {
  return (
    <div
      className={`border border-white/25 rounded-lg flex justify-center items-center ${bgcolor} ${className} 
      aspect-w-1 aspect-h-1 w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[250px] xl:h-[350px]
      `}
    >
      <Link
        href={href ? href : "#"}
        className="flex justify-center items-center card no-underline"
      >
        <h2 className={`text-5xl ${headlineColor}`}>{children}</h2>
      </Link>
    </div>
  );
};

export default Card;
