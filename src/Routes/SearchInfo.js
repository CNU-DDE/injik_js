import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";
import { PostList } from "../sample";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const Entire = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.white1};
    
`;

const SideTab = styled.ul`
    margin: 50px 0 0;
    display: flex;
    width: 600px;
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
    border-bottom: 3px solid ${(props) => props.theme.skyblue};

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
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.white};
    width: 650px;
    height: 600px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    margin-bottom: 30px;

`;

const Post = styled.li`

`;

const Header = styled.header`
    display: flex;
    align-items: center;
    height: 100px;
    span {
        font-weight: bold;
        font-size: 20px;
        margin-left: 20px;
    }
`;

const SearchData = styled.ul`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
`;

const SearchDataItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    width: 500px;
    padding: 20px 0;

    span {
        font-size: 16px;
        font-weight: bold;
        color: ${(props) => props.theme.deepgray}
    }
`;

function SearchInfo() {
    const search = useParams().brandname;
    const [searchDataList, setSearchDataList] = useState([]);

    useEffect(() => {
        const axios = require('axios');

        const config = {
        method: 'get',
        url: 'http://localhost:60080/api/v0/position',
        headers: { }
        };

        axios(config)
        .then(function (response) {
            console.log(search);
            console.log((response.data.positions));
            response.data.positions.map((element) => {
                console.log(element.employer.display_name);
                if(search === element.employer.display_name) {
                    setSearchDataList((searchDataList) => [...searchDataList, element]);
                    console.log("라인in");
                }
            });
            console.log(searchDataList);
        })
        .catch(function (error) {
            console.log(error);
        });
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
                    <SearchData>
                    { searchDataList.map((element,index) => {
                            return(
                                <li>
                                    <SearchDataItem
                                    to={{pathname: `/Post/${search}`}}
                                    state={element}
                                    style={{textDecorationLine: "none"}}
                                    > 
                                    <span>{index+1}</span>
                                    <span>{element.title}</span>
                                    <span>{element.employment_period}</span>
                                    </SearchDataItem>
                                </li>
                            );
                    })}
                    </SearchData>
                </Post>
            </Main>
        </Entire>
        <MainFooter/>
        </>
    );
}

export default SearchInfo;
