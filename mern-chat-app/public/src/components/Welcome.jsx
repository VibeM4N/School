import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Welcome() {
  const loading = "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif";

  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    async function initUserName() {
      setUserName(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        ).username
      );
    };

    initUserName();
  }, []);
  return (
    <Container>
      <img src={loading} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a user to Start messaging.</h3>
      <h3 className="noteh3">Note:- Do not worry about privacy we do not hold any data!</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30%;
  }
  span {
    color: rgb(27, 205, 178);
  }
  .noteh3{
    color: goldenrod;
  }
`;
