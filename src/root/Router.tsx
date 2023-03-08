import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components";

import MainPage from "../page/Main";

const Root: React.FC = () => {
  return (
    <Wrap>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #262626;
  color: #e7e7e7;
`;

export default Root;
