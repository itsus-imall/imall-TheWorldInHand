import { useOutletContext } from 'react-router-dom';
import * as S from '../Hand/styled';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading';

const Three = () => {
  const { questions, history } = useOutletContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => setTimeout(() => setLoading(false), 3000), []);

  if (loading) return <Loading count='0' />;

  return <div>dfs</div>;
};

export default Three;
