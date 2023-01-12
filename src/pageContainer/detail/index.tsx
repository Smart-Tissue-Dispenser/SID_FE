import Header from "../mobile/components/header";
import * as S from "./style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
export default function DetailPage() {
  const ModalPage = () => {
    return (
      <S.ModalLayout>
        <S.ModalContent>
          <S.ModalHead>
            <span>SID</span>
            <AiOutlineClose className="icon" onClick={() => setModal(false)} />
          </S.ModalHead>
          <S.Text>
            {emptyList.map((item) => (
              <span>{item + " "}</span>
            ))}
            번칸의 휴지가 없습니다!
          </S.Text>
        </S.ModalContent>
      </S.ModalLayout>
    );
  };
  const [modal, setModal] = useState(true);
  const router = useRouter();
  const id = router.query.id;
  const name = router.query.name;
  console.log("id", id);
  const [items, setItems] = useState([]);
  let emptyList: number[] = [];
  useEffect(() => {
    const promise = getServerSideProps(id);
    promise.then((data) => {
      setItems(data);
      console.log(data);
    });
  }, []);
  const Rest = items.map((data, idx) => {
    if (data.status === 0) {
      emptyList.push(idx + 1);
    }
    return (
      <S.Toilet>
        <S.Title>{idx + 1}번칸</S.Title>
        <S.Info
          bg={
            data.status < 2
              ? "#EB4747"
              : data.status == 2
              ? "#FF8B8B"
              : "#ABC9FF"
          }
        >
          {data.status}
        </S.Info>
      </S.Toilet>
    );
  });
  console.log(emptyList);
  return (
    <S.Layout>
      <S.Content>
        <Header color={"#29A7E1"} title={name} />
        <S.Toilets>{Rest}</S.Toilets>
      </S.Content>
      <Modal
        isOpen={modal && emptyList.length !== 0}
        onRequestClose={() => setModal(false)}
        className="modal"
      >
        <ModalPage />
      </Modal>
    </S.Layout>
  );
}

export async function getServerSideProps(id: number) {
  const response = await axios.get(
    `http://10.150.151.102:8000/api/toilet/getToilets?restroomId=${id} `
  );
  return response.data;
}
