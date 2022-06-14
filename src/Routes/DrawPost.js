import React, { useState } from "react";
import SubHeader from "../Components/SubHeader";
import MainFooter from "../Components/MainFooter";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import SubmitButton from "../Components/SubmitButton";
import officalImg2 from "../img/officalImg2.png";
import InputBox from "../Components/InputBox";

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
    min-width: 730px;
    height: 100%;
    border: 1px solid #eee;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
`;

const Main = styled.div`
    width: 85%;
    margin: 30px auto;
`;

const Header = styled.header`
    width: 100%;
    height: 35px;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: -2;
    border-bottom: 2px solid #333;
    margin-top: 12px;
`;

const MainCata = styled.section`
    height: 100px;
`;

const MainCataList = styled.div`
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainCataButton = styled.button`
    font-size: 15px;
    font-weight: bold;
    color: #373f57;
    border: 1px solid ${(props) => props.theme.lightgray};
    width: 20%;
    height: 60%;
    background-color: white;
`

const MainCataButtonCli = styled(MainCataButton)`
    background-color: #45aaf2;
    border: 1px solid black;
`;

const MainTitle = styled.section`
    height: 100%;
`;

const MainInput = styled.input`
    margin-top: 20px;
    height: ${(props) => props.propsheight};
    width: 99%;
    margin-bottom: 20px;
`;

const MainPeriod = styled.section`
`;

const MainPeriodmain = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const MainPeriodDay = styled.button`
    font-size: 15px;
    font-weight: bold;
    border-radius: 30px;
    height: 50px;
    width: 8%;

`;

const PeriodHeader = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.navy};
    margin-bottom: 10px;
`;

const MainPeriodMain = styled.main`
    padding-top: 15px;
    width: 100%;
    display: flex;
    padding-bottom: 15px;
`;

const MainPeriodMainElement = styled.section`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    border-right: 1px solid #d2dae2;
`;

const FullImg = styled.img`
    margin: 20px ;
    width: 20%;
    object-fit: scale-down;
`;

const FullImgdiv = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    
`;

const Condition = styled.ul`
    height: 100%;
`;


const ConditionItem = styled.li`
    margin: 10px;
    span {
        color: ${(props) => props.theme.deepnavy};
        font-size: 17px;
        font-weight: bold;
        margin-right: 10px;
    }
`;

const CustomDatePickerflex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CustomDatePicker = styled(DatePicker)`
    text-align: center;
    margin: 0 auto;
    font-size: 15px;
    font-weight: bold;
    height: 30px;
    border: 0;
    border-bottom: 3px solid ${(props) => props.theme.skyblue};
`;

const MainStory = styled.section`
`;

const Maindiv = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

function DrawPost() {
    const [isFull, setIsFull] = useState(true);
    const [isPart, setIsPart] = useState(false);
    const [isIntern, setIntern] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { register, handleSubmit, formState } = useForm();

    const allFalse = () => {
        setIsFull(false);
        setIsPart(false);
        setIntern(false);
    }

    const ButtonClick = (event, select) => {
        if(select===0) {
            allFalse();
            setIsFull(!isFull);
        } else if(select===1) {
            allFalse();
            setIsPart(!isPart);
        } else {
            allFalse();
            setIntern(!isIntern);
        }
    }

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const onValid = (data) => {
        console.log(data);
    }
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


    return (
        <>
        <SubHeader/>
        <Entire>
            <Mainbg>
            <Main>
                <MainCata>
                    <Header>공고 종류</Header>
                    <MainCataList>
                        { isFull ?
                        <MainCataButtonCli
                        onClick={e => ButtonClick(e,0)}>채용</MainCataButtonCli>
                        :
                        <MainCataButton
                        onClick={e => ButtonClick(e,0)}>채용</MainCataButton>
                        }
                        { isPart ?
                        <MainCataButtonCli
                        onClick={e => ButtonClick(e,1)}>아르바이트</MainCataButtonCli>
                        :
                        <MainCataButton
                        onClick={e => ButtonClick(e,1)}>아르바이트</MainCataButton>
                        }
                        { isIntern ?
                        <MainCataButtonCli
                        onClick={e => ButtonClick(e,2)}>인턴</MainCataButtonCli>
                        :
                        <MainCataButton
                        onClick={e => ButtonClick(e,2)}>인턴</MainCataButton>
                        }
                    </MainCataList>
                </MainCata>
                <form onSubmit={handleSubmit(onValid)}>
                <MainTitle>
                    <Header>제목</Header>
                    <MainInput
                    {...register("title", {required: true})}
                    propsheight="35px"
                    placeholder="최대 25자"></MainInput>
                </MainTitle>
                <MainPeriod>
                    <Header>근무환경</Header>
                    { isFull && (
                    <FullImgdiv>
                        <FullImg
                        src={officalImg2}/>
                        <nav>
                            <Condition>
                                <ConditionItem
                                style={{marginTop: "20px"}}>
                                    <span>근무기간</span>
                                    <InputBox
                                    {...register("employment_period", {required: true})}/>
                                </ConditionItem>
                                <ConditionItem>
                                    <span>근무시간</span>
                                    <InputBox
                                    {...register("working_time", {required: true})}/>
                                </ConditionItem>
                                <ConditionItem>
                                    <span>급여종류</span>
                                    <InputBox
                                    {...register("payment_interval_type", {required: true})}/>
                                </ConditionItem>
                                <ConditionItem>
                                    <span>급여금액</span>
                                    <InputBox
                                    {...register("payment_per_interval", {required: true})}/>
                                </ConditionItem>
                                <ConditionItem>
                                    <span>모집인원</span>
                                    <InputBox
                                    {...register("hiring_number", {required: true})}/>
                                </ConditionItem>
                            </Condition>
                        </nav>
                    </FullImgdiv> )}
                    { isPart && (
                        <MainPeriodmain>
                            <MainPeriodDay>월</MainPeriodDay>
                            <MainPeriodDay>화</MainPeriodDay>
                            <MainPeriodDay>수</MainPeriodDay>
                            <MainPeriodDay>목</MainPeriodDay>
                            <MainPeriodDay>금</MainPeriodDay>
                            <MainPeriodDay>토</MainPeriodDay>
                            <MainPeriodDay>일</MainPeriodDay>
                        </MainPeriodmain>)}
                    { isIntern && (
                    <MainPeriodMain>
                        <MainPeriodMainElement>
                            <PeriodHeader>
                                🐣 시작일
                            </PeriodHeader>
                            <CustomDatePickerflex>
                                <CustomDatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                />
                            </CustomDatePickerflex>
                        </MainPeriodMainElement>
                        <MainPeriodMainElement>
                            <PeriodHeader>
                                🐓 종료일
                            </PeriodHeader>
                            <CustomDatePickerflex>
                                <CustomDatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                endDate={endDate}
                                minDate={startDate}
                                />
                            </CustomDatePickerflex>
                        </MainPeriodMainElement>
                    </MainPeriodMain>)}
                </MainPeriod>
                <MainStory>
                    <Header>내용</Header>
                    <MainInput
                    propsheight="300px"
                    placeholder="최대 2000자"
                    {...register("content", {required: true})}/>
                </MainStory>
                <Maindiv>
                        <SubmitButton
                        text="공고등록"/>
                </Maindiv>
                </form>
            </Main>
            </Mainbg>
        </Entire>
        <MainFooter/>
        </>
    );
}

export default DrawPost;