import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";

const HeaderSection = styled.header`
    margin: 30px 0;
`;

const Header = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const Info = styled.div`
    border-radius: 10px;
    padding: 20px;
    background-color: #00b894;
    height: 200px;
    margin: 30px 0;
    width: 500px;
    word-break:break-all; 
`;

const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    margin: 50px 0 30px 0;
`;

function KeyStoreInfo({keystore}) {
    const navigate = useNavigate();

    const SignupClick = () => {
        navigate("/");
    }

    return(
        <div>
            <HeaderSection>
                <Header>🎈 회원가입이 완료되었습니다. <br/>key 값을 안전한 곳에 저장해주세요.</Header>
            </HeaderSection>
            <Info>

                    {JSON.stringify(keystore)}

            </Info>
            <FooterSection>
                <SubmitButton 
                text="key값 저장완료"
                onClick={SignupClick}/>
            </FooterSection>
        </div>
    );
}

export default KeyStoreInfo;