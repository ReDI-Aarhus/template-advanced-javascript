import React, { useEffect, useState, useMemo } from 'react';
import { debounce as lodashDebounce } from 'lodash';


export const InputText = ({
  value = '',
  onChange,
  debounce = 300,
  label,
  icon,
  placeholder = '',
  className = '',
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const debouncedChange = useMemo(
    () =>
      lodashDebounce((val) => {
        onChange(val);
      }, debounce),
    [debounce, onChange]
  );

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    debouncedChange(val);
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="flex items-center border rounded px-2 py-1 bg-white shadow-sm">
        {icon && <span className="mr-2 text-gray-500">{icon}</span>}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="outline-none flex-1 text-sm"
        />
      </div>
    </div>
  );
};

export default InputText;
