const MyComponent = (props) => {
  return <div>안녕하세요. 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
    name: '유진'
}

export default MyComponent;
