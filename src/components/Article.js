import React from "react";
import styled from "styled-components";

function Article(props) {
  const { title, description, author, publishedAt, urlToImage } = props;
  return (
    <Container>
      <BoxContent>
        <div className="title">{title}</div>
        <div className="des">{description}</div>
        <div className="footer">
          <span id="author">{author}</span> | <span>{publishedAt}</span>
        </div>
      </BoxContent>
      <BoxImage>
        <img src={urlToImage} alt="img_content" />
      </BoxImage>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 24px;
  display: flex;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid silver;

  @media only screen and (max-width: 960px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px;
  }
`;

const BoxContent = styled.div`
  width: 100%;

  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .des {
    margin-top: 24px;
    color: #1e1e1e;
    min-height: 100px;
    word-wrap: break-word;
  }
  .footer {
    margin-top: 24px;
    #author {
      color: blue;
    }
  }
`;
const BoxImage = styled.div`
  width: 250px;
  img {
    width: 250px;
    height: 180px;
    object-fit: cover;
  }
`;

export default Article;
