import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import logo from "../img/injiklogo.png";
import searchicon from "../img/searchicon.png";
import { isLoggedinAtom, isEmployAtom, keystoreAtom } from "../atoms";
import { useRecoilValue, useSetRecoilState, useResetRecoilState, useRecoilState} from "recoil";

const UlParent = styled.ul`
    list-style: none;
    margin: 0;
    li {
        float: left;
        button {
            background-color: transparent;
            padding: 0;
            border: 0;
        }
    }
`;

const Header = styled.header`
    height: 187px;
    width: 100%;
    min-width: 900px;
    background-color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
`;

const Search = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 134px;
`;

const Sign = styled.nav`
    width: 900px;
    height: 30px;
`;

const SignUl = styled(UlParent)`
    width: 100%;
    width: 900px;
    list-style: none;
    display: flex;
    justify-content: flex-end;
`;

const SignLi = styled.li`
        margin: 10px 5px;
        float: left;
        outline: 0;
        &:hover {
            opacity: 0.5;
        }
        span {
            color : #222;
            font-size: 14px;
        }
`;

const SearchSection = styled.div`
    width: 900px;
    display: flex;
    height: 104px;
`;

const IconButton = styled.button`
    position: relative;
    bottom: 10px;
    margin-left: 0;
    padding: 0;
    background-color: transparent;
    border: 0;
    &:hover {
        cursor: pointer;
    }
`;

const IconImg = styled.img`
    width: 170px;
    height: 104px; 
`;

const SearchBox = styled.div`
    display: flex;
    margin: 0 auto;
    width: 422px;
    height: 40px;
    position: relative;
    right: 60px;
    border: 3px solid #00a8ff;
    align-self: center;
    input {
        width: 88%;
        border: 0;
        &:focus {
            outline: none;
        }
    }
`;

const SearchButton = styled.button`
    border: 0;
    width: 10%;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const SearchIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`;

const Menu = styled.div`
    border-top: 1px solid ${(props) => props.theme.lightgray};
    border-bottom: 3px solid ${(props) => props.theme.skyblue};
    z-index: 1000;
`;

const MenuNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 900px;
    height: 50px;
    margin: 0 auto;
`;

const MenuUl = styled(UlParent)`
    height: 50px;
    display: flex;
    align-items: center;
`;

const MenuLi = styled.li`
    margin: 10px 10px;
    button {
        &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.deepskyblue};
        }
        span {
            font-size: 17px;
            font-weight: bold;
        }
    }
    span {
        font-size: 17px;
        font-weight: bold;
        color: ${(props) => props.theme.deepgray};
        &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.deepskyblue};
        }
    }       
`;

function MainHeader() {
    const navigate = useNavigate();
    const [isLoggedin, setIsLogined] = useRecoilState(isLoggedinAtom);
    const [isEmploy, setIsEmploy] = useRecoilState(isEmployAtom);
    const [keystore, setKeystore] = useRecoilState(keystoreAtom);
    const [search, setSearch] = useState("");

    const reload = () => {
        navigate("/");
    }
    
    const inputChange = (event) => {
        const {
            currentTarget: { value },
        } = event;
        setSearch(value);
    }

    const searchClick = () => {
        navigate(`/${search}`);
    }
    
    const toResume = () => {
        if(isLoggedin) {
            navigate("/DrawResume");
        } else {
            alert("로그인이 필요합니다.");
            navigate("/Signin");
        }
    }
    
    const toPost = () => {
        if(isLoggedin) {
            navigate("/DrawPost");
        } else {
            alert("로그인이 필요합니다.");
            navigate("/Signin");
        }
    }

    const temp = () => {
        setIsLogined(prev => !prev);
    }

    const logoutClick = () => {
        setIsLogined(false);
        setIsEmploy(false);
        setKeystore("");
    }

    const toVCIssue = () => {
        if(isLoggedin) {
            navigate("/VCIssue");
        } else {
            alert("로그인이 필요합니다.");
            navigate("/Signin");
        }    
    }

    return (
        <Header>
            <Search>
                <Sign>
                    <SignUl>
                        { isLoggedin ?
                        <SignLi>
                            <button
                            onClick={logoutClick}>
                                <span>로그아웃</span>
                            </button>

                        </SignLi>      
                        : 
                        <SignLi>
                            <Link
                            to="/Signin"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>로그인</span>
                            </Link>
                        </SignLi>
                        }
                        <SignLi>
                            <span style={{opacity: 0.2}}>│</span>
                        </SignLi>
                        { isLoggedin ?
                        <SignLi>
                            <Link
                            to="/MyPage"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>마이페이지</span>
                            </Link>
                        </SignLi>
                        :
                        <SignLi>
                            <Link
                            to="/Signup"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>회원가입</span>
                            </Link>
                        </SignLi>
                        }
                    </SignUl>
                </Sign>
                <SearchSection>
                        <IconButton onClick={reload}>
                            <IconImg src={logo} alt="로고"></IconImg>
                        </IconButton>
                        <SearchBox>
                            <input type="text" placeholder="&nbsp;&nbsp;검색어" onChange={inputChange} autoFocus
                            style={{marginLeft: "10px"}}/>
                            <SearchButton onClick={searchClick}>
                                <SearchIcon src={searchicon} alt="버튼이미지"/>
                            </SearchButton>
                        </SearchBox>
                </SearchSection>
            </Search>
            <Menu>
                <MenuNav>
                    <MenuUl>
                        <MenuLi>
                            <span>Ξ 전체메뉴</span>
                        </MenuLi>
                        <MenuLi>
                            <span>지역별 알바</span>
                        </MenuLi>
                        <MenuLi>
                            <span>채용·인턴</span>
                        </MenuLi>
                        <MenuLi>
                            <span>커뮤니티</span>
                        </MenuLi>
                        <MenuLi>
                            <button onClick={toVCIssue}>
                                <span>경력발급</span>
                            </button>
                        </MenuLi>
                    </MenuUl>
                    <MenuUl>
                        <MenuLi>
                            <button onClick={toResume}>
                                <span>📝이력서등록</span>
                            </button>
                        </MenuLi>
                        <MenuLi>
                            <button onClick={toPost}>
                                <span>📢공고등록</span>
                            </button>
                        </MenuLi>
                        {/* { isLogined ?  
                        <>
                        <MenuLi>
                            <button onClick={WorkStart}>
                                <span
                                style={{color: "#bdc3c7"}}>출근</span>
                                {isStart ? 
                                <span 
                                style={{color: "black"}}>중</span> : <></> 
                                }
                            </button>
                        </MenuLi>
                        <MenuLi>
                            <button onClick={WorkEnd}>
                                <span
                                style={{color: "#bdc3c7"}}>퇴근</span>
                                {isEnd ?
                                <span 
                                style={{color: "black"}}>완료</span> : <></> 
                                }
                            </button>
                        </MenuLi>
                        </>
                        : <></>} */}
                    </MenuUl>
                </MenuNav>
            </Menu>
        </Header>
    );

}

export default MainHeader;