import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonLayout from "./ButtonLayout";
import Layout from "./Layout";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Layout>
        <ContentWrap>
          <Title
            onClick={() => {
              navigate("/");
            }}
          >
            TypeTutoStagram
          </Title>
          <ButtonBox>
            <ButtonLayout
              onClick={() => {
                navigate("/write");
              }}
              name={"Add"}
              width={"100px"}
              height={"30px"}
            />
          </ButtonBox>
        </ContentWrap>
      </Layout>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid gray;
  box-shadow: 0 0 5px 0 black;
`;
const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  height: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
