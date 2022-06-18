import "./date-tag.scss";
const DateTag = ({ children, active }) => {
  const isActive = active ? "active" : " ";
  return (
    <span
      className={`scheduling-hand-off__package-specification__date-tag ${isActive}`}
    >
      {children}
    </span>
  );
};

export default DateTag;
