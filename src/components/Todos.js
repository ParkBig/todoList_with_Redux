import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import List from "./List.js";

const UpperList = styled.div`display:flex; flex-wrap:wrap;`;

const Todos = () => {
    const todoArr = useSelector(state=>state.todoArr.value);
    return (
       <div>
            <div id="working">
                <h1>Working..🔥</h1>
                <UpperList>
                    {todoArr.map((prop,index)=> !prop.done ? <List key={prop.id} index={index} /> : null )}
                </UpperList>
            </div>
            <div id="done">
                <h1>Done..!🎉</h1>
                <UpperList>
                    {todoArr.map((prop,index)=> prop.done ? <List key={prop.id} index={index} /> : null )}
                </UpperList>
            </div>
       </div>
    )
}

export default Todos;