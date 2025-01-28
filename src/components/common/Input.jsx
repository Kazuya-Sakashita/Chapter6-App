import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";

const Input = ({ id, type = "text", register, errors, ...props }) => {
  return (
    <div className="w-full">
      <input
        id={id}
        type={type}
        className={`border rounded-lg p-4 w-full ${
          errors ? "border-red-500" : "border-gray-300"
        }`}
        {...register}
        {...props}
      />
      {/* ErrorMessage コンポーネントを使用 */}
      {errors && <ErrorMessage message={errors.message} />}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired, // `id` は必須の文字列
  type: PropTypes.string, // `type` は文字列（デフォルト: "text"）
  register: PropTypes.object.isRequired, // `register` はオブジェクト（useForm の register）
  errors: PropTypes.shape({
    message: PropTypes.string, // `errors.message` がある場合は文字列
  }),
};

export default Input;
