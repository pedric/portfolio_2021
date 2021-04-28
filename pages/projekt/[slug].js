import React from "react";

const Post = ({ slug, project }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: slug }} />
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </div>
  );
};

export const getStaticPaths = async () => {
  const result = await fetch(process.env.PROJECT_API_STRING);

  const data = await result.json();
  const projects = await data.objects;

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const result = await fetch(process.env.PROJECT_API_STRING);

  const data = await result.json();
  const project = await data.objects.find((p) => p.slug === params.slug);

  return {
    props: {
      slug: params.slug,
      project,
    },
  };
};

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops

export default Post;
