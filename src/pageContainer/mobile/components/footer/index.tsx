import * as S from "./style";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
export default function MobileFooter() {
  return (
    <S.Footer>
      <Link href="/">
        <div>
          <AiFillHome size={"50%"} color={"white"} />
        </div>
      </Link>
    </S.Footer>
  );
}
