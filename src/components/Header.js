import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <h1>Search for a topic</h1>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export default Header;
