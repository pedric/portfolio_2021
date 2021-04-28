import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
// import ProjectListCard from "../components/ProjectListCard";
// import ProjectListView from "../components/ProjectListView";
import ThemeContext from "./Context";
import Layout from "../components/common/Layout";

export default function Home({ data }) {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch(apiString)
    //   .then((result) => result.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => setError(error))
    //   .finally(() => setIsLoading(false));
  }, []);

  // const theme = useContext(ThemeContext);
  // console.log("THEME", theme);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <main>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          {/* <ProjectListView projects={projects} /> */}
        </main>
      </Layout>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const result = await fetch(process.env.STARTPAGE_API_STRING);
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
};
