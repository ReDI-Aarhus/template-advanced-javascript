import { useLocation } from 'react-router-dom';

function LocationDisplayComponent() {
  let location = useLocation();

  return (
      <>
      <div>pathname: {location.pathname}</div>
      <div>key: {location.key}</div>
      <div>search: {location.search}</div>
    </>
  )
  
}

export default LocationDisplayComponent;