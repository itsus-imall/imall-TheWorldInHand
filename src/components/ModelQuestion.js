import { useOutletContext } from 'react-router-dom';

const ModelQuestion = () => {
  const { question: questions, setButtonDisabled } = useOutletContext();

  const onSubmit = event => {
    event.preventDefault();
    setButtonDisabled(false);
  };
  return (
    <form onSubmit={onSubmit}>
      {questions.question.map(question => {
        return (
          <div>
            <input name='model' key={question} type='radio' value={question} />
            <label>
              <img src={`/images/`} alt='model' />
            </label>
          </div>
        );
      })}
    </form>
  );
};

export default ModelQuestion;
