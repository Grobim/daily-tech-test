import React from 'react';

import { useJsonFetch, useFormInput, useFormSubmit } from '../hooks';

const HelloWorldForm = () => {
  const postInput = useFormInput();

  const { response, onSubmit } = useFormSubmit(
    '/api/world',
    { method: 'POST' },
    { post: postInput.value },
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <strong>Post to Server:</strong>
        </p>
        <input
          type="text"
          {...postInput}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{response.message}</p>
    </div>
  );
};

const Home = () => {
  const response = useJsonFetch('/api/hello');

  return (
    <div>
      <h2>home</h2>
      <p>{response}</p>
      <HelloWorldForm />
    </div>
  );
};

export default Home;
