import React, { ChangeEvent } from "react";

interface TextInputProps {
  label: string;
  labelValue: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  labelValue,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelValue}
      </label>
      <div className="mt-2">
        <input type="text" value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default TextInput;
