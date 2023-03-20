import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const TextComponent = ({
  label,
  type,
  getText,
  setText,
}: {
  label: string;
  type: string;
  getText: string;
  setText: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Wrap>
      <TextLable>{label}</TextLable>
      {type === "input" && (
        <InputLayout>
          <input
            type={"text"}
            value={getText}
            onChange={({ target: { value } }) => {
              setText(value);
            }}
          />
        </InputLayout>
      )}
      {type === "textarea" && (
        <TextareaLayout>
          <textarea
            value={getText}
            onChange={({ target: { value } }) => {
              setText(value);
            }}
          />
        </TextareaLayout>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-bottom: 10px;
`;

const TextLable = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
`;
const InputLayout = styled.div`
  width: 300px;
  padding: 5px;
  font-size: 15px;
  border-bottom: 1px solid black;
  input {
    width: 100%;
    border: none;
    outline: none;
  }
`;
const TextareaLayout = styled.div`
  width: 300px;
  height: 50px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  textarea {
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    outline: none;
  }
`;

export default TextComponent;
