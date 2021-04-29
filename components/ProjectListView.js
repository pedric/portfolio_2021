import React, { useEffect, useState } from "react";
import ProjectListCard from "./ProjectListCard";
import styled from "styled-components";

const ProjectListView = ({ projects }) => {
  const [items, setItems] = useState(projects.objects);

  useEffect(() => {
    setItems(projects.objects);
  }, [projects]);

  const mousoverHandler = (item) => {
    const projects = [...items];
    projects.forEach((project) => {
      if (project !== item) {
        project.hover = true;
      }
    });
    setItems(projects);
  };

  const mouseOutHandler = () => {
    const projects = [...items];
    projects.forEach((project) => {
      project.hover = false;
    });
    setItems(projects);
  };

  return (
    <StyledList>
      {typeof items !== "undefined" && items.length > 0
        ? items.map((project, index) => {
            return (
              <ProjectListCard
                key={index}
                image={{
                  src: project.metadata.thumbnail.url,
                  alt: "temp alttext",
                }}
                caption={project.title}
                mouseOver={() => mousoverHandler(project)}
                mouseOut={() => mouseOutHandler()}
                item={project}
                isHovered={project.hover}
                index={index}
                slug={project.slug}
              />
            );
          })
        : null}
    </StyledList>
  );
};

const StyledList = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (min-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default ProjectListView;
