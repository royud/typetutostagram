import ContentList from "../component/common/ContentList";
import Header from "../component/common/Header";
import Layout from "../component/common/Layout";

const Content: React.FC = () => {
  return (
    <Layout>
      <ContentList></ContentList>
    </Layout>
  );
};

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default MainPage;
