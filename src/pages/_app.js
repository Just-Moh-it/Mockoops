import Head from "next/head";
import "styles/globals.scss";
import { ThemeProvider } from "next-themes";
import { ShortcutProvider } from "@shopify/react-shortcuts";
import { RecoilRoot, useRecoilState } from "recoil";
import { Toaster } from "react-hot-toast";
import Modal from "components/Modal";
import { modalState } from "state/global";

// Metrics
import WithYandexMetrika from "lib/withYandexMetrika";

function MyApp({ Component, pageProps }) {
  return (
    <WithYandexMetrika>
      <RecoilRoot>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
        </Head>
        <ShortcutProvider>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
            <Toaster />
            <ModalHandler />
          </ThemeProvider>
        </ShortcutProvider>
      </RecoilRoot>
    </WithYandexMetrika>
  );
}

const ModalHandler = () => {
  const [modal] = useRecoilState(modalState);

  if (modal.isOpen) return <Modal content={modal?.content} />;

  return <></>;
};

export default MyApp;
