import { ButtonHTMLAttributes } from "react";
import { Loading } from "../Loading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
  isLoading?: boolean;
}

export function Button({ buttonLabel, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      className={`w-full h-[52px] flex items-center justify-center bg-primary normal-case lg:text-base text-sm font-medium font-poppins rounded-lg disabled:opacity-[0.5] text-gray-50 font-secondary bg-[#495782]`}
      {...rest}
    >
      {isLoading ? <Loading hideText /> : buttonLabel}
    </button>
  );
}
