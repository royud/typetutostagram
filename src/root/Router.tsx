import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

//page
import MainPage from "../page/Main";

const Root: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Root;
