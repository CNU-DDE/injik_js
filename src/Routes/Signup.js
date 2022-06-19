import styled from "styled-components";
import React, { useState,useCallback } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Modal from "../Components/Modal";
import KeyStoreInfo from "../Components/KeyStoreInfo";
import axios from "axios";
import injiklogo2 from "../img/injiklogo2.png";


const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    min-width: 450px;
    height: 100%;
    margin: 0 auto;
`;

const Img = styled.img`
    margin-top: 50px;
    margin-bottom: 80px;
    object-fit: scale-down;
    height: 300px;
`;

const Header = styled.span`
    font-size: 18px;    
    letter-spacing: -2px;
    font-weight: bold;
    color: ${(props) => props.theme.deepgray};
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Type = styled.div`
    margin-top: 20px;
    width: 400px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height: 100px;  
`;

const TypeHeader = styled(Header)`
    margin-bottom: 10px;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid #a4b0be;
    background-color: ${(props) => props.theme.white};
    font-size: 15px;
    font-weight: bold;
    grid-row: 2 / 4;
    span {
        margin-left: 10px;
    }
    &:hover {
        cursor: pointer;
    }
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Password = styled.div`
    margin-top: 30px;
    width: 400px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 150px;  
`;

const PWHeader = styled(Header)`
    margin-bottom: 10px;
    grid-row: 1 / 2;
`;

const PWInput = styled.input`

`; 

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const MainFin = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainFinButton = styled.button`
    margin: 0 auto;
    width: 220px;
    height: 60px;
    background-color: #2d98da;
    font-size: 20px;
    color: #fff;
    letter-spacing: -1px;
    font-weight: bold;
    box-shadow: 0 9px 25px rgb(0 0 0 / 40%);
    &:hover {
        cursor: pointer;
    }
`;

const Info = styled.div`
    margin-top: 30px;
    width: 400px;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    height: 300px; 
`;

const InfoItem = styled.input`
    padding-left: 10px;
`;


function Signup () {
    const [ isEmployer, setIsEmployer ] = useState(false);
    const [ isEmployee, setIsEmployee ] = useState(false);
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const [isOpenModal, setOpenModal] = useState(false);
    const [keyvalue, setKeyvalue] = useState();

    const onClickToggleModal = useCallback(() => {
      setOpenModal(!isOpenModal);
    }, [isOpenModal]);

     // RestAPI POST ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const RestPost = (data) => {
        const RestJSON = {...data};
        delete RestJSON.pwcheck;
        RestJSON["is_employee"] = isEmployee;
        console.log(RestJSON);

       const axios = require('axios');

       const config = {
           method: 'post',
           url: 'http://saltwalks.ddns.net:60080/api/v0/user',
           headers: { 
               'Content-Type': 'application/json'
           },
           data : JSON.stringify(RestJSON)
       };
       
       axios(config)
           .then(function (response) {
            console.log(JSON.stringify(response.data));
            setKeyvalue(response.data.keystore);
           })
           .catch(function (error) {
           console.log(error);
           alert("회원가입 실패");
       });
    }
    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    const EmployeeClick = () => {
        setIsEmployee((prev) => !prev);
        if(isEmployer) {
            setIsEmployer((prev) => !prev);
        }   
    }

    const EmployerClick = () => {
        setIsEmployer((prev) => !prev);
        if(isEmployee) {
            setIsEmployee((prev) => !prev);
        }   
    }

    const onValid = (data) => {
        if((data.password === data.pwcheck) && (isEmployee || isEmployer) === true) {
            RestPost(data);
            setOpenModal(true);
        } else {
            if((isEmployee === false) && (isEmployer === false)) {
                alert("가입 구분을 선택해주세요.");
            } else {
                alert("비밀번호가 일치하지 않습니다.");
            }
        }
    };


    return(
        <>
            <Main>
                {isOpenModal && ( 
                    <Modal onClickToggleApplyInfo={onClickToggleModal}>
                        <KeyStoreInfo keystore={keyvalue}/>
                    </Modal>
                )}
                <Img
                src={injiklogo2}
                >
                </Img>
                <Type>
                    <TypeHeader>가입구분</TypeHeader>
                    {isEmployee ? 
                    <Button
                    style={{backgroundColor: "#3498db"
                    ,color: "white"}}
                    onClick={EmployeeClick}>
                        <span>구직자 (Employee)</span>
                    </Button>
                    :
                    <Button
                    onClick={EmployeeClick}>
                        <span>구직자 (Employee)</span>
                    </Button>
                    }
                    {isEmployer ? 
                    <Button
                    style={{backgroundColor: "#3498db"
                    ,color: "white"}}
                    onClick={EmployerClick}>
                        <span>구인자 (Employer)</span>
                    </Button>
                    :
                    <Button
                    onClick={EmployerClick}>
                        <span>구인자 (Employer)</span>
                    </Button>
                    }
                </Type>
                <form onSubmit={handleSubmit(onValid)}>
                <Info>
                    <PWHeader>정보입력</PWHeader>
                    <InfoItem
                    {...register("display_name", {required: true})}
                    placeholder="이름">
                    </InfoItem>
                    {isEmployer ?
                    <InfoItem
                    {...register("birth", {required: true})}
                    placeholder="회사코드">
                    </InfoItem>
                    :
                    <InfoItem
                    {...register("birth", {required: true})}
                    placeholder="생년월일 ex) 1998.09.12">
                    </InfoItem>
                    }
                    <InfoItem
                    {...register("address", {required: true})}
                    placeholder="주소">
                    </InfoItem>
                    <InfoItem
                    {...register("contact", {required: true})}
                    placeholder="전화번호 ex) 01099811293">
                    </InfoItem>
                    <InfoItem
                    {...register("email", {required: true})}
                    placeholder="이메일">
                    </InfoItem>
                </Info>
                <Password>
                    <PWHeader>비밀번호&nbsp;/&nbsp;확인</PWHeader>
                    <PWInput
                    {...register("password", {required: true})}
                    type="password"
                    placeholder="* 비밀번호">
                    </PWInput>
                    <PWInput
                    {...register("pwcheck", {required: true})}
                    type="password"
                    placeholder="* 비밀번호 확인">
                    </PWInput>
                </Password>
                <MainFin>
                    <MainFinButton>회원가입 완료</MainFinButton>
                </MainFin>
                </form>
            </Main>
        </>
    );

}

export default Signup;
