import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { revalueTitle } from "../store/modules/title";
import { revalueContents } from "../store/modules/contents";
import { revalueTodoArr } from "../store/modules/todoArr";

const UpperDiv = styled.div`height:100px; margin:auto;`
const FormTag = styled.form`display:flex; justify-content:center; padding-top:10px; background-color:rgb(204, 204, 120); border-radius:15px; height:80px;`
const LabelTag =styled.label`margin:15px; border-radius:15px; font-size:20px; font-weight: bolder; color: dimgray;`
const InputTag = styled.input`margin:15px; width:250px; height:45px; border-radius:15px; border:0;`
const ButtonTag = styled.button`background-color: dimgray; margin: 15px 15px 15px 150px; height:45px; width:130px; border:0; border-radius:15px; font-size:20px; font-weight:bolder; color:aliceblue;`
const UnderForm = styled.div`margin-left:20px;`

const Form = () => {
    const dispatch = useDispatch();
    const title = useSelector(state=>state.title.value);
    const contents = useSelector(state=>state.contents.value);

    const onChange = (ev) => {(ev.target.id ==="forTitle") ? dispatch(revalueTitle(ev.target.value)) : dispatch(revalueContents(ev.target.value))}
    const onSubmit = (ev) => {ev.preventDefault(); dispatch(revalueTodoArr({id:uuid(), tit:title, cont:contents, done:false})); dispatch(revalueTitle("")); dispatch(revalueContents(""))}
    return (
        <UpperDiv>
            <FormTag onSubmit={onSubmit}>
                <UnderForm>
                    <LabelTag>제목</LabelTag>
                    <InputTag required id="forTitle" onChange={onChange} value={title}/>
                    <LabelTag>내용</LabelTag>
                    <InputTag required onChange={onChange} value={contents}/>
                </UnderForm>
                <ButtonTag>추가하기</ButtonTag>
            </FormTag>
        </UpperDiv>
    )
}

export default Form;
