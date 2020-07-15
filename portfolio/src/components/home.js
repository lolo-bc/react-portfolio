import React from 'react';

function Home() {

    const homeBodyContaier = {
        padding: "10px",
        marginTop: "20%",
        marginLeft: "35px",
        width: "50%"
      };

    const name = {
        fontSize: "60px",
        letterSpacing: "6px",
        fontWeight: "300",
        marginTop: "5px"
    }

    const hello = {
        fontWeight: "900",
        letterSpacing: "2px"
    }

    const p = {
        fontSize: "27px"
    }

    return (
    <div style={homeBodyContaier}>
        <h1 style={hello}>HELLO, MY NAME IS</h1>
        <h1 style={name}>LAUREN CAMERON</h1>
        <p style={p}>
        I'm a full stack web developer in The Triangle, North Carolina.
        </p>
    </div>
    )};
  
  export default Home;
  