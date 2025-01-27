import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit", // バリデーションを送信時に実施
  });

  const onSubmit = (data) => {
    console.log("送信データ:", data);
    alert("送信しました！");
    reset(); // フォームをクリア
  };

  return (
    <div className="max-w-[800px] mx-auto py-10">
      <h1 className="text-xl font-bold mb-10">問い合わせフォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* お名前フィールド */}
        <div className="flex justify-between items-center mb-6">
          <label htmlFor="name" className="w-[240px]">
            お名前
          </label>
          <div className="w-full">
            <input
              id="name"
              disabled={isSubmitting}
              className={`border border-gray-300 rounded-lg p-4 w-full ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", {
                required: "お名前は必須です。",
                maxLength: {
                  value: 30,
                  message: "30文字以内で入力してください。",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>

        {/* メールアドレスフィールド */}
        <div className="flex justify-between items-center mb-6">
          <label htmlFor="email" className="w-[240px]">
            メールアドレス
          </label>
          <div className="w-full">
            <input
              id="email"
              type="email"
              disabled={isSubmitting}
              className={`border border-gray-300 rounded-lg p-4 w-full ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "メールアドレスは必須です。",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "正しいメールアドレスを入力してください。",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* 本文フィールド */}
        <div className="flex justify-between items-center mb-6">
          <label htmlFor="message" className="w-[240px]">
            本文
          </label>
          <div className="w-full">
            <textarea
              id="message"
              rows="8"
              disabled={isSubmitting}
              className={`w-full border border-gray-300 rounded-lg p-4 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              {...register("message", {
                required: "本文は必須です。",
                maxLength: {
                  value: 500,
                  message: "本文は500文字以内で入力してください。",
                },
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {/* ボタン群 */}
        <div className="flex justify-center mt-10">
          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4"
          >
            {isSubmitting ? "送信中..." : "送信"}
          </button>
          {/* クリアボタン */}
          <button
            type="button"
            onClick={() => reset()}
            disabled={isSubmitting}
            className="py-3 px-6 font-bold text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-lg transition-all"
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
