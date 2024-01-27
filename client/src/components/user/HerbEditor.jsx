import { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import useFetch from '../../hooks/useFetch';
import DarkTable from '../micro/DarkTable';

function HerbEditor() {
  const { data: herbs } = useFetch(`${API_URL}/herbs`);
  const [updatedHerbs, setUpdatedHerbs] = useState([]);

  const fetchHerbs = async () => {
    const response = await fetch(`${API_URL}/herbs`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch update data, status: ${response.status}`);
    }
    const responseData = await response.json();
    setUpdatedHerbs([...responseData]);
  };

  useEffect(() => {
    setUpdatedHerbs(herbs);
  }, [herbs]);

  return (
    <div className="herb-editor-container text-center w-75 mx-auto my-3">
      {/* {
        data && data.map(item => <CardKitchenSinkEditor key={uniqueKeyGenerator()} stockItem={item} />)
      } */}
      {updatedHerbs && (
        <DarkTable
          updatedHerbs={updatedHerbs}
          setUpdatedHerb={setUpdatedHerbs}
          fetchHerbs={fetchHerbs}
        />
      )}
    </div>
  );
}

export default HerbEditor;
