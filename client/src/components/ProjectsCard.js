import styled from "styled-components/macro";
import icons from "./CategoryIcons";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: auto;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--secondary-color);
  border-radius: 50px;
  @media only screen and (min-width: 1235px) {
    margin: 20px;
    width: 350px;
  }

  img {
    width: 280px;
    border-radius: 50px;
    padding: 20px;
    margin: auto;
  }
  h3,
  h4 {
    margin: 0;
    padding: 0;
  }
  div {
    display: flex;
    justify-content: center;
  }
  svg {
    fill: var(--secondary-color);
    height: 40px;
    margin: 10px;
  }
`;

const ProjectsCard = (project) => {
  const projectCategories = project.categories.map(
    (category) => icons[category]
  );
  const projectCategoryIcons = Object.entries(
    projectCategories
  ).map(([categoryName, { icon: Icon }]) => <Icon key={categoryName} />);
  return (
    <Container>
      <img src={project.image} alt={project.project_name} />
      <h3>{project.project_name}</h3>
      <h4>{project.continent}</h4>
      <div>{projectCategoryIcons}</div>
    </Container>
  );
};

export default ProjectsCard;

ProjectsCard.propTypes = {
  project: PropTypes.object,
};
