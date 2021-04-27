import React from "react";

const Post = ({ slug, project }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: slug }} />
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </div>
  );
};

export const getStaticPaths = async () => {
  const result = await fetch(
    `https://api.cosmicjs.com/v2/buckets/be520b80-a6ed-11eb-a570-a98d811b502d/objects?pretty=true&query=%7B%22type%22%3A%22projekt%22%7D&read_key=OqwKcIieW5PPB8JBr3HLeRbOPZCpf9l13DzLxyc4tj4dvZR13E&limit=20&props=slug,title,content,metadata,`
  );

  const data = await result.json();
  const projects = await data.objects;

  console.log(projects);

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const result = await fetch(
    `https://api.cosmicjs.com/v2/buckets/be520b80-a6ed-11eb-a570-a98d811b502d/objects?pretty=true&query=%7B%22type%22%3A%22projekt%22%7D&read_key=OqwKcIieW5PPB8JBr3HLeRbOPZCpf9l13DzLxyc4tj4dvZR13E&limit=20&props=slug,title,content,metadata,`
  );

  const data = await result.json();
  const project = await data.objects.find((p) => p.slug === params.slug);

  return {
    props: {
      slug: params.slug,
      project,
    },
  };
};

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops

export default Post;
