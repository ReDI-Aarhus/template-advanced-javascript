import { useParams } from 'react-router-dom';

function UserDetail() {
  let { id } = useParams();
  return <h2>User Detail for User ID: {id}</h2>;
}

export default UserDetail;
