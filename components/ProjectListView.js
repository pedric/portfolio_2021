import React, { useEffect, useState } from "react";
import ProjectListCard from "./ProjectListCard";
import styled from "styled-components";

const ProjectListView = ({ projects }) => {
  const [items, setItems] = useState(projects.objects);

  useEffect(() => {
    setItems(projects.objects);
    // console.log(items);
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
              />
            );
          })
        : null}
    </StyledList>
  );
};

export default ProjectListView;

const StyledList = styled.div``;
