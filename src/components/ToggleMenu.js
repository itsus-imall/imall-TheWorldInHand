import * as S from '../style/ToggleMenu';

const ToggleMenu = ({ questions, setToggle, toggle }) => {
  const toggleClickHandler = event => {
    event.preventDefault();
    setToggle(event.target.value);
  };

  return (
    <S.Wrapper toggle={toggle}>
      <S.SelectedToggle toggle={toggle} />
      {questions.map(({ value }, index) => {
        return (
          <button onClick={toggleClickHandler} key={value} value={index}>
            {value}
          </button>
        );
      })}
    </S.Wrapper>
  );
};

export default ToggleMenu;
