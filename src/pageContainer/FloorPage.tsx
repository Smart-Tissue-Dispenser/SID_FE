import PageLayout from "./mobile/components/pageLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FloorPage() {
  const router = useRouter();
  const id  = router.query.id;
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
  return <PageLayout title={name} color={"#54a0fe"} link={"/restroom"} items={items} />;
}

export async function getServerSideProps(id : number) {
  const response = await axios.get(
    `http://10.150.151.102:8000/api/floor/getFloor?buildingId=${id}`
  );
  return response.data;
}
