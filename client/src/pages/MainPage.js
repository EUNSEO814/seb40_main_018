import styled from "styled-components";
import { Card } from "../components/Main/Card";
import { MainTab } from "../components/Main/MainTab";
// import { useParams } from "react-router-dom";

// import { SET_TOKEN } from "../redux/store/Auth";

import { useState, useEffect } from "react";
import axios from "axios";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
`;

export default function MainPage() {
  // const id = useParams().id;

  // const user = useSelector(SET_TOKEN);
  // console.log("user", user.payload.userReducer.isLogin);
  // const accesstoken = useSelector(DELETE_TOKEN);
  // console.log("accesstoken", accesstoken);

  const [selected, setSelected] = useState("등록순");
  const [diaryList, setDiaryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState("");

  useEffect(() => {
    // axios.get(`http://localhost:4000/diary`).then((res) => {
    setLoading(true);
    // axios.get(`http://localhost:4000/diary`).then((res) => {
    axios.get(`/diary?size=12&page=${page}&tag=${tag}`).then((res) => {
      const timer = setTimeout(() => {
        console.log(res.data.data);
        let response = res.data.data;
        setDiaryList(response.slice(0, 12)); // 받아온 데이터에서 12개만 먼저 result state에 저장
        response = response.slice(12);
        setResult(response); // 저장한 데이터 모두 저장
        setLoading(false);
        setPage(page + 1);
      }, 2000);
      return () => clearTimeout(timer);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(`/tag/{diary-id}`).then((res) => console.log(res.data.data));
  // });

  // yerin
  const [hasMore, setHasMore] = useState(true);
  const [result, setResult] = useState([]);
  return (
    <Main>
      <div>
        <MainTab selected={selected} setSelected={setSelected} diaryList={diaryList} setTag={setTag} />
        <Card
          selected={selected}
          diaryList={diaryList}
          setDiaryList={setDiaryList}
          hasMore={hasMore}
          setHasMore={setHasMore}
          result={result}
          setResult={setResult}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </Main>
  );
}
