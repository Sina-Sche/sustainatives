import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Sidebar from "../components/Sidebar";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 10px 0px;
  height: 100vh;
  width: 60%;
  background-image: var(--gradient);
  position: fixed;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  transition: ${(props) => (props.sidebar ? "350ms" : "850ms")};
  z-index: 1;
`;

const SidebarPage = ({ sidebar, toggleSidebar }) => {
  return (
    <>
      <SidebarContainer sidebar={sidebar} onClick={toggleSidebar}>
        <Sidebar />
      </SidebarContainer>
    </>
  );
};

export default SidebarPage;

SidebarPage.propTypes = {
  sidebar: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};
