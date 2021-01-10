import { useQuery } from "react-query";
import { getAllProjects } from "../utils/api";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PageWrapper from "../components/PageWrapper";
import ProjectsCard from "../components/ProjectsCard";

const ProjectsPage = () => {
  const { data } = useQuery(["projects"], async () => await getAllProjects());
  return (
    <PageWrapper>
      <Header title={"Projects"} />
      {data?.map((project) => {
        return <ProjectsCard key={project._id} {...project} />;
      })}
      <NavBar />
    </PageWrapper>
  );
};

export default ProjectsPage;
