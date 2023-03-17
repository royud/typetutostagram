import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

//page
import MainPage from "../page/Main";
import ListPage from "../page/List";
import AddContentPage from "../page/AddContent";

const Root: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/write" element={<AddContentPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Root;
