import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
// import MyPageCard2 from "./MyPageCard2";

const Container = styled.div`
  display: flex;
  width: 1000px;
  margin-top: 100px;
  flex-direction: column;
`;

const SearchBox = styled.div`
  width: 366px;
  height: auto;
  padding: 10px 20px;
  border-radius: 35px;
  box-shadow: 0 0 5px 2px #63aeae;
  margin: 18px 0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  margin-left: 5px;
  border: none;
  outline: none;
  font-size: 14px;
`;

const MyPageSearch = ({ cardList, setCardList }) => {
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
    const city = cardList.map((el) => el.city);
    if (city.includes(e.target.value)) {
      setCardList(cardList.filter((el) => el.city === e.target.value));
    } else if (searchText.length === 0) {
      setCardList(cardList);
    }
  };

  return (
    <Container>
      <SearchBox>
        <AiOutlineSearch color="#63aeae" size="20" />
        <Input
          id="search"
          type="text"
          placeholder="지역을 입력해주세요."
          value={searchText}
          onChange={onChangeHandler}
        />
      </SearchBox>
    </Container>
  );
};

export default MyPageSearch;
