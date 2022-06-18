import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";
import { PostList } from "../sample";
import { useParams } from "react-router";
import axios from "axios";

const Entire = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.white1};
    
`;

const SideTab = styled.ul`
    margin: 50px 0 0;
    border-bottom: 3px solid ${(props) => props.theme.skyblue};
    display: flex;
    width: 70%;
    padding: 0;
`;

const SideTabItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height:60px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    border: 1px solid #dfe6e9;
    background-color: ${(props) => props.theme.white};

    span {
        display: block;
        padding: 13px 0 12px;
        width: 150px;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        letter-spacing: -1px;
        color: #666;
    }
`;

const Main = styled.ul`
    background-color: ${(props) => props.theme.white};
    width: 70%;
    height: 1000px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    margin-bottom: 30px;

`;

const Post = styled.li`

`;

const Header = styled.header`
    display: flex;
    align-items: center;
    height: 100px;
    background-color: aqua;
    span {
        font-weight: bold;
        font-size: 20px;
        margin-left: 20px;
    }
`;

function SearchInfo() {
    const search = useParams().brandname;
    const [searchDataList, setSearchDataList] = useState([]);

    useEffect(() => {
        PostList.positions.map((element) => {
            console.log(search+element.employer.display_name);
            if(element.employer.display_name === search) {
                //setSearchDataList(...searchDataListelement);
                
            }
        });
        //console.log(searchData);
    },[]);


    return (
        <>
        <MainHeader/>
        <Entire>
            <SideTab>
                <SideTabItem
                style={{
                    backgroundColor: "#1e90ff",
                }}><span
                style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#ffffff",
                }}>통합검색</span></SideTabItem>
                <SideTabItem><span>채용</span></SideTabItem>
                <SideTabItem><span>인턴</span></SideTabItem>
                <SideTabItem><span>아르바이트</span></SideTabItem>
            </SideTab>
            <Main>
                <Post>
                    <Header><span>채용공고</span></Header>
                    
                </Post>
            </Main>
        </Entire>
        <MainFooter/>
        </>
    );
}

export default SearchInfo;
