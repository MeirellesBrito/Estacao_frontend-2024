import React from "react";

function InputField({ label, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputField;
