import { useState, useRef } from 'react';

const PhoneInput = () => {
  const [formattedInput, setFormattedInput] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 10);
    const areaCode = input.substring(0, 3);
    const middlePart = input.substring(3, 6);
    const lastPart = input.substring(6, 10);

    let caretStart = e.target.selectionStart;
    const caretOffset = e.target.value.length - formattedInput.length;

    if (input.length > 6) {
      setFormattedInput(`(${areaCode}) ${middlePart}-${lastPart}`);
    } else if (input.length > 3) {
      setFormattedInput(`(${areaCode}) ${middlePart}`);
    } else if (input.length > 0) {
      setFormattedInput(`(${areaCode}`);
    } else {
      setFormattedInput('');
    }

    if (caretOffset < 0) {
      caretStart -= Math.abs(caretOffset);
    } else {
      caretStart += caretOffset;
    }

    inputRef.current.setSelectionRange(caretStart, caretStart);

    console.log('object');
  };

  return (
    <div className='container text-center'>
      <input
        type='tel'
        id='phone'
        maxLength='16'
        placeholder='mobile number'
        autoComplete='off'
        value={formattedInput}
        ref={inputRef}
        onChange={(e) => handleChange(e)}
      />
      <div>
        <label htmlFor='phone'>(123) 456-7890</label>
      </div>
    </div>
  );
};

export default PhoneInput;
