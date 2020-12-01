import Header from "../components/Header";
import Image from "../components/Image";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";
import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";
import { ReactComponent as Travel } from "../assets/icons/travel.svg";
import { ReactComponent as Reuse } from "../assets/icons/reuse.svg";
import { ReactComponent as Tree } from "../assets/icons/tree.svg";

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  > :last-child {
    height: auto;
    background-image: linear-gradient(45deg, #4d868c, #027368);
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  h3 {
    text-align: left;
    color: white;
  }
  p {
    color: white;
  }
`;

const Button = styled.button`
  background-color: white;
  border: none;
  align-self: flex-end;
  width: 40%;
  border-radius: 50px;
  color: var(--secondary-color);
  font-weight: bold;
  padding: 8px;
  margin: 15px;
  letter-spacing: 1;
  font-size: 0.9rem;
`;

const categoryStyle = css`
  margin: 15px;
  width: 50px;
  height: 50px;
  fill: white;
`;

const BambooIcon = styled(Bamboo)`
  ${categoryStyle}
`;
const TravelIcon = styled(Travel)`
  ${categoryStyle}
`;
const ReuseIcon = styled(Reuse)`
  ${categoryStyle}
`;
const TreeIcon = styled(Tree)`
  ${categoryStyle}
`;

export const DetailsPage = ({ onClick, isFavorite }) => {
  return (
    <>
      <Header title={"Discover"} />
      <DetailsContainer>
        <Image onClick={onClick} isFavorite={isFavorite} />
        <div>
          <h3>Bambook Notebook</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            voluptates itaque, laborum quae dolore ad architecto tenetur
            praesentium sequi? Impedit soluta ab doloremque cum modi, eum
            laboriosam quibusdam nisi perferendis?
          </p>
          <div>
            <BambooIcon />
            <TravelIcon />
            <ReuseIcon />
            <TreeIcon />
          </div>
          <Button>Visit Website</Button>
        </div>
      </DetailsContainer>
      <NavBar />
    </>
  );
};

DetailsPage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
  title: PropTypes.string,
};
