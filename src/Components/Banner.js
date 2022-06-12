import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import mention from "../img/mention.png";
import career2 from "../img/career2.png";
import styled from "styled-components";
import { useNavigate } from 'react-router';
import Banner1 from "../img/Banner1.png";
import Banner2 from "../img/Banner2.png";
import Banner3 from "../img/Banner3.png";

const SubMainImg = styled.img`
    position: relative;
    top: -100px;
    height: 450px;
    object-fit: scale-down;
`;

const SubMainMent = styled.img`
    width: 500px;
    position: relative;
    top: -220px;
`;

const Button2 = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;

  img {
    height: 70%;
    object-fit: scale-down;
  }
`;

const BannerSection3 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`; 

function Banner() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const navigate = useNavigate();

  return(
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000}}	// 추가
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          height: "300px",
          width: "900px",
        }}
      >
        <SwiperSlide
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <SubMainImg
            src={career2} alt="직업">
            </SubMainImg>
            <SubMainMent
            src={mention} alt="멘트"
            >
            </SubMainMent>
        </SwiperSlide>
        <SwiperSlide>
          <Button2 onClick={() => {navigate("/VCIssue")}}>
            <img src={Banner1} alt="Banner2"/>
          </Button2>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSection3>
            <img src={Banner2} alt="Banner2"
            style={{
              height: "80%",
              objectFit: "scale-down",
            }}/>
          </BannerSection3>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSection3>
            <img src={Banner3} alt="Banner3"
            style={{
              height: "90%",
              objectFit: "scale-down",
            }}/>
          </BannerSection3>
        </SwiperSlide>
      </Swiper>
  )
}

export default Banner;