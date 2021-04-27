import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProjectListCard from "../components/ProjectListCard";
import ProjectListView from "../components/ProjectListView";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.cosmicjs.com/v2/buckets/be520b80-a6ed-11eb-a570-a98d811b502d/objects?pretty=true&query=%7B%22type%22%3A%22projekt%22%7D&read_key=OqwKcIieW5PPB8JBr3HLeRbOPZCpf9l13DzLxyc4tj4dvZR13E&limit=20&props=slug,title,content,metadata,`
    )
      .then((result) => result.json())
      .then((data) => setProjects(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <ProjectListView projects={projects} />
      </main>
    </div>
  );
}
