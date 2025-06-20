﻿import { Outlet, Link } from "react-router-dom";

function Users() {
    return (
    <>
        <h2>Users Page</h2>
        <ul>
            <li><Link to='/users/1'>User 1</Link></li>
            <li><Link to='/users/2'>User 2</Link></li>
            <li><Link to='/users/3'>User 3</Link></li>
        </ul>
        <Outlet />
    </>
    )
}

export default Users;