import styled from "styled-components";

import Form from "../components/Form";
import Intro from "../components/Intro";
import Todos from "../components/Todos";

const Div = styled.div`width:1200px; margin:auto;`

const Main = () => {
  return (
    <Div>
      <Intro />
      <Form />
      <Todos />
    </Div>
  );
}

export default Main;
