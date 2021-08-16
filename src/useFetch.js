import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = endpoint => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://610bb7502b6add0017cb3a35.mockapi.io/api/v1";
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/${endpoint}`)
      .then(data => {
        setData(data.data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setData(null);
        err.message ? setError(err.message) : setError(null);
      });
  }, [endpoint]);
  return { data, isLoading, error };
};

export default useFetch;
