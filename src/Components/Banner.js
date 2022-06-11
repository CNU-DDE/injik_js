import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import mention from "../img/mention.png";
import career2 from "../img/career2.png";
import styled from "styled-components";
import { useNavigate } from 'react-router';

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

function Banner() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const navigate = useNavigate();

  return(
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000}}	// 추가
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
          <button
          onClick={() => {navigate("/VCIssue")}}
          style={{
            width: "100%",
            height: "100%",
          }}>

          </button>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
  )
}

export default Banner;