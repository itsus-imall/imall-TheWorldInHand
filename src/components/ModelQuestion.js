import { useOutletContext } from 'react-router-dom';
import * as S from '../style/questionStyled';

const ModelQuestion = () => {
  const { questions, setButtonDisabled, setSelectedQuestion } =
    useOutletContext();

  const checkedHandler = event => {
    setSelectedQuestion([event.target.value]);
    setButtonDisabled(false);
  };

  return (
    <S.Wrapper>
      {questions.map(({ value }) => {
        return (
          <S.InputWrapper>
            <input
              id={value}
              name='model'
              key={value}
              type='radio'
              value={value}
              onChange={checkedHandler}
            />
            <label htmlFor={value}>
              <img
                src={`/images/테스트페이지/260x260_01_${value}.png`}
                alt='model'
              />
            </label>
          </S.InputWrapper>
        );
      })}
    </S.Wrapper>
  );
};

export default ModelQuestion;
