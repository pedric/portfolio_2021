import React, { useEffect, useState } from "react";
import ProjectListCard from "./ProjectListCard";
import styled from "styled-components";

const ProjectListView = ({ projects }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(projects);
  });

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
    projects.forEach((project) => {
      project.hover = false;
    });
    setItems(projects);
  };

  return (
    <StyledList>
      {items.length > 0 &&
        items.map((project, index) => {
          return (
            <ProjectListCard
              key={index}
              image={{ src: project.thumbnail, alt: "temp alttext" }}
              caption={project.title}
              mouseOver={() => mousoverHandler(project)}
              mouseOut={() => mouseOutHandler()}
              item={project}
              isHovered={project.hover}
              index={index}
            />
          );
        })}
    </StyledList>
  );
};

export default ProjectListView;

const StyledList = styled.div``;
