import React, { useState } from "react";
import styled from "styled-components";

function Search(props) {
  const { onClickSearch } = props;
  const [useSearch, setSearch] = useState("");

  return (
    <div>
      <Container>
        <BoxInput>
          <input
            type={"text"}
            id="input__search"
            value={useSearch}
            onChange={(e) => setSearch(e.target.value)}
          />
        </BoxInput>
        <ButtonSearch onClick={() => onClickSearch(useSearch)}>
          Search
        </ButtonSearch>
      </Container>
      <BoxSearchResult>
        <span>Found 3980 article on "airbnb"</span>
      </BoxSearchResult>
    </div>
  );
}

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const BoxInput = styled.div`
  width: 180px;
  height: 40px;
  border: 1px solid #5dade2;
  padding: 8px;
  border-radius: 8px;

  #input__search {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;
const ButtonSearch = styled.button`
  background-color: #58d68d;
  height: 40px;
  width: 100px;
  color: #ffffff;
  border-radius: 8px;
  outline: none;
  border: none;
`;
const BoxSearchResult = styled.div`
  margin-top: 40px;
  font-size: 18px;
  text-align: center;
`;

export default Search;
