import { useQuery } from "react-query";
import { getAllProjects } from "../utils/api";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PageWrapper from "../components/PageWrapper";
import ProjectsCard from "../components/ProjectsCard";
import styled from "styled-components/macro";

const PageWrapperFlex = styled(PageWrapper)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 62px 0 62px;
  @media only screen and (min-width: 1370px) {
    height: 100vh;
  }
`;
const Content = styled.div`
  @media only screen and (min-width: 945px) {
    padding-left: 25%;
    align-self: flex-start;
  }
  @media only screen and (min-width: 1370px) {
    display: flex;
    flex-direction: row;
    align-self: center;
  }
`;

const ProjectsPage = () => {
  const { data } = useQuery(["projects"], async () => await getAllProjects());
  return (
    <PageWrapperFlex>
      <Header title={"Projects"} />
      <Content>
        {data?.map((project) => {
          return <ProjectsCard key={project._id} {...project} />;
        })}
      </Content>
      <NavBar />
    </PageWrapperFlex>
  );
};

export default ProjectsPage;
