import * as S from "./style";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import PageItem from "../pageItem";
import Link from "next/link";
import Header from "../../../header";
interface PageLayoutProps {
  title: string;
  color: string;
  item?: {};
}
export default function PageLayout({ title, color }: PageLayoutProps) {
  return (
    <S.MainLayout>
      <S.CateLayout>
        <Header color={color} title={title} />
        <S.CateList>
          <Link href="/mainhall">
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
