import { useState, useEffect } from 'react';
import { fetchCollectionData } from '@/lib/firestore';

const useFirestore = (collectionName, queryConstraint = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchCollectionData(collectionName, queryConstraint);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [collectionName, queryConstraint]);

  return { data, loading, error };
};

export default useFirestore;
