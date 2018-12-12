import { useState } from 'react';

const useFormInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e = new Event()) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

export default useFormInput;
