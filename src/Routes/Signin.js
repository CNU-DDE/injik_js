import React, { useEffect } from "react";
import styled from "styled-components";
import SubHeader from "../Components/SubHeader";
import MainFooter from "../Components/MainFooter";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isLoggedinAtom, isEmployAtom, keystoreAtom } from "../atoms";
import { useRecoilState } from "recoil";
import {Cookies} from 'react-cookie'

const Main = styled.main`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 635px;
    min-width: 300px;
    min-height: 200px;
`;

const Login = styled.div`
    display: flex;
    flex-direction: column;
    width: 16%;
    min-width: 300px;
`;

const Header = styled.div`
    border-bottom: 1px solid #d2dae2;
    margin-bottom: 20px;
`;

const Headerh1 = styled.h1`
    color: ${(props) => props.theme.gray};
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -2px;
`;

const Headerh3 = styled.h3`
    color: ${(props) => props.theme.navy};
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.8;
    letter-spacing: -1px;
    margin-bottom: 10px;
`;
//━━━━━━━━━━━━━
const LoginLog = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
`;

const LoginLogspan = styled.span`
    margin-right: 15px;
    font-size: 12px;
    color: ${(props) => props.theme.navy};
`;
//━━━━━━━━━━━━━
const LoginInput = styled.form`
    display: grid;
    grid-template-columns: 3fr 1fr ;
    grid-template-rows: repeat(2,1fr) ;
    height: 65px;
`;

const LoginInputid = styled.input`
    border: 1px solid #4b4b4b;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`;

const LoginInputpw = styled.input`
    border: 1px solid #4b4b4b;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
`;

const LoginInputbutton = styled.button`
    border: 2px solid #4b4b4b;
    background-color: ${(props) => props.theme.skyblue};
    color: ${(props) => props.theme.white};
    font-weight: 600;
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    width: 85px;
    &:hover {
      cursor: pointer;
    }
`;

//━━━━━━━━━━━━━
const LoginAlter = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    span {
        opacity: 0.5;
        margin-right: 10px;
    }
`;

const LoginAltersignup = styled(Link)`
    text-decoration-line: none;
    color: ${(props) => props.theme.gray};
    font-size: 13px;
    font-weight: bold;
    margin-right: 10px ;
`;

const LoginAlterfind = styled(Link)`
    color: ${(props) => props.theme.gray};
    text-decoration-line: none;
    font-size: 13px;

`

function Signin() {
    const { register, handleSubmit, formState, setError, } = useForm();
    const navigate = useNavigate();
    const [isLoggedin, setIsLogined] = useRecoilState(isLoggedinAtom);
    const [isEmploy, setIsEmploy] = useRecoilState(isEmployAtom);
    const [keystore, setKeystore] = useRecoilState(keystoreAtom);


    useEffect(() => {
        console.log("signin mount !!!");
    },[]);
    
    // RestAPI POST ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const onValid = (data) => {
        if(data.keystore === "{\"test\": true}" && data.password === "1234") {
            setIsLogined(true);
            navigate("/");
            return ;
        }
        data.keystore = JSON.parse(data.keystore);
        const axios = require('axios'); 
        axios.default.withCredentials = true;   
        const config = {
            method: 'post',
            url: 'http://saltwalks.ddns.net:60072/api/v0/user/token',
            headers: { 
                'Content-Type': 'application/json',
            },
            data : JSON.stringify(data),
        };
    
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            //console.log(document.cookie)
            setIsLogined(true);
            // setIsEmploy(data.); keystore로 회원정보 가져와야댐 !!!!!!!!!!!!!!!
            setKeystore(JSON.stringify(data.keystore));
            navigate("/");
            const cookies = new Cookies();
            cookies.set("access_token", response.data.access_token)
        })
        .catch(function (error) {
            alert("로그인에 실패하였습니다. 등록되지 않은 아이디거나\n, 아이디 또는 비밀번호가 일치하지 않습니다.");
        });
    };



    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    return(
        <>
        <SubHeader/>
        <Main>
            <Login>
                <Header>
                    <Headerh1>인직입니다. 환영합니다.</Headerh1>
                    <Headerh3>믿고 사용할 수 있는 구인/구직 사이트입니다.</Headerh3>
                </Header>
                <LoginLog>
                    <input type="checkbox"/>
                    <LoginLogspan>로그인 유지</LoginLogspan>
                    <input type="checkbox"/>
                    <LoginLogspan>아이디 저장</LoginLogspan>
                </LoginLog>
                <div>
                <LoginInput onSubmit={handleSubmit(onValid)}>
                    <LoginInputid
                    {...register("keystore", {required: true})}
                    placeholder="key값"></LoginInputid>
                    <LoginInputpw
                    {...register("password", {required: true})}
                    placeholder="비밀번호"
                    type="password"></LoginInputpw>
                    <LoginInputbutton>로그인</LoginInputbutton>
                </LoginInput>
                </div>
                <LoginAlter>
                    <LoginAltersignup
                    to="/Signup"
                    >회원가입</LoginAltersignup>
                    <span>|</span>
                    <LoginAlterfind
                    to="/"
                    >아이디/비밀번호 찾기</LoginAlterfind>
                </LoginAlter>
            </Login>
        </Main>
        <MainFooter/>
        </>
    );
}

export default Signin;