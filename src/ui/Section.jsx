const Section = ({ children, padding = 4 }) => {
  return <div className={`border-neutral-900 pb-${padding}`}>{children}</div>;
};

export default Section;
