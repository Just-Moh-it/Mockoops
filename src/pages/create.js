import Layout from "components/App/Layout";
import RenderHandler from "lib/handleRender";
import Head from "next/head";
import { toast } from "react-hot-toast";

const CreatePage = () => {
  toast.error(
    "Rendering videos with custom video/audio is currently unavilable (though previewing is available). Please check back in a few days, apologies.",
    {
      duration: 10000,
      id: "upload-unavailable-reason",
      position: "bottom-left",
    }
  );

  return (
    <>
      <Head>
        <title>Create | Mockoops</title>
      </Head>
      <Layout />
      <RenderHandler />
    </>
  );
};

export default CreatePage;
