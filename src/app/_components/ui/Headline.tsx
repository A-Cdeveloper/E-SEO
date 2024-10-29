type HeadlineProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const Headline = ({ level = 1, children, className = "" }: HeadlineProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  let fontSizeClasses = "text-4xl md:text-5xl lg:text-6xl mb-4";
  switch (level) {
    case 1:
      fontSizeClasses = "text-4xl md:text-5xl lg:text-6xl mb-4";
      break;
    case 2:
      fontSizeClasses = "text-4xl md:text-5xl lg:text-5xl mb-2";
      break;
  }

  return (
    <Tag className={`${className} ${fontSizeClasses}`}>
      <span>&lt;</span>
      {children}
      <span>/&gt;</span>
    </Tag>
  );
};

export default Headline;
