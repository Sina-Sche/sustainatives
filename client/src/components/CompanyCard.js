import styled from "styled-components/macro";
import Placeholder from "../assets/images/reduce.jpg";

const Card = styled.div`
  background-image: var(--gradient);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h6 {
    color: var(--primary-color);
  }
  span {
    color: var(--primary-color);
    font-size: 0.9rem;
    margin: 15px;
  }
`;
const CompanyCard = () => {
  return (
    <Card>
      <h6>Company Name</h6>
      <img src={Placeholder} alt={"Test"} height="150px" width="150px" />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
        explicabo. Eveniet expedita minus odio rem a incidunt quas, praesentium
        assumenda eum illum repudiandae similique, veritatis necessitatibus
        maxime? Quod, fuga unde?
      </span>
    </Card>
  );
};

export default CompanyCard;
