import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Div = styled.div`display:flex; justify-content:center; align-items: center; height:100vh;`// 화면의 정가운데로
const UpperDiv = styled.div`margin:12px; align-items:center; border-style:solid;border-width:4;border-color:green;border-radius:10px;height: 400px;;width:688px; padding:12px 12px 12px 12px;`
const FirChilDiv = styled.div`height:40px; display:flex; justify-content:space-between;`
const Button = styled.button`border-radius:15px; border:2;`
const SecChilDiv = styled.div`height:300px;`;
const PUnderDiv = styled.p`margin:8px 0 5px 0; word-break:break-all;`


const DetailList = () => {
    const {id} = useParams(); // 현재 id 는 uuid 값임
    const todoArr = useSelector(state=>state.todoArr.value).find(x=> x.id===id);
    const title = todoArr.tit;
    const contents = todoArr.cont;
    return (
        <Div>
            <UpperDiv>
                <FirChilDiv>
                    <div>
                        ID : {id}
                    </div>
                    <Button><Link to={"/"} style={{textDecorationLine:"none"}}>이전으로</Link></Button>
                </FirChilDiv>
                <SecChilDiv>
                    <h2>{title}</h2>
                    <PUnderDiv>{contents}</PUnderDiv>
                </SecChilDiv>
            </UpperDiv>
        </Div>
    );
}

export default DetailList;