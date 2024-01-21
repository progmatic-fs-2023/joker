import { useState, useEffect } from 'react';

const useFetch = (url, fetchOptions, trigger = url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(url, fetchOptions);
        const result = await response.json();
        // console.log('useFetch data:', result)
        setData(result);
        setisPending(false);
        setError(null);
      })();
    } catch (err) {
      setisPending(false);
      setError(err.message);
      throw new Error('Could not fetch the data', err);
    }
  }, [trigger]);
  return { data, isPending, error };
};

export default useFetch;
