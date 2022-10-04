import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle, deleteIndex } from "../store/modules/todoArr";

const UpperDiv = styled.div`margin:12px; align-items:center; border-style:solid;border-width:4;border-color:green;border-radius:10px;height: 200px;;width:344px; padding:12px 12px 12px 12px;`
const FirChilDiv = styled.div`height:120px;`
const PUnderFirDiv = styled.p`margin:8px 0 5px 0; word-break:break-all;`
const SecChilDiv = styled.div`height:50px; display:flex;`
const ButtonUnderSecDiv = styled.button`display:block; height:40px; width:135px; margin:5px auto 5px auto; justify-content:center; border:0; border-radius:15px; background-color:aquamarine;`

const List = ({index}) => {
    const dispatch = useDispatch();
    const todoArr = useSelector(state=>state.todoArr.value);

    const toggleClick = () => {dispatch(toggle(index))}
    const clickDelete = () => {dispatch(deleteIndex(index))}
    return (
        <UpperDiv>
            <FirChilDiv>
                <p><Link to={`/${todoArr[index].id}`}>상세 보기</Link></p>
                <h2>{todoArr[index].tit}</h2>
                <PUnderFirDiv>{todoArr[index].cont}</PUnderFirDiv>
            </FirChilDiv>
            <SecChilDiv>
                <ButtonUnderSecDiv onClick={clickDelete}>삭제하기</ButtonUnderSecDiv>
                {todoArr[index].done ? <ButtonUnderSecDiv onClick={toggleClick}>취소</ButtonUnderSecDiv> : <ButtonUnderSecDiv onClick={toggleClick}>완료</ButtonUnderSecDiv>}
            </SecChilDiv>
        </UpperDiv>
    )
}

export default List