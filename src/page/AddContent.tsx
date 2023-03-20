import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../api/api";
import ButtonLayout from "../component/common/ButtonLayout";
import Layout from "../component/common/Layout";
import TextComponent from "../component/common/Text";

const AddContentPage = () => {
  const navigate = useNavigate();

  const [titleValue, setTitleValue] = useState("");
  const postId = Date.now();
  const writer = "로이어드";
  const createdAt = Date.now();
  const [imgUrl, setImgUrl] = useState("");
  const [descValue, setDescValue] = useState("");

  const addPost = async () => {
    await instance.post("/contentList", {
      id: postId,
      title: titleValue,
      writer: writer,
      createdAt: createdAt,
      imgUrl: imgUrl,
      description: descValue,
    });
    navigate("/", { replace: true });
  };

  return (
    <Wrap>
      <Layout>
        <ContentWrap>
          <TextComponent
            label="제목"
            type="input"
            getText={titleValue}
            setText={setTitleValue}
          />
          <TextComponent
            label="이미지 링크"
            type="input"
            getText={imgUrl}
            setText={setImgUrl}
          />
          <TextComponent
            label="내용"
            type="textarea"
            getText={descValue}
            setText={setDescValue}
          />
          <ButtonLayout
            onClick={addPost}
            name={"등록하기"}
            width={"100px"}
            height={"50px"}
          />
        </ContentWrap>
      </Layout>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: gray;
  padding-top: 30px;
  height: 1000px;
`;
const ContentWrap = styled.div`
  height: 700px;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 5px 0px black;
`;

export default AddContentPage;
