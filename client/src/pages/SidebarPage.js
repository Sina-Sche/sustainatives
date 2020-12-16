import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Sidebar from "../components/Sidebar";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border: none;
  height: 100vh;
  width: 60%;
  background-image: var(--gradient);
  position: fixed;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  transition: ${(props) => (props.sidebar ? "350ms" : "850ms")};
  z-index: 1;
`;

const Blur = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  background: var(--primary-color);
  position: fixed;
  backdrop-filter: blur(10px);
  ${({ sidebar }) =>
    !sidebar ? "opacity:0; visibility:hidden;" : "opacity:0.7;"};
  transition: opacity 0.3s ease-in-out;
`;

const SidebarPage = ({ sidebar, toggleSidebar }) => {
  return (
    <>
      <Blur sidebar={sidebar} />
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
