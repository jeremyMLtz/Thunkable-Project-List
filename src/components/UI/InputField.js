import { useState } from "react";
import styled from "@emotion/styled";
import { Input } from "antd";

/**
 * @param {function} onSubmit - Handler for when the Enter key is pressed while input is focused
 * @param {string} [defaultVale]
 */
const InputField = ({ className, onSubmit, defaultValue }) => {
  const [text, setText] = useState(defaultValue ?? "");
  const [showError, setShowError] = useState(false);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.trim().length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
    setText(inputValue);
  };
  return (
    <Input
      className={className}
      placeholder='Name your project'
      onChange={(e) => handleChange(e)}
      onPressEnter={() => onSubmit(text)}
      value={text}
      status={showError && "error"}
    />
  );
};

const styledInputField = styled(InputField)`
  max-inline-size: 180px;
`;

export default styledInputField;
