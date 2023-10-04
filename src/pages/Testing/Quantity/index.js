import { useOutletContext } from 'react-router-dom';

import * as S from './styled';

const Quantity = () => {
  const { history } = useOutletContext();

  const onChange = event => {
    const target = event.target;
    const value = target.value;
    if (value.length > 3) target.parentNode.classList.add('overflow');
    else target.parentNode.classList.remove('overflow');
  };

  return (
    <S.QuantityWrapper>
      <div>
        <label>케이스 개수</label>
        <div>
          <input
            type='number'
            name='케이스'
            defaultValue={history ? history[0] : ''}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <label>필름 개수</label>
        <div>
          <input
            type='number'
            name='필름'
            defaultValue={history ? history[1] : ''}
            onChange={onChange}
          />
        </div>
      </div>
    </S.QuantityWrapper>
  );
};

export default Quantity;
