import { useState } from "react";

import styled from "styled-components";

const ListCard: React.FC = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const CardMouseOver = () => {
    setIsMouseOver(true);
  };
  const CardMouseOut = () => {
    setIsMouseOver(false);
  };
  return (
    <Wrap
      onMouseOver={CardMouseOver}
      onMouseOut={CardMouseOut}
      isMouseOver={isMouseOver}
    >
      <Img></Img>
      <Title>
        아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아
      </Title>
      <Writer>
        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      </Writer>
    </Wrap>
  );
};

const Wrap = styled.li<{ isMouseOver: boolean }>`
  width: 250px;
  cursor: pointer;
  padding: 5px;
  transition: box-shadow 0.3s;
  border-radius: 15px;
  ${({ isMouseOver }) => (isMouseOver ? `box-shadow: 0 0 5px 0 gray;` : ``)}
`;
const Img = styled.div`
  height: 150px;
  background: url(https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg)
    no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Writer = styled.div`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #b3b3b3;
`;

export default ListCard;
