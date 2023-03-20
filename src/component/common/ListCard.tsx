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
  const createdText = (nowDate: number) => {
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const Today = new Date(nowDate);
    const createdYear = Today.getFullYear();
    const createdMonth = Today.getMonth() + 1;
    const createdDate = Today.getDate();
    const createdHour = Today.getHours();

    const currentDay = Date.now() - nowDate;

    const recent = `최근 업로드`;
    const updateHour = `${parseInt(String(currentDay / hour))}시간 전`;
    const updateMin = `${parseInt(String(currentDay / min))}분 전`;
    const updateFull = `${createdYear}.${
      createdMonth < 10 ? "0" + createdMonth : createdMonth
    }.${createdDate} ${createdHour > 12 ? createdHour - 12 : createdHour}${
      createdHour > 12 ? "PM" : "AM"
    }`;

    if (currentDay / day >= 1) {
      return updateFull;
    } else if (currentDay / hour >= 1) {
      return updateHour;
    } else if (currentDay / min >= 1) {
      return updateMin;
    } else {
      return recent;
    }
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
      <CreatedDate>{createdText(cardInfo.createdAt)}</CreatedDate>
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
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #b3b3b3;
`;
const CreatedDate = styled.div`
  font-size: 12px;
  overflow: hidden;
  color: #b3b3b3;
`;

export default ListCard;
