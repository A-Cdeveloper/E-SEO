import Link from "next/link";

type CardPropsType = {
  children?: React.ReactNode;
  href?: string;
  bgcolor?: string;
  headlineColor?: string;
};

const Card = ({ children, href, bgcolor, headlineColor }: CardPropsType) => {
  return (
    <div
      className={`w-full lg:w-[48.5%] xl:w-[48.6%] 2xl:w-[48.8%] border border-white/25 h-[250px] md:h-[300px] lg:h-[250px] xl:h-[350px] rounded-lg flex justify-center items-center mb-3 md:mb-1  ${bgcolor}`}
    >
      <Link
        href={href ? href : "#"}
        className="w-full h-full flex justify-center items-center card no-underline"
      >
        <h2 className={`text-5xl ${headlineColor}`}>{children}</h2>
      </Link>
    </div>
  );
};

export default Card;
