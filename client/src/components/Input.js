import PropTypes from "prop-types";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Add } from "../assets/icons/plus.svg";
import styled, { css } from "styled-components/macro";

const InputContainer = styled.form`
  width: 90vw;
  margin: 80px auto 20px;
  border: 1px solid var(--icon-active-color);
  border-radius: 50px;
  display: flex;
  align-items: center;
  button {
    border: none;
    background: none;
  }
`;
const Icon = css`
  height: 30px;
  width: 30px;
  fill: var(--icon-active-color);
  margin: 10px;
`;

const SearchIcon = styled(Search)`
  ${Icon}
`;
const AddIcon = styled(Add)`
  ${Icon}
`;
const InputField = styled.input`
  border: none;
  height: 40px;
  width: 90%;
  margin-left: 30px;
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
