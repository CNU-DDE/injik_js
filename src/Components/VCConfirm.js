import React, { useEffect } from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
import { ResumeList } from "../sample";
import { useNavigate } from "react-router";

const Main = styled.main`
    height: 100%;
    width: 100%;
    display: grid;
    //grid-template-rows: 1fr 2fr 5fr 5fr 2fr;
`;

const Header = styled.header`
    margin-top: 20px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const Resume = styled.span`
    padding: 5px 15px;
    font-size: 35px;
    font-weight: bold;
    border-bottom: 6px ridge ${(props) => props.theme.skyblue};
`;

const Info = styled.nav`
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const InfoItems = styled.ul`
    list-style-type : none;

    li {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
        letter-spacing: -2;
    }

    span { 
        font-size: 17px;
        font-weight: 700;
    }
`;

const CoverLetter = styled.section`
    margin-bottom: 10px;
    margin: 20px 0;
`;

const CLHeader = styled.div`
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
`;

const CL = styled.pre`
`;

const Career = styled.nav`
`;

const CareerItems = styled.li`
    border: 1px solid ${(props) => props.theme.lightgray};
    background-color: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: 10px;
    margin: 20px 0;
`;

const CareerItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 5px;
    font-size: 16px;

    span {
        line-height: 30px;
        font-weight: bold;
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
`;

function VCConfirm({obj}) {
    const navigate = useNavigate();

    const ContractClick = () => {
        navigate("/Full/3/contract");
    }

    const ConfirmClick = () => {
        alert("발급되었습니다.");
        navigate("/");
    }

    useEffect(() => {
        console.log(obj);
    },[]);

    return(
        <Main>
            <Header>
                <Resume>경력발급</Resume>
            </Header>
            <Info>
                <InfoItems>
                    <li><span>이름 송강</span></li>
                    <li><span>전화번호 010-8765-4321</span></li>
                    <li><span>메일 song@gmail.com</span></li>
                    <li><span>주소 대전광역시서구갈마동</span></li>
                </InfoItems>
            </Info>
            <CoverLetter>
                <CLHeader>
                    <span>💠제목: {" "}2019년 경력 요청</span>
                </CLHeader>
                <CL>
                
                </CL>
            </CoverLetter>
            <Career>
                <ul>
                    <CareerItems>
                            {/* <ul
                            style={{padding: "20px"}}>
                                <CareerItem>{element.name}</CareerItem>
                                <CareerItem>{element.id}</CareerItem>
                                <CareerItem>{element.title}</CareerItem>
                            </ul> */}
                            <CareerItem>
                            <span>근무회사: 라인 애드 클라우드</span>
                            <span>근무내용: 라인 애드 백엔드 인프라 구축</span>
                                <span>시작날짜: 2019-03-12</span>
                                <span>시작날짜: 2019-09-23</span>


                            </CareerItem>
                    </CareerItems>
                </ul>
            </Career>
            <Footer>
                <SubmitButton 
                text="발급"
                onClick={ConfirmClick}
                ></SubmitButton>
            </Footer>
        </Main>
    );
}

export default VCConfirm;