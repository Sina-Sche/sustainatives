import styled from "styled-components/macro";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  width: 95%;
  overflow: auto;
  h3 {
    margin: 0;
    padding: 0;
    text-align: left;
  }
  h6 {
    text-align: left;
    margin: 0px;
    align-self: flex-start;
    padding: 20px 0px 0px;
  }
  h5 {
    margin-right: 15px;
    padding-top: 5px;
    justify-self: flex-end;
    align-self: flex-end;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  div {
    display: flex;
    justify-content: flex-start;
  }
  :first-child {
    text-align: left;
  }
  svg {
    height: 25px;
    width: 25px;
    fill: var(--secondary-color);
    margin: 5px 15px 0px 0px;
    padding: 0px;
  }
`;

export default InfoContainer;
