import Layout from "components/App/Layout";
import RenderHandler from "lib/handleRender";
import Head from 'next/head'

const CreatePage = () => {
  return (
    <>
    <Head><title>Create | Mockoops</title></Head>
      <Layout />
      <RenderHandler />
    </>
  );
};

export default CreatePage;
