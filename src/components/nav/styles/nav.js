import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  #logo {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 6rem;
    position: relative;
  }
`;
