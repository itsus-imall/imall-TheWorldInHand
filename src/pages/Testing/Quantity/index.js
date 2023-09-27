import { useOutletContext } from 'react-router-dom';

import * as S from './styled';

const Quantity = () => {
  const { history } = useOutletContext();

  return (
    <S.QuantityWrapper>
      <div>
        <label>케이스 개수</label>
        <div>
          <input
            type='number'
            name='케이스'
            defaultValue={history ? history[0] : ''}
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
          />
        </div>
      </div>
    </S.QuantityWrapper>
  );
};

export default Quantity;
