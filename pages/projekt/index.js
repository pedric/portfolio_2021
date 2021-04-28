import React from "react";

const ProjectPage = ({ data }) => {
  return (
    <div>
      <h1>Projektsida</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProjectPage;

export const getStaticProps = async ({ params }) => {
  const result = await fetch(process.env.PROJECTPAGE_API_STRING);
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
};
