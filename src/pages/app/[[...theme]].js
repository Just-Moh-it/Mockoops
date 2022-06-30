import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "components/App/Layout";

const App = () => {
  // Get theme from the url
  const router = useRouter();

  // Get the theme from the URL
  const { theme } = router.query;

  // Check if the theme is specified, else redirect to a certain page
  useEffect(() => {
    if (!theme) {
      router.push("/app/getting-started");
    }
  }, [router]);

  // Redirect to the getting-started page if theme not specified
  if (!theme) {
    return <>Redirecting to the getting-started page...</>;
  }

  // MAIN LOGIC
  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default App;
