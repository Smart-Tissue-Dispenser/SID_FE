import * as S from "./style";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import PageItem from "../pageItem";
import Link from "next/link";
import Header from "../header";
import { CateItem } from "../pageItem/style";
import { useRouter } from "next/router";
interface PageLayoutProps {
  title: string;
  color: string;
  link: string;
  items: any[];
}
export default function PageLayout({
  title,
  color,
  items,
  link,
}: PageLayoutProps) {
  const router = useRouter();
  const name = router.query.name;
  const Cate = items.map((data) => {
    console.log(data);
    return (
      <Link
        href={{
          pathname: link,
          query: { id: data.id, name: data.name, prev: name },
        }}
      >
        <PageItem color={color} title={data.name} />
      </Link>
    );
  });
  return (
    <S.MainLayout>
      <S.CateLayout>
        <Header color={color} title={title} />
        <S.CateList>{Cate}</S.CateList>
      </S.CateLayout>
    </S.MainLayout>
  );
}
