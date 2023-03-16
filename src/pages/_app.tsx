import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { Poppins } from "next/font/google";

import "~/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
