import React from "react";
import styled from "styled-components";

const IntroContents =  styled.div`display: flex; height: 50px; margin: auto; padding: 10px; justify-content: space-between;`

const Intro = () => {
    return (
        <IntroContents>
            <div><h3>My Todo List</h3></div>
            <div><h3>React</h3></div>
        </IntroContents>
    )
}

export default Intro;