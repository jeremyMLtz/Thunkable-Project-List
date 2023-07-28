import { useState } from "react";
import styled from "@emotion/styled";
import { Input } from "antd";

/**
 * @param {function} onSubmit - Handler for when the Enter key is pressed while input is focused
 * @param {string} [defaultVale]
 */
const InputField = ({ className, onSubmit, defaultValue }) => {
  const [text, setText] = useState(defaultValue ?? "");
  return (
    <Input
      className={className}
      placeholder='Name your project'
      onChange={(e) => setText(e.target.value)}
      onPressEnter={() => onSubmit(text)}
      value={text}
    />
  );
};

const styledInputField = styled(InputField)`
  max-inline-size: 180px;
`;

export default styledInputField;
