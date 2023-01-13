import * as S from "./style";
import { AiOutlineBarChart } from "react-icons/ai";
interface HeaderProps {
  color: string;
  title: string;
}
export default function Header({ title, color }: HeaderProps) {
  return (
    <S.CateHeader color={color}>
      <span>{title}</span>
      <div onClick={() => (window.location.href = "/stat")}>
        <AiOutlineBarChart className="icon" />
      </div>
    </S.CateHeader>
  );
}
