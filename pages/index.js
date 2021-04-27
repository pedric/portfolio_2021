import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProjectListCard from "../components/ProjectListCard";
import ProjectListView from "../components/ProjectListView";

export default function Home() {
  const projects = [
    {
      thumbnail:
        "https://cdn.abicart.com/shop/ws73/83973/art73/h3387/163053387-origpic-ea9029.jpg",
      title: "uggla",
      hover: false,
    },
    {
      thumbnail:
        "https://www.nallebutiken.se/wp-content/uploads/2021/01/nalleriet-181.jpg",
      title: "fågel",
      hover: true,
    },
  ];
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
