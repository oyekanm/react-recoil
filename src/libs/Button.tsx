import {icons} from "react-icons"

type Props = {
  text: string;
  onPress: () => void;
  style?:string
};

export default function Button({ text, onPress, style }: Props) {
  return (
    <span
      onClick={onPress}
      className={`${style} cursor-pointer text-[1.8rem] font-medium text-white bg-slate-500 p-4 px-8 rounded-[10px] shadow-sm`}
    >
      {text}
    </span>
  );
}
