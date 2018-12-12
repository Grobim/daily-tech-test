import { useState } from 'react';

const defaultFetchOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const useFormSubmit = (url, options, body) => {
  const [response, setResponse] = useState('');

  const onSubmit = async (e = new Event()) => {
    e.preventDefault();

    const fetchOptions = {
      ...defaultFetchOptions,
      ...options,
    };

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    const fetchRes = await fetch(url, fetchOptions);

    const text = await fetchRes.json();

    setResponse(text);
  };

  return {
    response,
    onSubmit,
  };
};

export default useFormSubmit;
