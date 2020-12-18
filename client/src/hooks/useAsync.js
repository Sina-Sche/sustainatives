import { useCallback, useState } from "react";

const useAsync = (action, params) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newData = await action(params);
      setData(newData);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [action, params]);
  return { data, loading, error, fetchData };
};

export default useAsync;
