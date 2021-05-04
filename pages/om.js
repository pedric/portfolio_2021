import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/common/Layout";
import Hero from "../components/Hero";

const AboutPage = ({ pageData }) => {
  const { tagline, cover_image } = pageData.object.metadata;
  const { content } = pageData.object;
  return (
    <>
      <Head>
        <title>Om Fredrik Larsson design | Fredrik Larsson design</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        {tagline && <Hero tagLine={tagline} image={cover_image.url} />}
        {content && <Article dangerouslySetInnerHTML={{ __html: content }} />}
      </Layout>
    </>
  );
};

const Article = styled.article`
  max-width: 732px;
  margin: 0 auto;
  padding: 0 16px;
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
