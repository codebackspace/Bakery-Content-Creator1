import React from 'react';

interface InputProps {
  label?: string;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  as?: 'input' | 'textarea';
  rows?: number;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type = 'text',
  value,
  placeholder,
  error,
  onChange,
  as = 'input',
  rows = 4,
  required = false,
}) => {
  const inputClass = `w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors ${
    error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
  }`;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          rows={rows}
          className={inputClass}
          required={required}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          className={inputClass}
          required={required}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
