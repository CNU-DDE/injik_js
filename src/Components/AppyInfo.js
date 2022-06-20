import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
import { ResumeList } from "../sample";
import { useNavigate } from "react-router";
import { CONTACT_ABI, CONTACT_ADDRESS } from '../config';
import { isLoggedinAtom, keystoreAtom} from "../atoms";
import Web3 from 'web3'


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
    padding: 5px;
    font-size: 16px;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
`;

function ApplyInfo() {
    const navigate = useNavigate();

    const [contract, setContract] = useState({});
    const [User, setUser] = useState("");


    const initWeb3 = async () => {
        if (typeof window.ethereum !== 'undefined') {
          window.web3 = new Web3(window.web3.currentProvider);
          try {
            await window.ethereum.enable();
            console.log(`✅ Connected Properly`)
          } catch (err) {
            console.log(`❌ ETH NONO!`,err)
          }
        } else {
          console.log("no !!!!!")
        }

        window.web3.eth.getAccounts().then(res => {
            console.log(`현재 사용자 : ${res[0]}`);
            setUser(res[0]);
          });
      
          console.log("CP:", window.web3.currentProvider);
          setContract(new window.web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS));
          console.log(CONTACT_ADDRESS);
          console.log(CONTACT_ABI);
          console.log(contract);
    }



    const ContractClick = () => {
        //initWeb3();
        navigate("/Full/3/contract");
        
    }

    return(
        <Main>
            <Header>
                <Resume>계약서</Resume>
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
                    <span>📌{" "}안녕하세요</span>
                </CLHeader>
                <CL>
잘부탁드립니다.
                </CL>
            </CoverLetter>
            <Career>
                <ul>
                    <CareerItems>
                        <CareerItem>실리콘밸리 인턴십 관련</CareerItem>
                    </CareerItems>
                    <CareerItems>
                        <CareerItem>한국전력공사 기간직</CareerItem>
                    </CareerItems>
                    <CareerItems>
                        <CareerItem>에트리인턴</CareerItem>
                    </CareerItems>
                </ul>
            </Career>
            <Footer>
                <SubmitButton 
                text="계약"
                onClick={ContractClick}
                ></SubmitButton>
            </Footer>
        </Main>
    );
}

export default ApplyInfo;
