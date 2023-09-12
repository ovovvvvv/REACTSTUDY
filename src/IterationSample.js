import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      text: "눈사람",
    },
    {
      id: 2,
      text: "얼음",
    },
    {
      id: 3,
      text: "눈",
    },
    {
      id: 4,
      text: "바람",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, //nextId값을 id로 설정
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    // 현재 항목id와 삭제 대상 항목id가 서로 다를때만 filter함수에서 현재 항목을 유지하도록 하는 역할
    // 삭제 대상 항목을 nextNames 배열에서 제외시키는 것 !
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가할</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
