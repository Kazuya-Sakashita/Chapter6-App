import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return <p className="text-red-500 text-sm mt-1">{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired, // `message` は必須の string 型
};

export default ErrorMessage;
