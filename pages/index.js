import React from "react";
import styled from "styled-components";
import Head from "next/head";
import ProjectListView from "../components/ProjectListView";
import ThemeContext from "../Context";
import Layout from "../components/common/Layout";
import Hero from "../components/Hero";

export default function Home({ pageData, projects }) {
  const { tagline } = pageData.object.metadata;
  const { content } = pageData.object;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        {tagline && <Hero tagLine={tagline} />}
        {content && <Article dangerouslySetInnerHTML={{ __html: content }} />}
      </Layout>
    </div>
  );
}

const Article = styled.article`
  max-width: 700px;
  margin: 0 auto;
`;

export const getStaticProps = async ({ params }) => {
  const result = await fetch(process.env.STARTPAGE_API_STRING);
  const pageData = await result.json();
  const projectData = await fetch(process.env.PROJECT_API_STRING);
  const projects = await projectData.json();

  return {
    props: {
      pageData,
      projects,
    },
  };
};
