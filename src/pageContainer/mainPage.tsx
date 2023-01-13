import axios from "axios";
import { useEffect, useState } from "react";
import PageLayout from "./mobile/components/pageLayout";

export default function MobileMainPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const promise = getServerSideProps();
    promise.then((data) => {
      setItems(data);
      console.log(data);
    });
  }, []);
  return (
    <PageLayout
      title={"BSM 티슈 관리 앱"}
      color={"#ff453f"}
      items={items}
      link={"/floor"}
    />
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://10.150.151.102:8000/api/building/getAll"
  );
  return response.data;
}
