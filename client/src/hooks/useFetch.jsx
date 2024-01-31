import { useState, useEffect } from 'react';

const useFetch = (url, fetchOptions, trigger = url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(url, fetchOptions);
        // console.log('useFetch triggered:', response)
        if (!response.ok) {
          const errorMessage = await response.json();
          // console.log('fetchError:', errorMessage.message)
          setError(errorMessage);
        } else {
          const result = await response.json();
          setData(result);
          setisPending(false);
        }
        // console.log('useFetch triggered:', result)
      })();
    } catch (err) {
      setisPending(false);
      setError(err.message);
      // throw new Error('Could not fetch the data', err);
    }
  }, [trigger]);
  return { data, isPending, error };
};

export default useFetch;
