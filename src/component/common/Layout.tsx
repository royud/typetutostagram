import { PropsWithChildren } from "react";
import styled from "styled-components";

const Layout = ({ children }: PropsWithChildren) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export default Layout;
