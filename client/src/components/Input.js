import PropTypes from "prop-types";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Add } from "../assets/icons/plus.svg";
import styled from "styled-components/macro";

const InputContainer = styled.form`
  width: 90vw;
  margin: 30px auto;
  border: 1px solid var(--icon-active-color);
  border-radius: 50px;
  display: flex;
  align-items: center;
  button {
    border: none;
    background: none;
  }
`;

const SearchIcon = styled(Search)`
  height: 30px;
  width: 30px;
  fill: var(--icon-active-color);
  margin: 10px;
`;
const AddIcon = styled(Add)`
  height: 30px;
  width: 30px;
  fill: var(--icon-active-color);
  margin: 10px;
`;
const InputField = styled.input`
  border: none;
  height: 40px;
  width: 90%;
  margin-left: 50px;
`;

const Input = ({ placeholder, type }) => {
  return (
    <InputContainer>
      <InputField placeholder={placeholder} type={type} />
      {type === "search" ? (
        <button>
          <SearchIcon />
        </button>
      ) : (
        <AddIcon />
      )}
    </InputContainer>
  );
};
export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
