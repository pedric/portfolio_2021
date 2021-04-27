import React from "react";

const Post = ({ htmlString, data }) => {
  return (
    <div>
      <h2>Content below {data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "yo" } }],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const htmlString = "<h1>hello " + slug + "</h1>";

  return {
    props: {
      htmlString,
      data: "datapata",
    },
  };
};

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops

export default Post;
