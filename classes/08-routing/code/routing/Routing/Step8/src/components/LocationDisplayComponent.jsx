import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';

function LocationDisplayComponent() {
  let location = useLocation();
  const userContext = useContext(UserContext);

  return (
      <>
      <div>pathname: {location.pathname}</div>
      <div>key: {location.key}</div>
      <div>search: {location.search}</div>
      <div>Context: {userContext.message}</div>
    </>
  )
  
}

export default LocationDisplayComponent;