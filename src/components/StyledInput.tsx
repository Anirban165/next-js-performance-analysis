import React, { HTMLInputTypeAttribute, LegacyRef } from 'react';

interface StyledInputProps {
  reference: LegacyRef<HTMLInputElement>;
  labelText: string;
  type: HTMLInputTypeAttribute;
  placeholder: HTMLInputTypeAttribute | undefined;
  id: HTMLInputTypeAttribute;
  value?: string;
}

const StyledInput = ({
  reference,
  labelText,
  type,
  placeholder,
  id,
  value,
}: StyledInputProps) => {
  return (
    <div className="flex flex-col my-5 md:my-10">
      <label htmlFor="email">{labelText}</label>
      <input
        className="border-b-2 border-gray-600 focus:ring-0 px-2 py-1 my-2"
        type={type}
        id={id}
        name={id}
        ref={reference}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default StyledInput;
