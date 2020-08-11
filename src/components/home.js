import React from 'react';
import "../index.css"
function Home() {


    // const homeBodyContaier = {
    //     padding: "10px",
    //     marginTop: "20%",
    //     marginLeft: "35px",
    //     width: "50%",
    //     zindex: "1"
    //   };

    const name = {
        fontSize: "60px",
        letterSpacing: "6px",
        fontWeight: "300",
        marginTop: "5px",
        display: "inline"
    }

    const hello = {
        fontWeight: "900",
        letterSpacing: "2px"
    }

    const p = {
        fontSize: "27px"
    }



    return (
        <>
    <div className="homeBodyContaier">
        <h1 style={hello}>HELLO, MY NAME IS</h1>
        <h1 style={name} >LAUREN CAMERON</h1>
        {/* <h1 style={name} className="flip-in-ver-right">L</h1>
        <h1 style={name} className="flip-in-ver-right2">A</h1>
        <h1 style={name} className="flip-in-ver-right3">U</h1>
        <h1 style={name} className="flip-in-ver-right4">R</h1>
        <h1 style={name} className="flip-in-ver-right5">E</h1>
        <h1 style={name} className="flip-in-ver-right6">N</h1>


        <h1 style={name} className="flip-in-ver-right7">C</h1>
        <h1 style={name} className="flip-in-ver-right8">A</h1>
        <h1 style={name} className="flip-in-ver-right9">M</h1>
        <h1 style={name} className="flip-in-ver-right10">E</h1>
        <h1 style={name} className="flip-in-ver-right11">R</h1>
        <h1 style={name} className="flip-in-ver-right12">O</h1>
        <h1 style={name} className="flip-in-ver-right13">N</h1> */}


        <p style={p}>
        I'm a full stack web developer based in Raleigh, North Carolina.
        </p>
        </div>

        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div> 
         {/* <div className="Jumbotron"> */}
          {/* <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>  */}
        </>
        
    )};
  
  export default Home;
  