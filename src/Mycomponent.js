const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다.
      <br />
      childeren 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "유진",
};

export default MyComponent;
