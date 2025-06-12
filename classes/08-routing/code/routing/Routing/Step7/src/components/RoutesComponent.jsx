import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users';
import UserDetail from '../pages/UserDetail';



function RoutesComponent() {
    const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    {
        path: '/users',
        element: <Users />,
        children: [
        { path: ':id', element: <UserDetail /> }
        ]
    },
    // More routes...
    ];


  const elements = useRoutes(routes);
  return <>{elements}</>;
}

export default RoutesComponent;
