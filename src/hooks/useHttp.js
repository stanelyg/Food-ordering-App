import { useCallback, useEffect, useState } from 'react';

 async function  sendHttpRequest(url,config) {
   const response = await fetch(url, config);
   const resData = await response.json();
   console.log(resData);
  
    if (!response.ok) {
      throw new Error( resData.message || 'Failed to send HTTP request');
    }

    return resData;
}

const useHttp = (url,config,initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
   function ClearData() {
    setData(initialData);
   }

  const sendRequest = useCallback( async function sendRequest(data) {
    setIsLoading(true);
    setError(null);
    try {
      const responseData = await sendHttpRequest(url, { ...config, body: data });
      setData(responseData);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
    return { data, isLoading, error, sendRequest };
  }, [url, config]);

  useEffect(() => {
    if (config && (config.method === 'GET' || !config.method) || !config) {
      sendRequest();
    }
  }, [sendRequest, url, config]);

  return { data, isLoading, error, sendRequest, ClearData};
};

export default useHttp;
