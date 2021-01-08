import styled from "styled-components/macro";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MottoImg from "../assets/images/reduce.jpg";
import { ReactComponent as Thanks } from "../assets/images/thanks.svg";
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
  h6,
  h5 {
    color: var(--primary-color);
  }
  span {
    color: var(--primary-color);
    font-size: 0.9rem;
    margin: 15px;
  }
  svg {
    height: 150px;
    margin: auto;
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
            <h6>1. What qualifies as a SustainAtive? </h6>
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
            <h6>2. How can I add a SustainAtive </h6>
            <Thanks />
            <span>
              To add a product to our collection of SustainAtives, you will
              first have to send in a suggestion. You can do this, right above
              the FAQs here on the About Page. The team will then review the
              product and see if it definitely qualifies as a SustainAtive. If
              so, we will fill in all the details and add the product to our
              collection. Before you add a SustainAtive, please make sure that
              the product is not yet available on here, by searching for it on
              our Search Page.
            </span>
          </Card>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <Card>
            <h6>3. More Questions? </h6>
            <h5>Anything else you want to know about SustainAtives</h5>
            <span>
              If you have any questions, you can contact us at xxxx@xxxx.com.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              accusantium ab molestiae tempore perspiciatis possimus nemo
              repellendus iste nihil sequi! Doloribus, quas eligendi. Nesciunt,
              repellendus sed asperiores nulla saepe perspiciatis.
            </span>
          </Card>
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
};

export default FAQComponent;
