import "../styles/globals.scss";
import { ThemeProvider } from "next-themes";
import { ShortcutProvider } from "@shopify/react-shortcuts";

function MyApp({ Component, pageProps }) {
  return (
    <ShortcutProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ShortcutProvider>
  );
}

export default MyApp;
