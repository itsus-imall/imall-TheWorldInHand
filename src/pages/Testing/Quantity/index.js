import { useRef } from 'react';
import { TestWrapper } from '../styled';

const Quantity = () => {
  return (
    <TestWrapper>
      <input type='number' name='케이스' />
      <input type='number' name='필름' />
    </TestWrapper>
  );
};

export default Quantity;
