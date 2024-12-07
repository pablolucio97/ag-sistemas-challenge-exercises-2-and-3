import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string;
}

const TextInput: React.FC<TextInputProps> = ({ inputLabel, ...rest }) => {
  return (
    <div className="mb-2 w-full">
      <span className="text-gray-800 text-[12px] lg:text-sm">{inputLabel}</span>
      <input
        className="w-full h-[52px] p-4 border-2 rounded-lg text-gray-700 focus:border-blue-700 focus:border-3 focus:outline-none focus:text-gray-500 bg-white placeholder-custom"
        {...rest}
      />
    </div>
  );
};
export default TextInput;
