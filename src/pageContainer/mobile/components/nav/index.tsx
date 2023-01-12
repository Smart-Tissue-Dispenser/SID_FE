import * as S from "./style";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Nav() {
  const router = useRouter();
  return (
    <S.NavHead>
      <S.Content>
        <IoIosArrowBack onClick={() => router.back()} />
        <Link href="/">
          <AiFillHome />
        </Link>
      </S.Content>
    </S.NavHead>
  );
}
