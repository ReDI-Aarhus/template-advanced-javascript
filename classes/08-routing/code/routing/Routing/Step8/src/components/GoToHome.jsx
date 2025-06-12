import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';

function GoToHome() {
  const userContext = useContext(UserContext);
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>{userContext.message}</button>
  );
}

export default GoToHome;