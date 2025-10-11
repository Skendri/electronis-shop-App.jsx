
const SliderButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} aria-label={children === '<' ? "Previous Image" : "Next Image"}>
      {children}
    </button>
  );
};

export default SliderButton;