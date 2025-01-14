import styled from "styled-components";

const DarkMintButtonStyle = styled.button`
  height: 30px;
  width: ${(props) => (props.width ? props.width : "74px")};
  padding: 5px 15px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(180, 32%, 54%);
  border: none;
  border-radius: 35px;
  font-size: 12px;
  margin-right: 10.12px;
  margin-bottom: 5px;
  &:hover {
    background-color: hsl(180, 25%, 35%);
  }
  &:active {
    background-color: hsl(180, 25%, 31%);
  }
`;

const DarkMintButton = ({ text, handleSubmit, width }) => {
  return (
    <DarkMintButtonStyle onClick={handleSubmit} width={width}>
      {text}
    </DarkMintButtonStyle>
  );
};

export default DarkMintButton;

// 가로세로 100*40 고정이라 미리 설정 해뒀습니다.
// <BlueButton text="Ask Question" />
