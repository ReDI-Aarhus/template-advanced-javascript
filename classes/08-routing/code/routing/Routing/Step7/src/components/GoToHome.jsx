import { useNavigate } from 'react-router-dom';

function GoToHome() {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>Go To Home</button>
  );
}

export default GoToHome;