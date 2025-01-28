import PropTypes from "prop-types";

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="w-[240px] font-bold text-gray-800">
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired, // htmlFor は必須の文字列
  children: PropTypes.node.isRequired, // children は必須の React ノード
};

export default Label;
