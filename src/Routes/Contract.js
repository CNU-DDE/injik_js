import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubmitButton from "../Components/SubmitButton";
import person1 from "../img/person1.png";
import person2 from "../img/person2.png";
import { useRecoilValue } from "recoil";
import Web3 from 'web3'
import { CONTACT_ABI, CONTACT_ADDRESS } from '../config';
import { isLoggedinAtom, keystoreAtom} from "../atoms";

const Entire = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.white1};
`;

const Main = styled.div`
    min-width: 700px;
    max-width: 750px;
    height: 800px;
    width: 30%;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white};
    margin: 30px auto;
`;

const ImgSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: pink;
`;

const Img = styled.img`
    object-fit: scale-down;
    height: 100px;
`;

const Back = styled.section`
    height: 50px;
`;

const BackButton = styled.button`
    background-color: transparent ;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`;

const PersonInfo = styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    margin-bottom: 150px;
`;

const Info = styled.div`
    width: 100%;
    height: 90%;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 17px;
        font-weight: bold;
        line-height: 22px;
    }
`;

const Split = styled.div`
    width: 1px;
    height: 100%;
    border: 1px solid ${(props) => props.theme.lightgray};  
`;

const PersonImg = styled.img`
    height: 120px;
    object-fit: scale-down;
    margin: 20px 0;
`;

const ContractInfo = styled.section`
    margin-top: 10px;
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
`;

const Input = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

  span {
      font-size: 18px;
      font-weight: bold;
      margin-right: 10px;
  }

  input {
      width: 70px;
      height: 18px;
      font-weight: bold;
      background-color: transparent;
      border: 0;
      border-bottom: 1px solid ${(props) => props.theme.gray};
  }
`;

const Submit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;  
`;

function Contract() {
    const params = useParams();
    const navigate = useNavigate();
    const isLoggedin = useRecoilValue(isLoggedinAtom);
    const keyStoreValue = useRecoilValue(keystoreAtom);
    const [cont, setCont] = useState({});
    const [User, setUser] = useState("");



    useEffect(() => {
        //console.log(JSON.parse(keyStoreValue).walletAddress);
        if(!isLoggedin) {
            alert("로그인이 필요합니다");
            navigate("/Signin");
        }
    },[]);


    const returnClick = () => {
        navigate("/");
    }

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
      
          //console.log("CP:", window.web3.currentProvider);
          setCont(new window.web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS));
    }

    

    const SubmitClick = async () => {
        //alert("계약되었습니다.");
        initWeb3();
        await cont.methods.writeResumeEmployer({_ipfs:"sdfad11jak12kjhs11213"},'0xbeFDe6b0503C15D9faC5F8067b19155DF7a7Af84').
        send({from:User, gas:600000, gasPrice: null}).then(result => {
            console.log(result);
            //칸 초기화
        })

        //navigate("/");
    }

    const GetClick = async () => {
        //alert("계약되었습니다.");
        //initWeb3();

        await cont.methods.getResumeInfoEmployerAddress({_ipfs:"sdfadajdkj111dhkjak12kjhs11213"}).
        call({from:User, gas:300000, gasPrice: null}).then(result => {
            console.log(result);
            //칸 초기화
        })

        //navigate("/");
    }
     
    return (
        <Entire>
            <Main>
                <Back>
                    <BackButton
                    onClick={returnClick}>❌</BackButton>
                </Back>
                <PersonInfo> 
                    <Info>
                        <PersonImg src={person1}/>
                        <span>송강</span>
                        <span>01087654321</span>
                        <span>song@gmail.com</span>
                    </Info>
                    <Split/>
                    <Info>
                        <PersonImg src={person2}/>
                        <span>쿠팡</span>
                        <span>01012345678</span>
                        <span>coupang@gmail.com</span>
                    </Info>
                </PersonInfo>
                <ContractInfo>
                    <Input>
                        <span>💵{" "} 급여</span>
                        <input></input>
                    </Input>
                    <Input>
                        <span>⏰{" "} 주당 근무시간</span>
                        <input></input>
                    </Input>
                </ContractInfo>
                <Submit>
                    <SubmitButton 
                    text="계약하기"
                    onClick={GetClick}/>
                </Submit>
                {/* <ImgSection>  
                    <Img src={require("../img/contract.jpeg")}/>
                </ImgSection> */}
            </Main>
        </Entire>
    );
}

export default Contract;


