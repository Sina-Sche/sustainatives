import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components/macro";
import CategoryList from "./CategoryList";
import FAQComponent from "./FAQComponent";
import SuggestionForm from "./SuggestionForm";

const Button = styled.button`
  border: 1px solid var(--secondary-color);
  border-radius: 50px;
  margin: 20px;
  background-image: ${(props) => (props.visible ? "var(--gradient)" : "none")};
  h3 {
    color: ${(props) =>
      props.visible ? "var(--primary-color)" : "var(--secondary-color)"};
  }
`;

const ToggleVisibility = ({ title, type, activeCategories, toggleActive }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Button onClick={handleClick} type={type} visible={visible}>
        <h3>{title}</h3>
      </Button>
      {visible && type === "categories" && (
        <CategoryList
          activeCategories={activeCategories}
          toggleActive={toggleActive}
          onClick={() => {
            alert("Click");
          }}
        />
      )}
      {visible && type === "add" && (
        <SuggestionForm
          activeCategories={activeCategories}
          toggleActive={toggleActive}
        />
      )}
      {visible && type === "faq" && <FAQComponent />}
    </>
  );
};

ToggleVisibility.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
  activeCategories: PropTypes.array,
  toggleActive: PropTypes.func,
};

export default ToggleVisibility;