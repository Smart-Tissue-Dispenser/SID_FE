import Header from "../mobile/components/header";
import { Layout } from "../restroom/style";
import * as S from "./style";
import { BsGraphUp } from "react-icons/bs";
import dynamic from "next/dynamic";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function StatPage() {
  const router = useRouter();
  const id = router.query.id;
  const name = router.query.name;
  console.log(id, name);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const promise = getServerSideProps(id);
    promise.then((data) => {
      setItems(data);
      console.log(data);
    });
  }, []);
  let usage: number[];
  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["1번칸", "2번칸", "3번칸"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [2, 1, 1],
      },
    ],
  });
  return (
    <Layout>
      <S.Content>
        <Header color={"#54a0fe"} title={"디자인실 앞"} />
        <span className="stat">통계</span>
      </S.Content>
      <S.Info>
        <S.Total>
          <BsGraphUp />
          <S.Text>
            <span>이번 주 사용량 {17}</span>
          </S.Text>
        </S.Total>
      </S.Info>
      <S.Graph>
        <Chart
          options={dataSample.options}
          series={dataSample.series}
          type={"bar"}
          width={"100%"}
          height={"100%"}
        ></Chart>
      </S.Graph>
    </Layout>
  );
}

export async function getServerSideProps(id: number) {
  const response = await axios.get(
    `http://10.150.151.102:8000/api/floor/getFloor?buildingId=${1}`
  );
  return response.data;
}
