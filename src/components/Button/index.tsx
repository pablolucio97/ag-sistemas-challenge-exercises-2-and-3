import { ButtonHTMLAttributes } from "react";
import { Loading } from "../Loading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
  isLoading?: boolean;
}

export function Button({ buttonLabel, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      className={`w-full h-[52px] flex items-center justify-center bg-primary normal-case lg:text-base text-sm rounded-lg disabled:opacity-[0.7] text-gray-50 font-bold bg-[#03C1F3]`}
      {...rest}
    >
      {isLoading ? <Loading hideText /> : buttonLabel}
    </button>
  );
}
