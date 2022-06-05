import MainFooter from "../Components/MainFooter";
import SubHeader from "../Components/SubHeader";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import SubmitButton from "../Components/SubmitButton";
import Modal from "../Components/Modal";
import { useCallback, useState } from "react";
import CoverLetterList from "../Components/CoverLetterList";
import CareerList from "../Components/CareerList";

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

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const TitleInput = styled.input`
    width: 100%;  
    height: 40px;
    font-size: 15px;
    font-weight: bold;
    ::-webkit-input-placeholder {
      padding-left: 10px;
    }
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


const Section = styled.section`
    margin: 20px 0;
`;

const CoverLetter = styled.input`
    margin-top: 10px;
    width: 100%;
    height: 250px;
`
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;;
    height: 100px;
`;

function DrawResume() {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const onValid = (data) => {
        console.log(data);
    }

    const submitClick = () => {
        alert("저장되었습니다.");
        navigate("/");
    }

    const [isOpenModalCL, setOpenModalCL] = useState(false);
    const [isOpenModalCR, setOpenModalCR] = useState(false);


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
                        <Header>기본정보</Header>
                        <Infodiv>
                            <Img
                            src="https://www.snsboom.co.kr/common/img/default_profile.png">                                
                            </Img>
                            <nav>
                            <InfodivInfo>
                                <InfoItem>
                                    <span>배성민</span><span>생년 월일</span>
                                </InfoItem>
                                <InfoItem>
                                    <span>연락처:</span><span>XXX-XXXX-XXXX</span>
                                </InfoItem>
                                <InfoItem>
                                    <span>이메일:</span><span>1998.09.16</span>
                                </InfoItem>
                                <InfoItem>
                                    <span>주소:</span><span>대전광역시</span>
                                </InfoItem>
                            </InfodivInfo>
                            </nav>
                        </Infodiv>
                    </Section>
                    <Section>
                        <Header>이력서 제목</Header>
                        <TitleInput placeholder="제목 (최대 25자)"/>
                    </Section>
                    <Section>
                        <Header>경력</Header>
                        <AddInfo
                        onClick={onClickToggleModalCR}>+ 경력 추가</AddInfo>
                    </Section>
                    <Section>
                        <Header>자기소개서 불러오기</Header>
                        <AddInfo 
                        onClick={onClickToggleModalCL}>+ 자기소개서 선택</AddInfo>
                    </Section>
                    <form onSubmit={handleSubmit(onValid)}>
                    <Section>
                        <Header>자기소개서 작성</Header>
                        <TitleInput 
                        placeholder="제목 (최대 25자)"
                        {...register("title", {required: true})}
                        />
                        <CoverLetter
                        {...register("cover-letter", {required: true})}>
                        </CoverLetter>
                    </Section>
                    <Footer>
                        <SubmitButton
                        text="이력서 저장"
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