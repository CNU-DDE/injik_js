import React, { useCallback, useEffect, useState } from "react";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ApplyInfo from "../Components/AppyInfo";
import VCRequest from "../Components/VCRequest";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoggedinAtom, isEmployAtom } from "../atoms";
import { ResumeList, EmployerCareerList, EmployeeCareerList } from "../sample";
import Modal from "../Components/Modal";

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


function MyPage() {
    const [isOpenModal, setOpenModal] = useState(false);
    const [isApplyList, setIsApplyList] = useState(true);
    const [isVCList, setIsVCList] = useState(false);
    const [claimList, setClaimList] = useState([]);
    const isLoggedin = useRecoilValue(isLoggedinAtom);
    const isEmployee = useRecoilValue(isEmployAtom);
    const navigate = useNavigate();
    const axios = require("axios");

    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    useEffect(() => {
        if(!isLoggedin) {
            alert("로그인이 필요합니다");
            navigate("/Signin");
        }
        axios.get(`http://${window.location.hostname}:60080/api/v0/claim`)
        .then(res => {
            setClaimList(res.data.claims);
        }).catch(() => {});
    },[]);


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

    return (
        <Entire>
        {isOpenModal && ( 
        <Modal onClickToggleApplyInfo={onClickToggleModal}>
            <ApplyInfo/>
        </Modal>
        )}
            <MainHeader/>
            <Main>
                <Menu>
                    <ul>
                        {isApplyList ?
                        <MenuLi>
                            <ClickMenuButton
                            onClick={ApplyClick}>{isEmployee ? <span>지원내역</span>:<span>지원자목록</span>}</ClickMenuButton>
                        </MenuLi>
                        :
                        <MenuLi>
                            <MenuButton
                            onClick={ApplyClick}>{isEmployee ? <span>지원내역</span>:<span>지원자목록</span>}</MenuButton>
                        </MenuLi>
                        }
                        {isVCList ?
                        <MenuLi>
                            <ClickMenuButton
                            onClick={VCClick}>{isEmployee ? <span>경력요청내역</span>:<span>경력요청함</span>}</ClickMenuButton>
                        </MenuLi>
                        :
                        <MenuLi>
                            <MenuButton
                            onClick={VCClick}>{isEmployee ? <span>경력요청내역</span>:<span>경력요청함</span>}</MenuButton>
                        </MenuLi>
                        }
                        <MenuLi>
                            <MenuButton>쪽지함</MenuButton>
                        </MenuLi>
                    </ul>
                </Menu>
                <List>
                {/* !!!!!!!!!!!!!!!!!! 중복제거 필요함 !!!!!!!!!!!!!!!!!! */}
                { isApplyList &&
                    <> 
                    <Sort>
                        <SortItem>
                            <span>⇅ 정렬기준</span>
                        </SortItem>
                    </Sort>
                    <SubTitle>
                        <span>no</span>
                        <span style={{marginRight: "20px"}}>제목</span>
                        <span></span>
                    </SubTitle>
                    <ul>
                        {ResumeList.claims.map((element,index) => 
                        <Item onClick={onClickToggleModal}>
                            <span
                            style={{
                                color: "black",
                            }}>{index+1}</span>
                            <span>{element.title}</span>
                            <span></span>
                        </Item>
                        )}
                    </ul>
                    </>
                }
                { isVCList &&
                    <>
                    <Sort>
                        <SortItem>
                            <span>⇅ 정렬기준</span>
                        </SortItem>
                    </Sort>
                    <SubTitle>
                        <span>no</span>
                        <span style={{marginRight: "20px"}}>제목</span>
                        <span></span>
                    </SubTitle>
                    <ul>
                        {claimList.map((element, index) => 
                        <Item onClick={onClickToggleModal}>
                            <span
                            style={{
                                color: "black",
                            }}>{index+1}</span>
                            <span>{element.title}</span>
                            <span></span>
                        </Item>
                        )}
                    </ul>
                    </> 
                }
                </List>  
            </Main> 
            <MainFooter/>
        </Entire>
    );
}

export default MyPage;
