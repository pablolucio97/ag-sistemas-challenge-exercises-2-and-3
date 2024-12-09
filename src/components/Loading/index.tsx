import ReactLoading, { LoadingType } from "react-loading";

interface LoadingProps {
  type?: LoadingType;
  color?: string;
  text?: string;
  hideText?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  type,
  color,
  text,
  hideText,
}: LoadingProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ReactLoading
        type={type ? type : "bars"}
        color={color ? color : "#FFFFFF"}
        width={32}
        height={32}
      />
      {!hideText && (
        <span className="text-gray-800 text-[11px] lg:text-sm font-secondary mt-2">
          {text ? text : "Carregando dados..."}
        </span>
      )}
    </div>
  );
};

export default Loading;
