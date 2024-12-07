import { InputHTMLAttributes } from "react";

interface TextAreaInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  inputLabel: string;
  currentTextLength?: number;
  showTextLength?: boolean;
  maxTextLength?: number;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  inputLabel,
  maxTextLength,
  showTextLength,
  currentTextLength,
  ...rest
}) => {
  const remainingTextLength =
    maxTextLength && currentTextLength
      ? maxTextLength - currentTextLength
      : maxTextLength;

  return (
    <div className="w-full flex flex-col max-h-[200px]">
      <span className="text-gray-800 text-[12px] lg:text-sm mb-1">
        {inputLabel}
      </span>
      <textarea
        name="text-area"
        id="text-area"
        maxLength={maxTextLength}
        className="w-full flex flex-1 text-gray-700 border-2 rounded-lg focus:border-blue-700 focus:border-3 focus:outline-none focus:text-gray-500 bg-white  p-4 resize-none placeholder-custom"
        {...rest}
      />
      {showTextLength && (
        <span className="text-gray-700 text-xs md:text-sm mx-1 my-1">
          Caracteres restantes: {remainingTextLength}
        </span>
      )}
    </div>
  );
};

TextAreaInput.displayName = "TextAreaInput";

export default TextAreaInput;
