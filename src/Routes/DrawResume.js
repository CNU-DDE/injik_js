import MainFooter from "../Components/MainFooter";
import SubHeader from "../Components/SubHeader";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import SubmitButton from "../Components/SubmitButton";
import Modal from "../Components/Modal";
import { useCallback, useEffect, useState } from "react";
import CoverLetterList from "../Components/CoverLetterList";
import CareerList from "../Components/CareerList";
import { useRecoilValue } from "recoil";
import { isLoggedinAtom } from "../atoms";

const Entire = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.white1};
    width: 100%;
`;

const Mainbg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    width: 730px;
    height: 100%;
    border: 1px solid #eee;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
`;

const Main = styled.main`
    width: 85%;
    margin: 30px auto;
`;

const Header = styled.header`
    height: 35px;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: -2;
    border-bottom: 2px solid #333;
    margin-bottom: 10px;
`;

const Infodiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 170px;

`;

const Img = styled.img`
    height: 160px;
    object-fit: scale-down;
`;

const InfodivInfo = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 400px;
    height: 160px;

`

const InfoItem = styled.li`
    height: 20%;
    display: flex;
    &:first-child {
        border-bottom: 1px solid ${(props) => props.theme.lightgray};
        margin-bottom: 15px;
        margin-right: 0;
        span {
            font-size: 22px;
        }
    }
    span {
        font-size: 15px;
        &:first-child {
            font-weight: bold;
            margin-right: 10px;
        }
    }
    
`;

const TitleInput = styled.input`
    width: 100%;  
    height: 40px;
    font-size: 15px;
    font-weight: bold;
    ::-webkit-input-placeholder {
      padding-left: 10px;
    }
`;

const AddInfo = styled.button`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.skyblue};
    font-weight: bold;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: 1px dashed ${(props) => props.theme.skyblue};
    
    &:hover {
        cursor: pointer;
    }
`;


const Section = styled.section`
    margin: 20px 0;
`;

const CoverLetter = styled.input`
    margin-top: 10px;
    width: 100%;
    height: 250px;
`
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;;
    height: 100px;
`;

function DrawResume() {
    const { register, handleSubmit, formState } = useForm();
    const [isOpenModalCL, setOpenModalCL] = useState(false);
    const [isOpenModalCR, setOpenModalCR] = useState(false);
    const [ CLList, setCLList ] = useState([]);
    const [ CRList, setCRList ] = useState([]);
    const isLoggedin = useRecoilValue(isLoggedinAtom);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedin) {
            alert("???????????? ???????????????");
            navigate("/Signin");
        }
    },[]);

    const onValid = (data) => {
        console.log(data);
    }

    const submitClick = () => {
        alert("?????????????????????.");
        navigate("/");
    }

    const onClickToggleModalCL = useCallback(() => {
      setOpenModalCL(!isOpenModalCL);
    }, [isOpenModalCL]);

    const onClickToggleModalCR = useCallback(() => {
      setOpenModalCR(!isOpenModalCR);
    }, [isOpenModalCR]);

    return (
        <>
        <SubHeader/>
        <Entire>
            {isOpenModalCL && (
                <Modal onClickToggleApplyInfo={onClickToggleModalCL}>
                    <CoverLetterList/>
                </Modal>
            )}
            {isOpenModalCR && (
                <Modal onClickToggleApplyInfo={onClickToggleModalCR}>
                    <CareerList/>
                </Modal>
            )}
            <Mainbg>
                <Main>
                    <Section>
                        <Header>????????????</Header>
                        <Infodiv>
                            <Img
                            src="https://www.snsboom.co.kr/common/img/default_profile.png">                                
                            </Img>
                            <nav>
                            <InfodivInfo>
                                <InfoItem>
                                    <span>?????????</span><span>?????? ??????</span>
                                </InfoItem>
                                <InfoItem>
                                    <span>?????????:</span><span>XXX-XXXX-XXXX</span>
                                </InfoItem>
                                <InfoItem>
                                    <span>?????????:</span><span>1998.09.16</span>
                                </InfoItem>
                                <InfoItem>
                                    <span>??????:</span><span>???????????????</span>
                                </InfoItem>
                            </InfodivInfo>
                            </nav>
                        </Infodiv>
                    </Section>
                    <form>
                    <Section style={{marginTop: "40px"}}>
                        <Header>????????? ??????</Header>
                        <TitleInput placeholder="?????? (?????? 25???)"/>
                    </Section>
                    <Section>
                        <Header>??????</Header>
                        {
                        <AddInfo
                        onClick={onClickToggleModalCR}>+ ?????? ??????</AddInfo>
                        }
                    </Section>
                    <Section>
                        <Header>??????????????? ????????????</Header>
                        
                        <AddInfo 
                        onClick={onClickToggleModalCL}>+ ??????????????? ??????</AddInfo>
                    </Section>
                    </form>
                    <form onSubmit={handleSubmit(onValid)}>
                    <Section>
                        <Header>??????????????? ??????</Header>
                        <TitleInput 
                        placeholder="?????? (?????? 25???)"
                        {...register("title", {required: true})}
                        />
                        <CoverLetter
                        {...register("cover-letter", {required: true})}>
                        </CoverLetter>
                    </Section>
                    <Footer>
                        <SubmitButton
                        text="????????? ??????"
                        onClick={submitClick}
                        />
                    </Footer>
                    </form>                
                </Main>
            </Mainbg>
        </Entire>
        <MainFooter/>
        </>
    );
}

export default DrawResume;