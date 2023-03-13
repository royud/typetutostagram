import styled from "styled-components";
import Layout from "./Layout";

const Header: React.FC = () => {
  return (
    <Wrap>
      <Layout>ss</Layout>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid gray;
  box-shadow: 0 0 5px 0 black;
`;

export default Header;
