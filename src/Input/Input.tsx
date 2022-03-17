import React, { useEffect, useState } from "react";

interface InputProps {
  type?: "text";
  label: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  style?: {};
  value?: string;
  className?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  onChange,
  style,
  value = "",
  className,
}) => {
  const [internalValue, setInternalValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInternalValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <input
      type={type}
      value={internalValue}
      onChange={handleChange}
      placeholder={placeholder}
      style={style}
      className={className}
    />
  );
};

export default Input;
