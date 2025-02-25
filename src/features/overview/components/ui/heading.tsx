interface IProps {
  as?: React.ElementType;
  title: string;
  highlightText?: string;
}

const Heading: React.FC<IProps> = ({
  as: Component = "h2",
  title,
  highlightText,
}) => {
  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight?.toLowerCase() ? (
        <span key={index} className="text-blue-dark">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Component className="text-36-54-700 text-neutral-01">
      {highlightText ? getHighlightedText(title, highlightText) : title}
    </Component>
  );
};

export default Heading;
