import React from "react";
import Layout from "../../components/common/Layout";
import Hero from "../../components/Hero";
import ProjectListView from "../../components/ProjectListView";
import Head from "next/head";

const ProjectPage = ({ pageData, projects }) => {
  const { tagline, cover_image } = pageData.object.metadata;
  return (
    <>
      <Head>
        <title>Projekt | Fredrik Larsson design</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          property='og:title'
          content={`Projekt | Fredrik Larsson design`}
        />
      </Head>
      <Layout>
        {tagline && <Hero tagLine={tagline} />}
        {/* <pre>{JSON.stringify(pageData, null, 2)}</pre>
      <pre>{JSON.stringify(projects, null, 2)}</pre> */}
        <ProjectListView projects={projects} />
      </Layout>
    </>
  );
};

export default ProjectPage;

export const getStaticProps = async ({ params }) => {
  const page = await fetch(process.env.PROJECTPAGE_API_STRING);
  const pageData = await page.json();
  const projectData = await fetch(process.env.PROJECT_API_STRING);
  const projects = await projectData.json();

  return {
    props: {
      pageData,
      projects,
    },
  };
};
