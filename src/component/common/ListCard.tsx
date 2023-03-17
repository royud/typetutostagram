import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { ContentInterface } from "../../util/interface";

const ListCard = ({ cardInfo }: { cardInfo: ContentInterface }) => {
  const navigate = useNavigate();
  // ---------------------------------------------------------------------------
  const [isMouseOver, setIsMouseOver] = useState(false);
  // ---------------------------------------------------------------------------
  const CardMouseOver = () => {
    setIsMouseOver(true);
  };
  const CardMouseOut = () => {
    setIsMouseOver(false);
  };
  const goToListPage = (id: number) => {
    navigate(`/list?n=${id}`, {
      state: {
        n: id,
      },
    });
  };
  // ---------------------------------------------------------------------------
  return (
    <Wrap
      onMouseOver={CardMouseOver}
      onMouseOut={CardMouseOut}
      onClick={() => {
        goToListPage(cardInfo.id);
      }}
      isMouseOver={isMouseOver}
    >
      <Img imgUrl={cardInfo.imgUrl}></Img>
      <Title>{cardInfo.title}</Title>
      <Writer>{cardInfo.writer}</Writer>
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
const Img = styled.div<{ imgUrl: string }>`
  height: 150px;
  background: ${({ imgUrl }) => `url(${imgUrl})`} no-repeat;
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
