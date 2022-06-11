import React, { useState } from "react";
import styled from "styled-components";
import SubHeader from "../Components/SubHeader";
import MainFooter from "../Components/MainFooter";
import Select from "react-select";
import { useForm } from "react-hook-form";
import SubmitButton from "../Components/SubmitButton";

const Entire = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.white1};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    width: 730px;
    height: 100%;
    padding: 30px 40px;
    border: 1px solid #eee;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
`;

const Header = styled.header`
    width: 100%;
    height: 35px;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: -2;
    border-bottom: 2px solid #333;
    margin-bottom: 10px;
`;

const VCSelect = styled.select`
    width: 200px;
`;

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

const Form = styled.form`
    width: 100%;
`;

const Input = styled.input`
    align-items: center;
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    min-height: 30px;
    width: 200px;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0px;
    span {
        color: #1e272e;
        font-size: 17px;
        font-weight: bold;
        margin-right: 10px;
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
`;

function VCIssue() {
    const {
        register,  
        handleSubmit, 
        formState: {errors},
        setError,
    } = useForm();
    
    const [issuer, setIssuer] = useState();
    
    const IssuerSelect = (option) => {
        setIssuer(option.value);
    }

    const onValid = (data) => {
        console.log(issuer);
        if(issuer==="") {
            alert("발급처를 선택해주세요");
        } else {
            PostAPI(data);
        }
    }

    //REST API━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const PostAPI = (data) => {
        const PostJSON = {};
        const tempObj = {
            "from": data.from,
            "to": data.to,
            "at": data.at,
            "what": data.what, 
        };
        PostJSON.issuer = issuer;
        PostJSON.title = data.title;
        PostJSON.claim = tempObj;
        console.log(PostJSON);
        alert("발급완료");
    }
    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    return (
        <>
        <SubHeader/>
            <Entire>
                <Main>
                    <Header>
                        <span>경력발급</span>
                    </Header>
                    <div style={{margin: "30px 0"}}>
                        <Select 
                        options={options}
                        placeholder="발급처를 선택해주세요."
                        onChange={IssuerSelect}
                        />
                    </div>
                    <Form onSubmit={handleSubmit(onValid)}>
                        <Info>
                            <span>발급제목</span>
                        <Input
                        {...register("title", {required: true,})}
                        ></Input>
                        </Info>
                        <Info>
                            <span>시작날짜</span>
                        <Input
                        {...register("from", {required: true,})}
                        placeholder="ex) 2012-03-12"></Input>
                        </Info>
                        <Info>
                            <span>종료날짜</span>
                        <Input
                        {...register("to", {required: true,})}
                        placeholder="ex) 2015-12-23"></Input>
                        </Info>
                        <Info>
                            <span>근무회사</span>
                        <Input
                        {...register("at", {required: true,})}
                        placeholder=""></Input>
                        </Info>
                        <Info>
                            <span>근무내용</span>
                        <Input
                        {...register("what", {required: true,})}
                        style={{width: "500px"}}></Input>
                        </Info>      
                    <Footer>
                        <SubmitButton
                        text="발급"/>
                    </Footer>
                    </Form>
                </Main>      
            </Entire>
        <MainFooter/>
        </>
    );
};

export default VCIssue;