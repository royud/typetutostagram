import styled from "styled-components";
import { ContentListInterface } from "../../util/interface";
import ListCard from "./ListCard";

const ContentList = ({ list }: { list: ContentListInterface }) => {
  return (
    <Wrap>
      {list &&
        list.map((info) => {
          return <ListCard key={info.id} cardInfo={info} />;
        })}
    </Wrap>
  );
};

const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default ContentList;
