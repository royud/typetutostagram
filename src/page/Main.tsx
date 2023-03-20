import { useEffect, useState } from "react";

import { instance } from "../api/api";

import ContentList from "../component/common/ContentList";
import Header from "../component/common/Header";
import Layout from "../component/common/Layout";

const Content = () => {
  const [contentList, setContentList] = useState([]);
  const getContentList = async () => {
    const { data } = await instance.get(
      `/contentList?_sort=createdAt&_order=desc`
    );
    setContentList(data);
  };

  useEffect(() => {
    getContentList();
  }, []);

  return (
    <Layout>
      <ContentList list={contentList} />
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
