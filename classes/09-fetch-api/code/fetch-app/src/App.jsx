import { useState } from 'react';
import SimpleFetch from './components/SimpleFetch';
import DisplayAPOD from './components/DisplayAPOD';
import HandleErrors from './components/HandleErrors';
import FetchWithQueryParams from './components/FetchWithQueryParams';
import FetchDataAndDisplay from './components/FetchDataAndDisplay';
import WD from './components/WD';

function App() {
  const [currentComponent, setCurrentComponent] = useState('SimpleFetch');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'SimpleFetch':
        return <SimpleFetch />;
      case 'DisplayAPOD':
        return <DisplayAPOD />;
      case 'HandleErrors':
        return <HandleErrors />;
      case 'FetchWithQueryParams':
        return <FetchWithQueryParams />;
      case 'FetchDataAndDisplay':
        return <FetchDataAndDisplay />;
      case 'WD':
        return <WD/>;
      default:
        return <SimpleFetch />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentComponent('SimpleFetch')}>Simple Fetch</button>
        <button onClick={() => setCurrentComponent('DisplayAPOD')}>Display APOD</button>
        <button onClick={() => setCurrentComponent('HandleErrors')}>Handle Errors</button>
        <button onClick={() => setCurrentComponent('FetchWithQueryParams')}>Fetch with Query Params</button>
        <button onClick={() => setCurrentComponent('FetchDataAndDisplay')}>Fetch Data and Display</button>
        <button onClick={() => setCurrentComponent('WD')}>WD</button>
      </nav>
      {renderComponent()}
    </div>
  );
}

export default App;
