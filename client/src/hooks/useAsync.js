import { useState } from "react";

const useAsync = (action) => {
  const [data, setData] = useState();

  const doFetch = async () => {
    const newData = await action();
    setData(newData);
  };
  return { data, doFetch };
};

export default useAsync;
