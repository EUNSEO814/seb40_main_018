import styled from "styled-components";
import axios from "axios";
// import { useParams } from "react-router-dom";
export const InputContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "350px")};
  height: ${(props) => (props.height ? props.height : "58px")};
  border-radius: 35px;
  box-shadow: 0 2px 2px 1px #0000002e;
  display: flex;
  > .form {
    display: flex;
  }
`;

export const Input = styled.input`
  outline-style: none;
  border: none;
  font-size: 14px;
  width: 365px;
  color: #535353;
  margin-top: -2px;
  margin-left: 20px;
`;

export const Button = styled.button`
  border: none;
  margin-top: 4px;
  background-color: transparent;
  > .add {
    cursor: pointer;
  }
`;

export const Test = styled.div`
  margin: 32px 0 19px 0px;
  > .list-item {
    width: 100%;
    display: flex;
    border-top: 1px solid #dcdcdc;
    justify-content: space-between;
  }
`;

export const Block2 = styled.div`
  display: flex;
  > .complete-icon {
    border: none;
    background-color: transparent;
    margin-left: 3px;
    cursor: pointer;
  }
  > .complete {
    text-decoration-style: solid;
    text-decoration-line: line-through;
    text-decoration-color: black;
    opacity: 0.6;
  }

  > .list {
    width: 250px;
    border: none;
    color: #535353;
    font-size: 14px;
    padding-left: 10px;
    margin-right: 20px;
    line-height: 3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: center;
`;

export const MintLineButton2 = styled.button`
  height: 30px;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(0, 0%, 32%);
  background-color: hsl(0, 0%, 100%);
  border: 1px solid hsl(180, 66%, 74%);
  border-radius: 35px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: hsl(180, 12%, 96%);
  }
  &:active {
    background-color: hsl(180, 12%, 92%);
  }
`;

export const MintButton2 = styled.button`
  height: 30px;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: hsl(0, 0%, 100%);
  background-color: hsl(180, 66%, 55%);
  border: none;
  border-radius: 35px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: hsl(180, 66%, 37%);
  }
  &:active {
    background-color: hsl(180, 66%, 33%);
  }
`;

export const CheckList = ({ todos, setTodos }) => {
  // pass
  const handleComplete = async (todo) => {
    console.log(todo.checkId);
    setTodos(
      todos.map((item) => {
        if (item.id === todo.checkId) {
          console.log("CheckList.item.id", item.id);
          return { ...item, isCheck: !item.isCheck };
        }
        return item;
      }),
    );

    const patch2 = {
      checkContent: todo.checkContent,
      isCheck: !todo.isCheck,
    };

    // ^^todo.id
    // 경로였을 때 patch 통신 잘 되는데, ui 이상해짐

    await axios
      .patch(`${process.env.REACT_APP_API_URL}check-list/` + todo.checkId, patch2)
      .then((res) => console.log(res))
      .then((err) => console.log("res1", err));

    await axios
      .get(`${process.env.REACT_APP_API_URL}check-list`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((result) => {
        setTodos(result.data);
        // navigate(`/mylist/${cid}`);
      });
  };

  // const cid = useParams().id;

  // const handleEdit = (item) => {
  //   console.log("item.checkId", item.checkId);
  //   const findTodo = todos.find((todo) => {
  //     todo.checkId === item.checkId;
  //     console.log("todo.checkId", todo.checkId);
  //   });
  //   console.log("findTodo", findTodo);

  //   setEditTodo(findTodo);

  //   setIsEdit(!isEdit);
  // };

  // ^^id
  const accessToken = localStorage.getItem("accessToken");

  // delete 할 때 모든 리스트가 삭제되고, get이 된다?
  const handleDelete = async (check) => {
    // setTodos(
    //   todos.filter((item) => {
    //     console.log("delete_checkId", item.checkId);
    //     console.log("delete_id2", checkId.checkId); // 해당 id 경로 이동 시 undefined x
    //     item.checkId !== checkId.checkId;
    //   }),
    // );

    await axios.delete(`${process.env.REACT_APP_API_URL}check-list/` + check.checkId).then((res) => {
      console.log(res);
    });

    await axios
      .get(`${process.env.REACT_APP_API_URL}check-list`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((result) => {
        setTodos(result.data);
        // navigate(`/mylist/${cid}`);
      });
    // 등록 버튼 눌렀을 때 해당 id 링크로 이동?
  };

  return (
    <Test>
      {todos.map((todo, idx) => (
        <li className="list-item" key={idx}>
          <Block2>
            <button onClick={() => handleComplete(todo)} className="complete-icon">
              {todo.isCheck ? "🔳" : "⬜"}
            </button>
            <input
              type="text"
              value={todo.checkContent}
              // 완료 시 밑줄 그어짐
              className={`list ${todo.isCheck ? "complete" : ""}`}
              onChange={(e) => e.preventDefault()}
            />
          </Block2>
          <ButtonContainer>
            {/* <MintLineButton2 width="50px" height="20px" onClick={() => handleEdit(todo)}>
              수정
            </MintLineButton2> */}
            <MintButton2 width="50px" height="20px" onClick={() => handleDelete(todo)}>
              삭제
            </MintButton2>
          </ButtonContainer>
        </li>
      ))}
    </Test>
  );
};
