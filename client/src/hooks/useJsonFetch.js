import { useState, useRef } from 'react';

import { useAsyncEffect } from 'use-async-effect';

const useJsonFetch = (url, options, inputs = []) => {
  const [response, setResponse] = useState();
  const canceled = useRef(false);

  useAsyncEffect(async () => {
    try {
      const res = await fetch(url, options);
      const body = await res.json();

      if (res.status !== 200) {
        throw new Error(body.message);
      }

      if (!canceled.current) {
        setResponse(body);
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }, () => { canceled.current = true; }, inputs);

  return response;
};

export default useJsonFetch;
