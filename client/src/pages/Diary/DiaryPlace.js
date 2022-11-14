import styled from "styled-components";
import { useState } from "react";

const InputContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "700px")};
  height: ${(props) => (props.height ? props.height : "55px")};
  padding: 0 18px;
  border-radius: 35px;
  box-shadow: 0 0 5px 2px #63aeae;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TitleText = styled.span`
  white-space: nowrap;
`;
const PlaceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const PlaceArea = styled(InputContainer)`
  width: 300px;
`;
const Tags = styled.div`
  margin-left: 10px;
  width: 100%;
`;

const Select = styled.select`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
  outline-style: none;
  border: none;
  margin-right: 8px;
  font-size: 14px;
`;

const DiaryPlace = () => {
  const [selected, setSelected] = useState(0);
  // console.log(selected);

  const Location = {
    서울특별시: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
    인천광역시: [
      "중구",
      "동구",
      "남구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
      "강화군",
      "옹진군",
    ],
    대전광역시: ["동구", "중구", "서구", "유성구", "대덕구"],
    대구광역시: ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"],
    울산광역시: ["중구", "남구", "동구", "북구", "울주군"],
    부산광역시: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
    광주광역시: ["동구", "서구", "남구", "북구", "광산구"],
    세종특별자치시: [""],
    강원도: [
      "춘천시",
      "원주시",
      "강릉시",
      "동해시",
      "태백시",
      "속초시",
      "삼척시",
      "홍천군",
      "횡성군",
      "영월군",
      "평창군",
      "정선군",
      "철원군",
      "화천군",
      "양구군",
      "인제군",
      "고성군",
      "양양군",
    ],
    경기도: [
      "수원시",
      "성남시",
      "고양시",
      "용인시",
      "부천시",
      "안산시",
      "안양시",
      "남양주시",
      "화성시",
      "평택시",
      "의정부시",
      "시흥시",
      "파주시",
      "광명시",
      "김포시",
      "군포시",
      "광주시",
      "이천시",
      "양주시",
      "오산시",
      "구리시",
      "안성시",
      "포천시",
      "의왕시",
      "하남시",
      "여주시",
      "여주군",
      "양평군",
      "동두천시",
      "과천시",
      "가평군",
      "연천군",
    ],
    경상남도: [
      "창원시",
      "마산시",
      "진주시",
      "진해시",
      "통영시",
      "사천시",
      "김해시",
      "밀양시",
      "거제시",
      "양산시",
      "의령군",
      "함안군",
      "창녕군",
      "고성군",
      "남해군",
      "하동군",
      "산청군",
      "함양군",
      "거창군",
      "합천군",
    ],
    경상북도: [
      "포항시",
      "경주시",
      "김천시",
      "안동시",
      "구미시",
      "영주시",
      "영천시",
      "상주시",
      "문경시",
      "경산시",
      "군위군",
      "의성군",
      "청송군",
      "영양군",
      "영덕군",
      "청도군",
      "고령군",
      "성주군",
      "칠곡군",
      "예천군",
      "봉화군",
      "울진군",
      "울릉군",
    ],
    전라남도: [
      "목포시",
      "여수시",
      "순천시",
      "나주시",
      "광양시",
      "담양군",
      "곡성군",
      "구례군",
      "고흥군",
      "보성군",
      "화순군",
      "장흥군",
      "강진군",
      "해남군",
      "영암군",
      "무안군",
      "함평군",
      "영광군",
      "장성군",
      "완도군",
      "진도군",
      "신안군",
    ],
    전라북도: [
      "전주시",
      "군산시",
      "익산시",
      "정읍시",
      "남원시",
      "김제시",
      "완주군",
      "진안군",
      "무주군",
      "장수군",
      "임실군",
      "순창군",
      "고창군",
      "부안군",
    ],
    충청남도: [
      "천안시",
      "공주시",
      "보령시",
      "아산시",
      "서산시",
      "논산시",
      "계룡시",
      "당진시",
      "당진군",
      "금산군",
      "연기군",
      "부여군",
      "서천군",
      "청양군",
      "홍성군",
      "예산군",
      "태안군",
    ],
    충청북도: [
      "청주시",
      "충주시",
      "제천시",
      "청원군",
      "보은군",
      "옥천군",
      "영동군",
      "진천군",
      "괴산군",
      "음성군",
      "단양군",
      "증평군",
    ],
    제주특별자치도: ["제주시", "서귀포시", "북제주군", "남제주군"],
  };
  console.log(Location);
  const select1 = Object.keys(Location);
  // console.log(select1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <PlaceContainer>
      <PlaceArea>
        <TitleText>다녀온 지역 :</TitleText>
        <Tags>
          <Select name="." onChange={handleSelect} value={selected}>
            {select1.map((el) => (
              <option key={el.id}>{el}</option>
            ))}
          </Select>
          <Select name=".">
            <option>s</option>
            <option>s</option>
          </Select>
        </Tags>
      </PlaceArea>
    </PlaceContainer>
  );
};
export default DiaryPlace;