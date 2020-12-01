import PropTypes from "prop-types";
import SearchIcon from "../assets/icons/search.svg";
import styled from "styled-components/macro";

const InputContainer = styled.form`
  width: 80%;
  margin: 10px;
  border: 1px solid #027368;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.img`
  height: 30px;
  margin: 20px;
`;

const InputField = styled.input`
  border: none;
  height: 40px;
  width: 90%;
  margin-left: 50px;
`;

const Input = ({ placeholder }) => {
  return (
    <InputContainer>
      <InputField placeholder={placeholder} />
      <Img src={SearchIcon} alt="Search" />
    </InputContainer>
  );
};
export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
};