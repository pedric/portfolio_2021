import React from "react";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import Hero from "../../components/Hero";

const Post = ({ slug, project }) => {
  const { title, content } = project;
  const { url } = project.metadata.hero;
  return (
    <Layout>
      {title && <Hero tagLine={title} image={url} />}
      {content && <Article dangerouslySetInnerHTML={{ __html: content }} />}
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </Layout>
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

const Article = styled.article`
  max-width: 640px;
  margin: 0 auto;
`;

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops

export default Post;
