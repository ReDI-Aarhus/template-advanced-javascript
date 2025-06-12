import { Link, Outlet } from 'react-router-dom';

function Users() {
  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        <li><Link to="1">User 1</Link></li>
        <li><Link to="2">User 2</Link></li>
        {/* Add more users as needed */}
      </ul>
      <Outlet />
    </div>
  );
}

export default Users;
