import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import Hero from "../../components/Hero";
import Gallery from "../../components/Gallery";
import Head from "next/head";

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
    <>
      <Head>
        <title>{title} | Fredrik Larsson design</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          property='og:title'
          content={`${title} | Fredrik Larsson design`}
        />
        <meta
          property='og:image'
          content={gallery.length > 0 ? gallery[0].gallery_image.url : ""}
        />
      </Head>
      <Layout>
        {title && <Hero tagLine={title} image={url} />}

        <Article>
          {contentBlocks[0] && (
            <Div dangerouslySetInnerHTML={{ __html: contentBlocks[0] }}></Div>
          )}

          {gallery.length > 0 && <Gallery images={gallery} />}

          {contentBlocks[1] && (
            <Div dangerouslySetInnerHTML={{ __html: contentBlocks[1] }}></Div>
          )}
        </Article>
      </Layout>
    </>
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
  max-width: 700px;
  margin: 0 auto;
`;

const Div = styled.div`
  padding: 0 16px;
`;

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops

export default Post;
