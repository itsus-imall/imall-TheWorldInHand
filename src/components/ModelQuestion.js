import { useOutletContext } from 'react-router-dom';
import * as S from '../style/questionStyled';

const ModelQuestion = () => {
  const { question: questions, setButtonDisabled } = useOutletContext();

  const onSubmit = event => {
    event.preventDefault();
    setButtonDisabled(false);
  };
  return (
    <S.Wrapper>
      {questions.question.map(question => {
        return (
          <S.InputWrapper>
            <input
              id={question}
              name='model'
              key={question}
              type='radio'
              value={question}
            />
            <label htmlFor={question}>
              <img
                src={`/images/테스트페이지/260x260_01_${question}.png`}
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
