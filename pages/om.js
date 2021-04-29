import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/common/Layout";
import Hero from "../components/Hero";

const AboutPage = ({ pageData }) => {
  const { tagline, cover_image } = pageData.object.metadata;
  const { content } = pageData.object;
  return (
    <Layout>
      {tagline && <Hero tagLine={tagline} image={cover_image.url} />}
      {content && <Article dangerouslySetInnerHTML={{ __html: content }} />}
      {/* <pre>{JSON.stringify(pageData, null, 2)}</pre> */}
    </Layout>
  );
};

const Article = styled.article`
  max-width: 640px;
  margin: 0 auto;
`;

export default AboutPage;

export const getStaticProps = async ({ params }) => {
  const result = await fetch(process.env.ABOUTPAGE_API_STRING);
  const pageData = await result.json();

  return {
    props: {
      pageData,
    },
  };
};
