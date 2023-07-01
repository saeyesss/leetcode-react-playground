import { useState } from 'react';

import './index.css';

const Input = () => {
  const [formattedInput, setFormattedInput] = useState('');

  const formatPhoneNumber = (value) => {
    const input = value.replace(/\D/g, '').substring(0, 10);
    const firstPart = input.substring(0, 3);
    const middlePart = input.substring(3, 6);
    const lastPart = input.substring(6, 10);

    if (input.length > 6) {
      return `(${firstPart}) ${middlePart}-${lastPart}`;
    } else if (input.length > 3) {
      return `(${firstPart}) ${middlePart}`;
    } else if (input.length > 0) {
      return firstPart;
    }

    return '';
  };

  const handleInputChange = (e) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormattedInput(formattedValue);
  };

  return (
    <div>
      <input
        type='tel'
        id='phone'
        maxLength='16'
        placeholder='mobile number'
        autoComplete='off'
        value={formattedInput}
        onChange={handleInputChange}
      />
      <div>
        <label htmlFor='phone'>(123) 456-7890</label>
      </div>
    </div>
  );
};

export default Input;
