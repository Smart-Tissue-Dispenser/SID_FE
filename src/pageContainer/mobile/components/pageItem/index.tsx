import { AiOutlineHome } from "react-icons/ai";
import * as S from "./style";
interface PageItemProps {
  icon?: string;
  title: string;
  color: string;
}
export default function PageItem({ color, title }: PageItemProps) {
  return (
    <S.CateItem color={color}>
      <AiOutlineHome className="icon" />
      <span>{title}</span>
      <div></div>
    </S.CateItem>
  );
}
