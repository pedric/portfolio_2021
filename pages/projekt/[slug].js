import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import Hero from "../../components/Hero";
import Gallery from "../../components/Gallery";

const Post = ({ slug, project }) => {
  /* editors can insert gallery in content with [gallery] */
  const [contentBlocks, setContentBlocks] = useState([]);
  useEffect(() => {
    const contentBlocksArray = content.split("<p>[gallery]</p>");
    setContentBlocks(contentBlocksArray);
  }, [project]);
  /* editors can insert gallery in content with [gallery] */
  const { title, content } = project;
  const { url } = project.metadata.hero;
  const { gallery } = project.metadata;

  return (
    <Layout>
      {title && <Hero tagLine={title} image={url} />}

      <Article>
        {contentBlocks[0] && (
          <div dangerouslySetInnerHTML={{ __html: contentBlocks[0] }}></div>
        )}

        {gallery.length > 0 && <Gallery images={gallery} />}

        {contentBlocks[1] && (
          <div dangerouslySetInnerHTML={{ __html: contentBlocks[1] }}></div>
        )}
      </Article>
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
