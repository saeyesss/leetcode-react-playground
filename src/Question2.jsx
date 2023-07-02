import { useEffect, useRef } from 'react';

const PhoneInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleInput = () => {
      const input = inputRef.current.value.replace(/\D/g, '').substring(0, 10);
      const firstPart = input.substring(0, 3);
      const middlePart = input.substring(3, 6);
      const lastPart = input.substring(6, 10);
      const oldSelectionStart = inputRef.current.selectionStart;
      const oldLength = inputRef.current.value.length;

      if (input.length > 6) {
        inputRef.current.value = `(${firstPart}) ${middlePart}-${lastPart}`;
      } else if (input.length > 3) {
        inputRef.current.value = `(${firstPart}) ${middlePart}`;
      } else if (input.length > 0) {
        inputRef.current.value = `(${firstPart}`;
      } else {
        inputRef.current.value = '';
      }

      const newLength = inputRef.current.value.length;
      const caretOffset = oldLength - oldSelectionStart;
      const newSelectionStart = newLength - caretOffset;
      inputRef.current.setSelectionRange(newSelectionStart, newSelectionStart);
    };

    inputRef.current.addEventListener('input', handleInput);

    return () => {
      inputRef.current.removeEventListener('input', handleInput);
    };
  }, [inputRef]);

  return (
    <div className='container text-center'>
      <input
        type='tel'
        id='phone'
        maxLength='16'
        placeholder='mobile number'
        autoComplete='off'
        ref={inputRef}
      />
      <div>
        <label htmlFor='phone'>(123) 456-7890</label>
      </div>
    </div>
  );
};

export default PhoneInput;
