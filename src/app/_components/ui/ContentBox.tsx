const ContentBox = ({
  children,
  extraClass,
}: {
  children: React.ReactNode;
  extraClass?: string;
}) => {
  return (
    <div className={`ps-0 pe-0 lg:pe-0 lg:ps-7 ${extraClass || ""}`}>
      {children}
    </div>
  );
};

export default ContentBox;
