import { useState } from "react";

const useAsync = (action) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const newData = await action();
    setData(newData);
  };
  return { data, fetchData };
};

export default useAsync;
