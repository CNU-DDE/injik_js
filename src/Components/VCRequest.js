import React from "react";
import styled from "styled-components";

const Entire = styled.div`
    width: 80%;
    height: 85%;
    background-color: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Main = styled.main`
    height: 500px;
`;

const Info = styled.div`
    height: 100px;
    display: grid;
`;

const InfoItem = styled.div`
    span {
        font-size: 18px;
        font-weight: bold;
        margin-right: 10px;
    }
    input {
        width: 200px;
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid ${(props) => props.theme.gray};
    }
`;

const Claim = styled.ul`
    list-style:none;
`;

const Header = styled.div`
    width: 450px;
    border-bottom: 2px solid ${(props) => props.theme.gray};
    margin-bottom: 50px;
    margin-top: 50px;
    padding: 10px;

    > span {
        font-size: 20px;
        font-weight: bold;
    }
`;

const ClaimItem = styled.li`
    height: 50px;
    span {
        font-size: 17px;
        font-weight: bold;
        margin-right: 10px;
    }

    input {
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid ${(props) => props.theme.gray};
    }
`;

function VCRequest() {
    return (
    <Entire>
        <Main>
            <Info>
                <InfoItem>
                    <span>발급제목{" "}</span>
                    <input></input>
                </InfoItem>
                <InfoItem>
                    <span>발급자ID{" "}</span>
                    <input></input>
                </InfoItem>
            </Info>
            <Header>
                <span>✍️상세정보 입력</span>
            </Header>
            <nav>
                <Claim>
                    <ClaimItem>
                        <span>시작일{" "}</span>
                        <input></input>
                    </ClaimItem>
                    <ClaimItem>
                        <span>종료일{" "}</span>
                        <input></input>
                    </ClaimItem>
                    <ClaimItem>
                        <span>근무장소</span>
                        <input></input>
                    </ClaimItem>
                    <ClaimItem>
                        <span>근무내용</span>
                        <input></input>
                    </ClaimItem>
                </Claim>
            </nav>
        </Main>
    </Entire>
    );
}

export default VCRequest;