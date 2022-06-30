import "styles/globals.scss";
import { ThemeProvider } from "next-themes";
import { ShortcutProvider } from "@shopify/react-shortcuts";
import { RecoilRoot, useRecoilState } from "recoil";
import { Toaster } from "react-hot-toast";
import Modal from "components/Modal";
import { modalState } from "state/global";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ShortcutProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
          <Toaster />
          <ModalHandler />
        </ThemeProvider>
      </ShortcutProvider>
    </RecoilRoot>
  );
}

const ModalHandler = () => {
  const [modal] = useRecoilState(modalState);

  if (modal.isOpen) return <Modal content={modal?.content} />;

  return <></>;
};

export default MyApp;
