const AboutPage = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default AboutPage;

export const getStaticProps = async ({ params }) => {
  const result = await fetch(process.env.ABOUTPAGE_API_STRING);
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
};
