import React, { useCallback, useState, useEffect } from "react";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";
import styled from "styled-components";
import { ResumeList } from "../sample";
import { Link , useNavigate} from "react-router-dom";
import Modal from "../Components/Modal";
import ApplyInfo from "../Components/AppyInfo";
import VCRequest from "../Components/VCRequest";
import { forDemo } from "../atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Web3 from 'web3';
import instance from './config';
import { CONTACT_ABI, CONTACT_ADDRESS } from './config';
 
const Entire = styled.div`
    width: 100%;
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
    min-height: 800px;
    min-width: 900px;
    width: 100%;  
    grid-template-columns: 1fr 3fr;
    margin: 40px 0;
`;

const Menu = styled.nav`
    background-color: ${(props) => props.theme.white};
    border-right: ${(props) => props.theme.lightgray};
`;

const MenuLi = styled.li`
    width: 100%;
`;

const MenuButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    background-color: ${(props) => props.theme.white1};
    padding: 25px 50px;
    border: 1px solid ${(props) => props.theme.lightgray};
    &:hover {
        cursor: pointer;
    }
`;

const ClickMenuButton = styled(MenuButton)`
    color: ${(props) => props.theme.white1};
    background-color: #0097e6; 
`;

const List = styled.nav`
    width: 700px;
    height: 800px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white1};
    border: 1px solid ${(props) => props.theme.lightgray};
`;

const Sort = styled.div`
    width: 95%;
    height: 50px;
    margin: 10px 20px;
    display: flex;
    justify-content: flex-end;
`;

const SubTitle = styled.section`
    margin: 10px;
    padding: 0 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #718093;

    span {
        font-size: 16px;
        font-weight: bold;
        color: #2f3542;
    }
`;

const SortItem = styled.button`
    background-color: transparent;
    border: 0;
    
    span {
        font-size: 14px;
        font-weight: 540;
    }
`;

const Item = styled.button`
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding: 18px;
    margin: 10px 15px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.lightgray};
    border-radius: 10px;

    span {
        font-size: 15px;
        font-weight: bold;
        color: ${(props) => props.theme.deepgray}
    }
`;

const Request = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Title = styled.h3`
  text-align: center;
`;

const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: blueviolet;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;

function MyPage() {
    
    const [User, setUser] = useState("");
    const [View_Id, setView_Id] = useState(0);
    const [Add_Id, setAdd_Id] = useState(0);
    const [Add_Name, setAdd_Name] = useState("");
    const [Add_Age, setAdd_Age] = useState(0);
    const [Balance, setBalance] = useState(0);

    const [isOpenModal, setOpenModal] = useState(false);
    const [isApplyList, setIsApplyList] = useState(true);
    const [isVCList, setIsVCList] = useState(false);
    const navigate = useNavigate();    
    const useRecoilDemo = useRecoilValue(forDemo);

    const [account, setAccount] = useState(); // state variable to set account.


    // const initWeb3 = async () => {
    //     if (typeof window.ethereum !== 'undefined') {
    //       window.web3 = new Web3(window.web3.currentProvider);
    //       try {
    //         await window.ethereum.enable();
    //         console.log(`✅ Connected Properly`)
    //       } catch (err) {
    //         console.log(`❌ ETH NONO!`,err)
    //       }
    //     } else {
    //       console.log("no !!!!!")
    //     }
    
    //     window.web3.eth.getAccounts().then(res => {
    //       console.log(`현재 사용자 : ${res[0]}`);
    //       setUser(res[0]);
    //     });
    
    //     console.log("CP:", window.web3.currentProvider);
    //     account(new window.web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS));
    // };
  

  
    const onClickToggleModal = useCallback(() => {
      setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const allFalse = () => {
        setIsApplyList(false);
        setIsVCList(false);
    }

    const ApplyClick = (e) => {
        //e.preventDefault();
        allFalse();
        setIsApplyList(prev => !prev);
    }

    const VCClick = (e) => {
        //e.preventDefault();
        allFalse();
        setIsVCList(prev => !prev);
    }


    // const submitClick = () => {
        
    //     async function load() {
    //         //const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    //         //const accounts = await web3.eth.requestAccounts();
    //         //setAccount(accounts[0]);
    //        // this.injikContract = new this.web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
    //         instance.methods.registrationJobPosting('0x206dfDA5317b54Ba73E50660E6A041A624035f39', 'dffs', 32).call();

    //     }
    //     load();
    // }

    const setStudentInfo = () => {
        // account.methods.registrationJobPosting('0x206dfDA5317b54Ba73E50660E6A041A624035f39', 'ssdad', 12).call()
        //   .then(result => {
        //     console.log(result);
        //     //칸 초기화
        //   })
      };

    return (
        <Entire>
            <MainHeader/>
            <Main>
                {isOpenModal && ( 
                    <Modal onClickToggleApplyInfo={onClickToggleModal}>
                        <ApplyInfo/>
                    </Modal>
                )}
                <Menu>
                    <ul>
                        {isApplyList ?
                        <MenuLi>
                            <ClickMenuButton
                            onClick={ApplyClick}>지원목록</ClickMenuButton>
                        </MenuLi>
                        :
                        <MenuLi>
                            <MenuButton
                            onClick={ApplyClick}>지원목록</MenuButton>
                        </MenuLi>
                        }
                        {isVCList ?
                        <MenuLi>
                            <ClickMenuButton
                            onClick={VCClick}>경력발급</ClickMenuButton>
                        </MenuLi>
                        :
                        <MenuLi>
                            <MenuButton
                            onClick={VCClick}>경력발급</MenuButton>
                        </MenuLi>
                        }
                        <MenuLi>
                            <MenuButton>쪽지함</MenuButton>
                        </MenuLi>
                    </ul>
                </Menu>
                <List>
                { isApplyList && 
                    <>
                    <Sort>
                        <SortItem>
                            <span>⇅ 정렬기준</span>
                        </SortItem>
                    </Sort>
                    <SubTitle>
                        <span>no</span>
                        <span>이름</span>
                    </SubTitle>
                    <ul>
                        {ResumeList.map(element => 
                        <Item onClick={onClickToggleModal}>
                            <span
                            style={{
                                color: "black",
                            }}>{element.id}</span>
                            <span>{element.title}</span>
                            <span>{element.name}</span>
                            <button
                            style={{backgroundColor: "green", }}
                            onClick={setStudentInfo}>송금</button>
                        </Item>
                        )}
                    </ul>
                    </>
                }
                { isVCList &&
                    <Request> 
                        <VCRequest/>
                    </Request>  
                }
                </List>  
            </Main> 
            <MainFooter/>
        </Entire>
    );
}

export default MyPage;