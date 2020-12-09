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

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      padding: 2rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }

  @media (max-width: 320px) {
    height: 15vh;
    padding: 1rem;

    ul {
      padding: 1rem;
    }
  }

  @media (max-width: 375px) {
    height: 13vh;
  }
`;
