import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Article from "./components/Article";
import styled from "styled-components";
const key = "ece7f3a125de4399b352d7afaebf97d9";
function App() {
  const [useArticles, setArticles] = useState([]);

  useEffect(() => {
    //componentdidmount
    (async () => {
      const data = await getNews("facebook");
      setArticles(data.articles);
    })();

    // setArticles(data)
  }, []);

  const getNews = async (topic) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${key}`
    );
    const json = await response.json();
    return json;
  };

  const onClickSearch = async (search) => {
    const data = await getNews(search);
    setArticles(data.articles);
  };

  return (
    <Container>
      <Header />
      <Search onClickSearch={onClickSearch} />
      {useArticles.length > 0 &&
        useArticles.map((item, index) => {
          const { author, description, publishedAt, title, urlToImage } = item;
          return (
            <Article
              key={index}
              title={title}
              description={description}
              author={author}
              publishedAt={publishedAt}
              urlToImage={urlToImage}
            />
          );
        })}
      {/* <Article /> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  height: 100%;
  margin: auto;
`;

export default App;
