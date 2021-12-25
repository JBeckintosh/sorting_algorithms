import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const useFetch = (url: string, options: RequestInit) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
      } catch (error: any) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { response, error };
};

export default useFetch;