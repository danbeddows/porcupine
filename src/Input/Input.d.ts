import React from "react";
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
declare const Input: React.FC<InputProps>;
export default Input;
