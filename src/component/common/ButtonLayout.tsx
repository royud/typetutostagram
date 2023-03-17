import styled from "styled-components";

const ButtonLayout = ({
  onClick,
  name,
  width,
  height,
}: {
  onClick(): void;
  name: string;
  width: string;
  height: string;
}) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: black;
  border: black;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export default ButtonLayout;
