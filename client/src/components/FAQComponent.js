import styled from "styled-components/macro";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MottoImg from "../assets/images/reduce.jpg";
import "swiper/swiper-bundle.css";

const Img = styled.img`
  height: 150px;
  border-radius: 60px;
  margin: auto;
`;

const Card = styled.div`
  background-image: var(--gradient);
  border-radius: 50px;
  width: 90%;
  margin: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  h6 {
    color: var(--primary-color);
  }
  span {
    color: var(--primary-color);
    font-size: 0.9rem;
    margin: 15px;
  }
`;

const StyledSwiper = styled(Swiper)`
  max-width: 100%;
  z-index: 0;
`;

SwiperCore.use([Navigation, Pagination]);

const FAQComponent = () => {
  return (
    <>
      <StyledSwiper
        id="main"
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        <SwiperSlide key={1}>
          <Card>
            <h6>What qualifies as a SustainAtive? </h6>
            <Img src={MottoImg} alt="Reduce,Reuse" />
            <span>
              In order for products to be qualified as SustainAtives we run them
              across a set of rules and conditions. Their reusability, impact on
              environment, where and how they are produced along with many other
              facts are being checked in order to guarantee that the products
              offered on this platform truly have a good impact all around. The
              companies offering these products made the protection of the
              environment, along with other great causes their top priority.
            </span>
          </Card>
        </SwiperSlide>

        <SwiperSlide key={2}>
          <Card>
            <h6>What qualifies as a SustainAtive? </h6>
            <Img src={MottoImg} alt="Reduce,Reuse" />
            <span>
              In order for products to be qualified as SustainAtives we run
              themacross a set of rules and conditions. Their reusability,
              impact on environment, where and how they are produced along with
              many other factsare being checked in order to guarantee that the
              products offered onthis platform truly have a good impact all
              around. The companiesoffering these products made the protection
              of the environment, along with other great causes their top
              priority.
            </span>
          </Card>
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
};

export default FAQComponent;
