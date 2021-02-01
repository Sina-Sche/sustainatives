import PropTypes from "prop-types";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Add } from "../assets/icons/plus.svg";
import styled, { css } from "styled-components/macro";

const InputContainer = styled.form`
  width: 90vw;
  margin: 20px auto 20px;
  border: 1px solid var(--icon-active-color);
  border-radius: 50px;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 945px) {
    max-width: 80%;
  }
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

const Input = ({ placeholder, type, onSubmit, onChange }) => {
  return (
    <InputContainer onSubmit={onSubmit}>
      <InputField placeholder={placeholder} type={type} onChange={onChange} />
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
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
