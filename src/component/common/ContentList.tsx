import styled from "styled-components";
import ListCard from "./ListCard";

const ContentList: React.FC = () => {
  return (
    <Wrap>
      <ListCard></ListCard>
      <ListCard></ListCard>
    </Wrap>
  );
};

const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default ContentList;
