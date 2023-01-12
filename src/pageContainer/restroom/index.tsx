import Header from "../mobile/components/header";
import * as S from "./style";
import { useState, useEffect } from "react";
import axios from "axios";
import StatusItem from "../mobile/components/statusItem";
import { useRouter } from "next/router";
import Link from "next/link";
export default function RestroomPage() {
  const router = useRouter();
  const name = router.query.name;
  const prev = router.query.prev;
  const id = router.query.id;
  const [items, setItems] = useState([]);
  useEffect(() => {
    const promise = getServerSideProps(id);
    promise.then((data) => {
      setItems(data);
      console.log(data);
    });
  }, []);
  const Status = items.map((data) => {
    let sum = 0;
    data.toilets?.map((item) => {
      sum += item.status;
    });
    console.log("sum", sum);
    const textColor = sum <= 3 ? "#EB4747" : sum <= 6 ? "#FF8B8B" : "#ABC9FF";
    return (
      <Link
        href={{
          pathname: "/detail",
          query: { name: data.location, id: data.id },
        }}
      >
        <StatusItem
          textColor={textColor}
          title={data.location}
          color={data.gender === "여" ? "#E71873" : "#29A7E1"}
        />
      </Link>
    );
  });
  return (
    <S.Layout>
      <S.Content>
        <Header title={`${prev} ${name} 화장실`} color="#29A7E1" />
        {Status}
      </S.Content>
    </S.Layout>
  );
}

export async function getServerSideProps(id: string) {
  const response = await axios.get(
    `http://10.150.151.102:8000/api/restroom/getRestrooms?floorId=${id}`
  );
  return response.data;
}
