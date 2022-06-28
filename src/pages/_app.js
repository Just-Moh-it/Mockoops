import { useEffect } from "react";
import "styles/globals.scss";
import { ThemeProvider } from "next-themes";
import { ShortcutProvider } from "@shopify/react-shortcuts";
import { RecoilRoot, useRecoilSnapshot, usePrevious } from "recoil";
import Transition from "components/Loading/transition";
import { Toaster } from "react-hot-toast";

// Recoil devtools
function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ShortcutProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
          <Transition />
          <Toaster />
        </ThemeProvider>
      </ShortcutProvider>
      <DebugObserver />
    </RecoilRoot>
  );
}

export default MyApp;
