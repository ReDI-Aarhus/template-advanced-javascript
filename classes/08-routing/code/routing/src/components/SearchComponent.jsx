import { useSearchParams } from 'react-router-dom';

function SearchComponent() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <input value={searchParams.get('query') || ''} 
             onChange={event => {
               let query = event.target.value;
               if (query) {
                 setSearchParams({ query: query});
               } else {
                 setSearchParams({});
               }
             }} />
    </div>
  );
}

export default SearchComponent;
