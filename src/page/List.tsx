import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../api/api";
import Header from "../component/common/Header";
import Layout from "../component/common/Layout";

const Content: React.FC = () => {
  const location = useLocation();
  // -----------------------------------------------------------------------------
  const [contentData, setContentData] = useState({
    id: 1,
    title: "아잉",
    writer: "하잉",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg",
    description: "오잉",
  });
  const [imageSize, setImageSize] = useState("cover");
  // -----------------------------------------------------------------------------
  const getContent = async () => {
    const { data } = await instance.get(`/contentList/${location.state?.n}`);
    setContentData(data);
  };

  useEffect(() => {
    getContent();
  }, []);
  // -----------------------------------------------------------------------------
  const ChangeSize = () => {
    switch (imageSize) {
      case "contain":
        setImageSize("cover");
        break;
      default:
        setImageSize("contain");
    }
  };
  // -----------------------------------------------------------------------------
  return (
    <>
      <Layout>
        <Title>{contentData?.title}</Title>
        <Writer>{contentData?.writer}</Writer>
        <ImageBox
          onClick={ChangeSize}
          imgUrl={contentData?.imgUrl}
          imageSize={imageSize}
        >
          <div className="image"></div>
        </ImageBox>
        <Description>{contentData?.description}</Description>
      </Layout>
    </>
  );
};

const ListPage: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Writer = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
const ImageBox = styled.div<{ imgUrl: string; imageSize: string }>`
  width: 400px;
  height: 400px;
  background-color: black;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    ${({ imgUrl }) => `url(${imgUrl})`} no-repeat;
  background-position: center;
  background-size: 110% 110%;
  border-radius: 15px;
  margin: 0 auto 50px;
  cursor: pointer;
  overflow: hidden;
  .image {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background: ${({ imgUrl }) => `url(${imgUrl})`} no-repeat;
    background-position: center;
    background-size: ${({ imageSize }) => `${imageSize}`};
  }
`;
const Description = styled.div`
  font-size: 15px;
`;

export default ListPage;
