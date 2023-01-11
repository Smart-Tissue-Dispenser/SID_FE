import * as S from "./style";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import PageItem from "../pageItem";
import Link from "next/link";
interface PageLayoutProps {
  title: string;
  color: string;
  item?: {};
}
export default function PageLayout({ title, color }: PageLayoutProps) {
  return (
    <S.MainLayout>
      <S.CateLayout>
        <S.CateHeader color={color}>
          <span>{title}</span>
          <div>
            <BsFillBellFill className="icon" />
          </div>
        </S.CateHeader>
        <S.CateList>
          <Link href="/mainhall" >
            <PageItem color={color} title={"본관"} />
          </Link>
          <Link href="/mainhall">
            <PageItem color={color} title={"본관"} />
          </Link>
          <Link href="/mainhall">
            <PageItem color={color} title={"본관"} />
          </Link>
        </S.CateList>
      </S.CateLayout>
    </S.MainLayout>
  );
}
