import * as S from "./style";
import { BsFillBellFill } from "react-icons/bs";
interface HeaderProps {
  color: string;
  title: string;
}
export default function Header({ title, color }: HeaderProps) {
  return (
    <S.CateHeader color={color}>
      <span>{title}</span>
      <div>
        <BsFillBellFill className="icon" />
      </div>
    </S.CateHeader>
  );
}
